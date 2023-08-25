//=============================================================================
// KMS_DebugUtil.js
//   Last update: 2018/01/06
//=============================================================================

/*:
 * @plugindesc
 * [v0.1.1] Improve debug functions.
 * 
 * @author Kameo (Kamesoft)
 *
 * @param Variable input digits
 * @default 9
 * @desc Specify digits for inputting values. The parameter range is from 1 to 15.
 *
 * @param Map grid color
 * @default rgba(255, 255, 255, 0.6)
 * @desc Specify grid color for map transfer mode.
 *
 * @param Watch window font size
 * @default 18
 * @desc Font size for the watch window's text.
 *
 * @param Watch highlight color
 * @default rgba(255, 224, 192, 0.6)
 * @desc Specify background color for updated watch items by CSS color.
 *
 * @param Watch window width
 * @default 360
 * @desc Specify watch window width by pixel.
 *
 * @param Watch window position
 * @default 0
 * @desc
 *  Specify watch window position.
 *  0: TopLeft  1: TopRight  2: BottomLeft  3: BottomRight
 *
 * @help
 *
 * ## Plugin command
 *
 * DebugUtil watch S 10     # Add switch:10 to the watch window
 * DebugUtil watch V 20     # Add variable:20 to the watch window
 */

/*:ja
 * @plugindesc
 * [v0.1.1] 標準のデバッグ画面を差し替え、様々な機能を追加します。
 * 
 * @author かめお (Kamesoft)
 *
 * @param Variable input digits
 * @default 9
 * @desc 変数入力時の桁数を指定します。最大値は 15 です。
 *
 * @param Map grid color
 * @default rgba(255, 255, 255, 0.6)
 * @desc マップ移動画面のグリッド色を CSS カラーで指定します。
 *
 * @param Watch window font size
 * @default 18
 * @desc ウォッチウィンドウのフォントサイズを指定します。(標準のウィンドウでは 28 です)
 *
 * @param Watch highlight color
 * @default rgba(255, 224, 192, 0.6)
 * @desc ウォッチしている値が変化したときの背景色を CSS カラーで指定します。
 *
 * @param Watch window width
 * @default 360
 * @desc ウォッチウィンドウの幅をピクセル単位で指定します。
 *
 * @param Watch window position
 * @default 0
 * @desc
 *  ウォッチウィンドウの表示位置を指定します。
 *  0: 左上  1: 右上  2: 左下  3: 右下
 *
 * ■ プラグインコマンド
 *
 * DebugUtil watch S 10     # スイッチ ID:10 をウォッチウィンドウに追加
 * DebugUtil watch V 20     # 変数 ID:20 をウォッチウィンドウに追加
 */

// テストプレイ時のみ有効
if (Utils.isOptionValid('test')) {

    var KMS = KMS || {};

    // MapData の一時読み込み先
    var $dataKmsTemporallyMapData = null;

    // セーブデータからの復元を可能にするため、セーブデータに入るクラスをグローバルスコープに置く
    function DebugWatchItemForSave() {
        this.initialize.apply(this, arguments);
    }

    (function () {

        'use strict';

        // 定数
        var Const =
        {
            debug: false,        // デバッグモード
            pluginCode: 'DebugUtil',  // プラグインコード

            pixiVersion: (function () {
                var match = /^(\d+)\..*/gi.exec(PIXI.VERSION);
                return match ? parseInt(match[1]) : 0;
            })(),

            mapTileScale: 0.5,      // マップ移動画面のタイル表示倍率
            mapGridLineWidth: 2,      // マップ移動画面のグリッドの線幅

            watchUpdateDuration: 30,    // ウォッチ更新通知のアニメーション時間

            WatchItemType:
            {
                user: -1,   // ユーザー定義 (TODO: 現状非対応)
                none: 0,   // なし
                switch: 1,   // スイッチ
                variable: 2    // 変数
            },

            // ウォッチ項目の編集モード
            WatchItemEditMode:
            {
                add: 0,        // 追加
                edit: 1         // 編集
            },

            // ウォッチウィンドウ表示位置
            WatchWindowPosition:
            {
                topLeft: 0,     // 左上
                topRight: 1,     // 右上
                bottomLeft: 2,     // 左下
                bottomRight: 3      // 右下
            }
        };

        var PluginName = 'KMS_' + Const.pluginCode;

        KMS.imported = KMS.imported || {};
        KMS.imported[Const.pluginCode] = true;

        KMS.DebugUtil = {};

        // デバッグコマンドのリスト
        KMS.DebugUtil.debugCommands = [];

        // データベースリロード時に呼び出す処理のリスト
        KMS.DebugUtil.databaseReloadHandlers = [];

        // デフォルト値つきで文字列から int を解析
        function parseIntWithDefault(param, defaultValue) {
            var value = parseInt(param);
            return isNaN(value) ? defaultValue : value;
        }

        var pluginParams = PluginManager.parameters(PluginName);
        var Params = {};
        Params.variableInputDigits = Math.min(Math.max(parseIntWithDefault(pluginParams['Variable input digits'], 9), 1), 15);
        Params.formationButton = pluginParams['Formation button'] || 'shift';
        Params.mapGridColor = pluginParams['Map grid color'] || 'rgba(255, 255, 255, 0.6)';
        Params.watchFontSize = Math.max(parseIntWithDefault(pluginParams['Watch window font size'], 18), 1);
        Params.watchUpdateColor = pluginParams['Watch update color'] || 'rgba(255, 224, 192, 0.6)';
        Params.watchWindowPosition = parseIntWithDefault(pluginParams['Watch window position'], 0);
        Params.watchWindowWidth = Math.max(parseIntWithDefault(pluginParams['Watch window width'], 360), 1);
        Params.WatchWindowPosition =
            Math.min(
                Math.max(
                    parseIntWithDefault(pluginParams['Watch window position'], Const.WatchWindowPosition.topLeft),
                    Const.WatchWindowPosition.topLeft),
                Const.WatchWindowPosition.bottomRight
            );

        // デバッグログ
        var debuglog;
        if (Const.debug) {
            debuglog = function () { console.log.apply(console, arguments); };
        }
        else {
            debuglog = function () { };
        }

        var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand.call(this, command, args);

            if (command !== Const.pluginCode) {
                return;
            }

            switch (args[0]) {
                case 'watch':       // ウォッチ ( {S|V} {id} )
                    {
                        var id = parseInt(args[2]);
                        if (!id) {
                            console.error('[%s %s] Invalid ID: %s', Const.pluginCode, args[0], args[2]);
                            return;
                        }

                        var item = new DebugWatchItem();
                        switch (args[1].toUpperCase()) {
                            case 'S':
                                item.setupSwitch(id);
                                break;

                            case 'V':
                                item.setupVariable(id);
                                break;

                            default:
                                console.error('[%s %s] Invalid type: %s', Const.pluginCode, args[0], args[1]);
                                return;
                        }
                        $gameTemp.registerDebugWatchItem(item);
                    }
                    break;

                default:
                    // 不明なコマンド
                    console.error('[%s %s] Unknown command.', Const.pluginCode, args[0]);
                    break;
            }
        };

        /**
         * 日本語環境か否か
         */
        var isJp = (function () {
            var language =
                (navigator.languages && navigator.languages[0]) ||
                navigator.browserLanguage ||
                navigator.userLanguage ||
                navigator.language;
            if (language) {
                return language.substr(0, 2) === 'ja';
            }
            else {
                return false;
            }
        })();

        /**
         * 指定桁数を指定文字で埋めた文字列を返す
         */
        function padDigits(number, digits, pad) {
            var holder = Array(digits + 1).join(pad);
            return (holder + number).slice(-digits);
        }

        /**
         * 他プラグインの影響を除いた素のパラメータ強化値 (Game_Actor に対して呼ぶ)
         */
        var originalParamPlus = function (paramId) {
            return this._paramPlus[paramId];
        };

        /**
         * 文字列であるか判定
         */
        function isString(obj) {
            return typeof obj === 'string' || obj instanceof String;
        }

        /**
         * アイテム系のオブジェクトであるか判定
         */
        function isItemObject(item) {
            return DataManager.isSkill(item) ||
                DataManager.isItem(item) ||
                DataManager.isWeapon(item) ||
                DataManager.isArmor(item);
        }

        /**
         * アクターが作成されているか
         * ($gameActors に対して呼ぶ)
         */
        function isActorCreated(actorId) {
            return !!this._data[actorId];
        }

        /**
         * アクターがパーティ内に存在するか
         * ($gameParty に対して呼ぶ)
         */
        function containsActor(actorId) {
            return this._actors.contains(actorId);
        }

        /**
         * outActor を inActor の位置に加入させ、outActor を外す
         * ($gameParty に対して呼ぶ)
         */
        function replaceActor(inActorId, outActorId) {
            if (this._actors.contains(outActorId)) {
                for (var i = 0; i < this._actors.length; i++) {
                    if (this._actors[i] !== outActorId) {
                        continue;
                    }

                    if (inActorId) {
                        // in/out を入れ替える
                        this._actors[i] = inActorId;
                        break;
                    }
                    else {
                        // in がなしの場合は out を外すだけ
                        this.removeActor(outActorId);
                        return;
                    }
                }
            }
            else if (inActorId) {
                // in だけ存在する場合は単純に追加
                this.addActor(inActorId);
                return;
            }
            else {
                // out が不在で、in も存在しないので何もしない
                return;
            }

            $gamePlayer.refresh();
            $gameMap.requestRefresh();
        }


        //-----------------------------------------------------------------------------
        // KMS

        /**
         * デバッグコマンドの登録
         *
         * command には id, name, onSelect の 3 つを持たせる。
         */
        KMS.DebugUtil.registerCommand = function (command) {
            // 有効判定
            function isValid(cmd) {
                return cmd.id && cmd.name && cmd.onSelect;
            }

            // 一致判定
            function isSame(lhs, rhs) {
                return lhs.id === rhs.id;
            }

            if (!isValid(command)) {
                // 未指定のパラメータがある
                return false;
            }

            var exists = KMS.DebugUtil.debugCommands.some(function (item) {
                return isSame(item, command);
            });
            if (exists) {
                // 登録済み
                console.log('[%s] Command "%s" is already registered', Const.pluginCode, command.id);
                return false;
            }

            KMS.DebugUtil.debugCommands.push(command);
            return true;
        };

        /**
         * データベースリロード時に呼び出す処理を登録
         */
        KMS.DebugUtil.registerDatabaseReloadHandler = function (handler) {
            if (!handler) {
                return false;
            }

            // 一致判定
            function isSame(lhs, rhs) {
                return lhs === rhs;
            }

            var exists = KMS.DebugUtil.databaseReloadHandlers.some(function (item) {
                return isSame(item, command);
            });
            if (exists) {
                // 登録済み
                console.log('[%s] Specified reload handler is already registered', Const.pluginCode);
                return false;
            }

            KMS.DebugUtil.databaseReloadHandlers.push(handler);
            return true;
        };


        //-----------------------------------------------------------------------------
        // DebugWatchItemForSave
        //
        // セーブデータに残す情報のみに絞ったウォッチ項目

        DebugWatchItemForSave.constructor = DebugWatchItemForSave;

        Object.defineProperties(DebugWatchItemForSave.prototype, {
            type: {
                get: function () { return this._type; },
                set: function (value) { this._type = value; },
                configurable: true
            },
            id: {
                get: function () { return this._id; },
                set: function (value) { this._id = value; },
                configurable: true
            },
        });

        DebugWatchItemForSave.prototype.initialize = function () {
            this._type = Const.WatchItemType.switch;
            this._id = 1;
        };

        /**
         * 実際の表示用ウォッチ項目に変換
         */
        DebugWatchItemForSave.prototype.toActualItem = function () {
            var item = new DebugWatchItem();
            switch (this._type) {
                case Const.WatchItemType.switch:
                    item.setupSwitch(this._id);
                    break;

                case Const.WatchItemType.variable:
                    item.setupVariable(this._id);
                    break;

                default:
                    console.error('%s: toDisplayItem() failed. Invalid item type (%d)', Const.pluginCode, this._type);
                    return null;
            }

            return item;
        };


        //-----------------------------------------------------------------------------
        // DebugWatchItem
        //
        // ウォッチウィンドウに表示する項目

        function DebugWatchItem() {
            this.initialize.apply(this, arguments);
        }

        DebugWatchItem.prototype.constructor = DebugWatchItem;

        Object.defineProperties(DebugWatchItem.prototype, {
            type: {
                get: function () { return this._type; },
                configurable: true
            },
            typeSymbol: {
                get: function () { return this._typeSymbol; },
                configurable: true
            },
            typename: {
                get: function () { return this._typename; },
                configurable: true
            },
            id: {
                get: function () { return this._id; },
                configurable: true
            },
            name: {
                get: function () { return this._name; },
                configurable: true
            },
        });

        /**
         * デフォルトの取得関数
         */
        DebugWatchItem.defaultGetter = function () {
            return '';
        };

        /**
         * スイッチ用の生値取得関数
         */
        DebugWatchItem.switchRawValueGetter = function () {
            return $gameSwitches.value(this._id);
        };

        /**
         * スイッチ用の表示値取得関数
         */
        DebugWatchItem.switchDispValueGetter = function () {
            return this._getterRaw.call(this) ? 'ON' : 'OFF';
        };

        /**
         * 変数用の値取得関数
         */
        DebugWatchItem.variableValueGetter = function () {
            return $gameVariables.value(this._id);
        };

        /**
         * 初期化
         */
        DebugWatchItem.prototype.initialize = function () {
            this.invalidate();
        };

        /**
         * ユーザー定義か
         */
        DebugWatchItem.prototype.isUserDef = function () {
            return this._type === Const.WatchItemType.user;
        };

        /**
         * 一致判定
         */
        DebugWatchItem.prototype.equals = function (rhs) {
            if (!(rhs instanceof DebugWatchItem) ||
                this._type !== rhs._type) {
                // タイプ違い
                return false;
            }

            if (this.isUserDef() && rhs.isUserDef()) {
                // ユーザー定義の場合は名前以外完全一致を要求
                return this._id === rhs._id &&
                    this._getterRaw === rhs._getterRaw &&
                    this._getterDisp === rhs._getterDisp;
            }
            else {
                return this._id === rhs._id;
            }
        };

        /**
         * 生値を取得
         */
        DebugWatchItem.prototype.getRaw = function () {
            return this._getterRaw.call(this);
        };

        /**
         * 表示用の値を取得
         */
        DebugWatchItem.prototype.getDisp = function () {
            return this._getterDisp.call(this);
        };

        /**
         * 値を監視して更新を通知
         */
        DebugWatchItem.prototype.checkUpdate = function () {
            var currValue = this.getRaw();
            if (this._lastValue !== currValue) {
                this._lastValue = currValue;
                return true;
            }
            else {
                return false;
            }
        };

        /**
         * 無効化
         */
        DebugWatchItem.prototype.invalidate = function () {
            this._type = Const.WatchItemType.none;
            this._typeSymbol = '';
            this._typename = '';
            this._id = 0;
            this._name = '';
            this._getterRaw = DebugWatchItem.defaultGetter;
            this._getterDisp = DebugWatchItem.defaultGetter;
            this._lastValue = null;
        };

        /**
         * スイッチを表示するようにセットアップ
         */
        DebugWatchItem.prototype.setupSwitch = function (switchId) {
            this._type = Const.WatchItemType.switch;
            this._id = switchId.clamp(1, $dataSystem.switches.length - 1);
            this.refresh();
        };

        /**
         * 変数を表示するようにセットアップ
         */
        DebugWatchItem.prototype.setupVariable = function (variableId) {
            this._type = Const.WatchItemType.variable;
            this._id = variableId.clamp(1, $dataSystem.variables.length - 1);
            this.refresh();
        };

        /**
         * 表示する情報の再構築 (データベースリロード時にも呼ぶ)
         */
        DebugWatchItem.prototype.refresh = function () {
            switch (this._type) {
                case Const.WatchItemType.switch:
                    if (this._id >= $dataSystem.switches.length) {
                        this.invalidate();
                        return;
                    }
                    this._typeSymbol = 'S';
                    this._typename = isJp ? 'スイッチ' : 'Switch';
                    this._name = $dataSystem.switches[this._id];
                    this._getterRaw = DebugWatchItem.switchRawValueGetter;
                    this._getterDisp = DebugWatchItem.switchDispValueGetter;
                    break;

                case Const.WatchItemType.variable:
                    if (this._id >= $dataSystem.variables.length) {
                        this.invalidate();
                        return;
                    }
                    this._typeSymbol = 'V';
                    this._typename = isJp ? '変数' : 'Variable';
                    this._name = $dataSystem.variables[this._id];
                    this._getterRaw = DebugWatchItem.variableValueGetter;
                    this._getterDisp = DebugWatchItem.variableValueGetter;
                    break;

                default:
                    // 何もしない
                    break;
            }

            // 更新通知用の初期値を取得
            this._lastValue = this.getRaw();
        };

        /**
         * セーブ用のデータに変換
         */
        DebugWatchItem.prototype.toSaveItem = function () {
            var item = new DebugWatchItemForSave();
            item.type = this._type;
            item.id = this._id;

            return item;
        };

        /**
         * 別の項目からコピー
         */
        DebugWatchItem.prototype.copyFrom = function (item) {
            if (!item) {
                this.invalidate();
                return;
            }

            switch (item.type) {
                case Const.WatchItemType.switch:
                    this.setupSwitch(item.id);
                    break;

                case Const.WatchItemType.variable:
                    this.setupVariable(item.id);
                    break;

                default:
                    this.invalidate();
                    break;
            }
        };


        //-----------------------------------------------------------------------------
        // DataManager

        /**
         * データベースファイルの同期読み込み
         *  ※ 警告が出るので使わない
         */
        /*
        DataManager.loadDataFileSync = function(name, src)
        {
            var xhr = new XMLHttpRequest();
            var url = 'data/' + src;
            xhr.open('GET', url, false);
            xhr.overrideMimeType('application/json');
            window[name] = null;
            xhr.send(null);
        
            if (xhr.status < 400)
            {
                window[name] = JSON.parse(xhr.responseText);
                DataManager.onLoad(window[name]);
            }
            else
            {
                DataManager._errorUrl = DataManager._errorUrl || url;
            }
        };
        */

        /**
         * 一時マップデータの読み込み
         */
        DataManager.loadKmsTemporallyMapData = function (mapId) {
            if (mapId > 0) {
                var filename = 'Map%1.json'.format(mapId.padZero(3));
                this.loadDataFile('$dataKmsTemporallyMapData', filename);
            }
            else {
                var dataBackup = $dataMap;
                this.makeEmptyMap();

                $dataKmsTemporallyMapData = $dataMap;
                $dataMap = dataBackup;
            }
        };

        /**
         * 一時マップデータの読み込みが完了しているか
         */
        DataManager.isKmsTemporallyMapLoaded = function () {
            this.checkError();
            return !!$dataKmsTemporallyMapData;
        };


        //-----------------------------------------------------------------------------
        // TextManager

        TextManager.DebugUtil = {};

        var simpleGetter = function (text) {
            return {
                get: function () { return text; },
                configurable: true
            };
        };

        Object.defineProperties(TextManager.DebugUtil, {
            sceneTitle: simpleGetter(isJp ? 'デバッグメニュー' : 'Debug menu'),

            // コマンド名
            itemNumber: simpleGetter(isJp ? 'アイテム所持数変更' : 'Edit item numbers'),
            actorParam: simpleGetter(isJp ? 'アクター編集' : 'Edit actor\'s param'),
            member: simpleGetter(isJp ? 'メンバー変更' : 'Edit party'),
            reloadMap: simpleGetter(isJp ? 'マップ再読み込み' : 'Reload map'),
            loadDatabase: simpleGetter(isJp ? 'データベース再読み込み' : 'Reload database'),
            transfer: simpleGetter(isJp ? '場所移動' : 'Transfer'),
            switchVar: simpleGetter(isJp ? 'スイッチ・変数操作' : 'Edit switches/variables'),
            selfSwitch: simpleGetter(isJp ? 'セルフスイッチ操作' : 'Edit self-switches'),
            systemValue: simpleGetter(isJp ? 'システム値操作' : 'Edit system values'),
            watchWindow: simpleGetter(isJp ? 'スイッチ・変数監視' : 'Watch switches/variables'),
            encounter: simpleGetter(isJp ? 'エンカウント' : 'Encounter'),
            dispPassage: simpleGetter(isJp ? '通行可否表示' : 'Display passage'),

            // パラメータ名
            battleCount: simpleGetter(isJp ? '戦闘回数' : 'Battle count'),
            winCount: simpleGetter(isJp ? '勝利回数' : 'Victory count'),
            escapeCount: simpleGetter(isJp ? '逃走回数' : 'Escape count'),
            saveCount: simpleGetter(isJp ? 'セーブ回数' : 'Save count'),

            // その他
            activeParty: simpleGetter(isJp ? 'パーティ内メンバー' : 'Active member'),
            reserveParty: simpleGetter(isJp ? 'パーティ外メンバー' : 'Reserve member'),
            addToParty: simpleGetter(isJp ? '追加' : 'Add'),
            removeFromParty: simpleGetter(isJp ? '外す' : 'Remove'),
            tilePosition: simpleGetter(isJp ? '移動先' : 'Position'),
            mapSize: simpleGetter(isJp ? 'マップサイズ' : 'Map size'),
            encounterRandom: simpleGetter(isJp ? '現在のマップからランダム' : 'Random in current map'),
            addWatchItem: simpleGetter(isJp ? '追加' : 'Add'),
            watchItemType: simpleGetter(isJp ? 'タイプ' : 'Type'),
            watchItemRemove: simpleGetter(isJp ? '削除' : 'Remove')
        });


        //-----------------------------------------------------------------------------
        // Game_Temp

        var _Game_Temp_initialize = Game_Temp.prototype.initialize;
        Game_Temp.prototype.initialize = function () {
            _Game_Temp_initialize.call(this);

            this.clearDebugWatchRefreshRequest();
            this.clearDebugWatchItem();
        };

        /**
         * ウォッチウィンドウを再構築するか
         */
        Game_Temp.prototype.isDebugWatchRefreshRequested = function () {
            return this._debugWatchRefreshRequested;
        };

        /**
         * ウォッチウィンドウの再構築要求
         */
        Game_Temp.prototype.requestDebugWatchRefresh = function () {
            this._debugWatchRefreshRequested = true;
        };

        /**
         * ウォッチウィンドウの再構築要求を解除
         */
        Game_Temp.prototype.clearDebugWatchRefreshRequest = function () {
            this._debugWatchRefreshRequested = false;
        };

        /**
         * ウォッチウィンドウに表示する項目を登録
         */
        Game_Temp.prototype.registerDebugWatchItem = function (item) {
            if (!item) {
                return;
            }

            for (var i = 0; i < this._debugWatchItems.length; i++) {
                if (this._debugWatchItems[i].equals(item)) {
                    // 同じ設定のものが登録済み
                    return;
                }
            }

            var newItem = new DebugWatchItem();
            newItem.copyFrom(item);
            this._debugWatchItems.push(newItem);
            this.requestDebugWatchRefresh();
        };

        /**
         * ウォッチウィンドウに表示する項目を差し替え
         */
        Game_Temp.prototype.replaceDebugWatchItem = function (item, index) {
            if (!item || this._debugWatchItems.length <= index) {
                return;
            }

            this._debugWatchItems[index] = item;
            this.requestDebugWatchRefresh();
        };

        /**
         * ウォッチウィンドウに表示する項目を解除
         */
        Game_Temp.prototype.removeDebugWatchItem = function (item) {
            if (!item) {
                return;
            }

            this._debugWatchItems = this._debugWatchItems.filter(function (v) {
                return !v.equals(item);
            });

            this.requestDebugWatchRefresh();
        };

        /**
         * ウォッチウィンドウに表示する項目を全解除
         */
        Game_Temp.prototype.clearDebugWatchItem = function () {
            this._debugWatchItems = [];
        };

        /**
         * ウォッチウィンドウに表示する項目の一覧を取得
         */
        Game_Temp.prototype.getDebugWatchItemList = function () {
            return this._debugWatchItems;
        };


        //-----------------------------------------------------------------------------
        // Game_System

        var _Game_System_onBeforeSave = Game_System.prototype.onBeforeSave;
        Game_System.prototype.onBeforeSave = function () {
            _Game_System_onBeforeSave.call(this);

            this.createDebugWatchItemsForSave();
        };

        var _Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
        Game_System.prototype.onAfterLoad = function () {
            _Game_System_onAfterLoad.call(this);

            this.restoreDebugWatchItemsFromSave();
        };

        /**
         * セーブ用のウォッチ項目リストを作成
         *
         * DebugWatchItem の全メンバを保存すると無駄があるので、最小限の情報のみ保存する
         */
        Game_System.prototype.createDebugWatchItemsForSave = function () {
            var list = $gameTemp.getDebugWatchItemList();
            if (list.length === 0) {
                // ウォッチリストが空なら何もセーブしない
                delete this._debugWatchItemList;
                return;
            }

            this._debugWatchItemList = [];
            list.forEach(function (item) {
                this._debugWatchItemList.push(item.toSaveItem());
            }, this);
        };

        /**
         * セーブ用のウォッチ項目リストからウォッチリストを復元
         */
        Game_System.prototype.restoreDebugWatchItemsFromSave = function () {
            if (!this._debugWatchItemList) {
                return;
            }

            $gameTemp.clearDebugWatchItem();
            this._debugWatchItemList.forEach(function (item) {
                $gameTemp.registerDebugWatchItem(item.toActualItem());
            }, this);
        };


        //-----------------------------------------------------------------------------
        // Sprite_DebugMapDestination
        //
        // デバッグ画面で移動先タイルを強調表示するスプライト

        function Sprite_DebugMapDestination() {
            this.initialize.apply(this, arguments);
        }

        Sprite_DebugMapDestination.prototype = Object.create(Sprite_Destination.prototype);
        Sprite_DebugMapDestination.prototype.constructor = Sprite_DebugMapDestination;

        Sprite_DebugMapDestination.prototype.initialize = function () {
            Sprite_Destination.prototype.initialize.call(this);

            this._map = null;
            this._destination = new Point();
            this._visibleArea = new Rectangle();
        };

        /**
         * 参照するマップオブジェクトを設定
         */
        Sprite_DebugMapDestination.prototype.setMap = function (map) {
            this._map = map;
        };

        /**
         * 目的地のタイル座標を設定
         */
        Sprite_DebugMapDestination.prototype.setDestination = function (x, y) {
            this._destination.x = x;
            this._destination.y = y;
        };

        /**
         * 可視領域を設定
         */
        Sprite_DebugMapDestination.prototype.setVisibleArea = function (x, y, width, height) {
            this._visibleArea.x = x;
            this._visibleArea.y = y;
            this._visibleArea.width = width;
            this._visibleArea.height = height;
        };

        Sprite_DebugMapDestination.prototype.update = function () {
            // 判定自体を書き直すので、Sprite の方を呼ぶ
            Sprite.prototype.update.call(this);

            if (this.visible) {
                this.updateAnimation();
                this.updatePosition();
            }
            else {
                this._frameCount = 0;
            }
        };

        Sprite_DebugMapDestination.prototype.updatePosition = function () {
            if (!this._map) {
                return;
            }

            var tileWidth = this._map.tileWidth();
            var tileHeight = this._map.tileHeight();
            this.x = (this._map.adjustX(this._destination.x) + 0.5) * tileWidth;
            this.y = (this._map.adjustY(this._destination.y) + 0.5) * tileHeight;

            // 可視領域外に出た場合は消す
            if (this.x < this._visibleArea.x ||
                this.y < this._visibleArea.y ||
                this.x > this._visibleArea.width ||
                this.y > this._visibleArea.height) {
                this.opacity = 0;
            }
        };


        //-----------------------------------------------------------------------------
        // Sprite_DebugWatchUpdate
        //
        // ウォッチウィンドウで値の更新を通知するスプライト

        function Sprite_DebugWatchUpdate() {
            this.initialize.apply(this, arguments);
        }

        Sprite_DebugWatchUpdate.prototype = Object.create(Sprite.prototype);
        Sprite_DebugWatchUpdate.prototype.constructor = Sprite_DebugWatchUpdate;

        Sprite_DebugWatchUpdate.prototype.initialize = function () {
            Sprite.prototype.initialize.call(this);

            this._duration = 0;
            this.visible = false;
        };

        /**
         * 更新アニメーションを実行
         */
        Sprite_DebugWatchUpdate.prototype.animate = function () {
            this._duration = Const.watchUpdateDuration;
            this.visible = true;
        };

        /**
         * セットアップ
         */
        Sprite_DebugWatchUpdate.prototype.setup = function (x, y, width, height) {
            this._bitmap = new Bitmap(width, height);
            this._bitmap.fillRect(0, 0, width, height, Params.watchUpdateColor);
            this.setFrame(0, 0, width, height);
            //this.blendMode = Graphics.BLEND_ADD;
            this.move(x, y);
        };

        Sprite_DebugWatchUpdate.prototype.update = function () {
            Sprite.prototype.update.call(this);

            if (this.visible) {
                this.updateAnimation();
            }
        };

        /**
         * アニメーションの更新
         */
        Sprite_DebugWatchUpdate.prototype.updateAnimation = function () {
            this.opacity = 255 * this._duration / Const.watchUpdateDuration;

            this._duration--;
            if (this._duration < 0) {
                this.visible = false;
            }
        };


        //-----------------------------------------------------------------------------
        // Window_DebugEdit

        /**
         * 現在のモードを取得
         */
        Window_DebugEdit.prototype.getMode = function () {
            return this._mode;
        };


        //-----------------------------------------------------------------------------
        // Window_DebugTitle
        //
        // デバッグ画面で機能名を表示するウィンドウ

        function Window_DebugTitle() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugTitle.prototype = Object.create(Window_Help.prototype);
        Window_DebugTitle.prototype.constructor = Window_DebugTitle;

        Window_DebugTitle.prototype.initialize = function (width, numLines) {
            Window_Help.prototype.initialize.call(this, numLines);

            this.width = width;
            this.createContents();
        };

        Window_DebugTitle.prototype.refresh = function () {
            this.contents.clear();

            var x = this.textPadding();
            var w = this.contentsWidth() - this.textPadding() * 2;
            this.contents.drawText(this._text, x, 0, w, this.lineHeight(), 'center');
        };


        //-----------------------------------------------------------------------------
        // Window_DebugCommand
        //
        // デバッグ機能を選択するウィンドウ

        function Window_DebugCommand() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugCommand.prototype = Object.create(Window_Command.prototype);
        Window_DebugCommand.prototype.constructor = Window_DebugCommand;

        Window_DebugCommand.prototype.initialize = function (x, y) {
            Window_Command.prototype.initialize.call(this, x, y);
            this.selectLast();
            this.activate();
        };

        Window_DebugCommand._lastCommandSymbol = null;

        Window_DebugCommand.initCommandPosition = function () {
            this._lastCommandSymbol = null;
        };

        Window_DebugCommand.prototype.windowWidth = function () {
            return Graphics.boxWidth - 64;
        };

        Window_DebugCommand.prototype.maxCols = function () {
            return 2;
        };

        Window_DebugCommand.prototype.makeCommandList = function () {
            this.addCommand(TextManager.DebugUtil.itemNumber, 'itemNumber');
            this.addCommand(TextManager.DebugUtil.actorParam, 'actorParam');
            this.addCommand(TextManager.DebugUtil.member, 'member');
            this.addCommand(TextManager.DebugUtil.reloadMap, 'reloadMap');
            this.addCommand(TextManager.DebugUtil.loadDatabase, 'loadDatabase');
            this.addCommand(TextManager.DebugUtil.transfer, 'transfer');
            this.addCommand(TextManager.DebugUtil.switchVar, 'switchVar');
            this.addCommand(TextManager.DebugUtil.selfSwitch, 'selfSwitch');
            this.addCommand(TextManager.DebugUtil.systemValue, 'systemValue');
            this.addCommand(TextManager.DebugUtil.watchWindow, 'watchWindow');
            this.addCommand(TextManager.DebugUtil.encounter, 'encounter');
            //this.addCommand(TextManager.DebugUtil.dispPassage,  'dispPassage');
            //this.addCommand(TextManager.DebugUtil.loadJs, 'loadJs');

            // 追加コマンド
            KMS.DebugUtil.debugCommands.forEach(function (command) {
                this.addCommand(command.name, command.id);
            }, this);
        };

        Window_DebugCommand.prototype.processOk = function () {
            Window_DebugCommand._lastCommandSymbol = this.currentSymbol();
            Window_Command.prototype.processOk.call(this);
        };

        Window_DebugCommand.prototype.selectLast = function () {
            if (Window_DebugCommand._lastCommandSymbol) {
                this.selectSymbol(Window_DebugCommand._lastCommandSymbol);
            }
            else {
                this.selectSymbol('itemNumber');
            }
        };


        //-----------------------------------------------------------------------------
        // Window_DebugNumberInput
        //
        // デバッグモードで値を入力するためのウィンドウ

        function Window_DebugNumberInput() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugNumberInput.prototype = Object.create(Window_NumberInput.prototype);
        Window_DebugNumberInput.prototype.constructor = Window_DebugNumberInput;

        Object.defineProperty(Window_DebugNumberInput.prototype, 'number',
            {
                get: function () { return this._number * (this._isNegative ? -1 : 1); },
                configurable: true
            });

        Window_DebugNumberInput.prototype.initialize = function () {
            Window_NumberInput.prototype.initialize.call(this, null);
            this._number = 0;
            this._maxDigits = 1;
            this._isAllowNegative = false;
            this._isNegative = false;
            this._caption = null;
            this._okCallback = null;
        };

        Window_DebugNumberInput.prototype.windowWidth = function () {
            var captionWidth = this.standardPadding() * 2;
            if (isItemObject(this._caption)) {
                captionWidth +=
                    this.textWidth(this._caption.name) +
                    Window_Base._iconWidth + 4;
            }
            else if (isString(this._caption)) {
                captionWidth += this.textWidth(this._caption) + 4;
            }

            var originWidth = Window_NumberInput.prototype.windowWidth.call(this);
            return Math.max(originWidth, captionWidth);
        };

        Window_DebugNumberInput.prototype.windowHeight = function () {
            return this.fittingHeight(this._caption ? 2 : 1);
        };

        Window_DebugNumberInput.prototype.maxCols = function () {
            return Window_NumberInput.prototype.maxCols.call(this) +
                (this._isAllowNegative ? 1 : 0);
        };

        Window_NumberInput.prototype.maxItems = function () {
            return this.maxCols();
        };

        Window_DebugNumberInput.prototype.setAllowNegative = function (enabled) {
            this._isAllowNegative = enabled;
        };

        Window_DebugNumberInput.prototype.setCaption = function (caption) {
            this._caption = caption;
            this.updatePlacement();
            this.refresh();
        };

        /**
         * 値の入力を開始
         */
        Window_DebugNumberInput.prototype.start = function (number, maxDigits, callback) {
            this._isNegative = number < 0;
            this._number = Math.abs(number);
            this._number = this._number.clamp(0, Math.pow(10, maxDigits) - 1);
            this._maxDigits = maxDigits;
            this._okCallback = callback;

            this.updatePlacement();
            this.placeButtons();
            this.updateButtonsVisiblity();
            this.createContents();
            this.refresh();
            this.open();
            this.activate();
            this.select(this._maxDigits - 1 + (this._isAllowNegative ? 1 : 0));
        };

        Window_DebugNumberInput.prototype.changeDigit = function (up) {
            var index = this.index();

            if (this._isAllowNegative) {
                if (index === 0) {
                    // +/- 切り替え
                    this._isNegative = !this._isNegative;
                    this.refresh();
                    SoundManager.playCursor();
                    return;
                }

                // +/- 部分の桁位置をずらす
                index--;
            }

            var place = Math.pow(10, this._maxDigits - 1 - index);
            var n = Math.floor(this._number / place) % 10;
            this._number -= n * place;
            if (up) {
                n = (n + 1) % 10;
            } else {
                n = (n + 9) % 10;
            }
            this._number += n * place;
            this.refresh();
            SoundManager.playCursor();
        };

        Window_DebugNumberInput.prototype.itemRect = function (index) {
            var rect = Window_NumberInput.prototype.itemRect.call(this, index);
            if (this._caption) {
                rect.y += this.lineHeight();
            }

            return rect;
        };

        Window_DebugNumberInput.prototype.drawItem = function (index) {
            var rect = this.itemRect(index);
            var align = 'center';
            var sign = this._isAllowNegative ? (this._isNegative ? '-' : '+') : '';
            var s = '%1%2'.format(sign, this._number.padZero(this._maxDigits));
            var c = s.slice(index, index + 1);
            this.resetTextColor();
            this.drawText(c, rect.x, rect.y, rect.width, align);
        };

        Window_DebugNumberInput.prototype.drawCaption = function () {
            if (!this._caption) {
                return;
            }

            if (isItemObject(this._caption)) {
                this.drawItemName(this._caption, 0, 0, this.contentsWidth());
            }
            else if (isString(this._caption)) {
                this.changeTextColor(this.systemColor());
                this.drawText(this._caption, 0, 0, this.contentsWidth());
                this.resetTextColor();
            }
        };

        Window_DebugNumberInput.prototype.refresh = function () {
            Window_NumberInput.prototype.refresh.call(this);

            if (this.contents) {
                this.drawCaption();
            }
        };

        /**
         * 表示位置・サイズの調整
         */
        Window_DebugNumberInput.prototype.updatePlacement = function () {
            this.width = this.windowWidth();
            this.height = this.windowHeight();
            this.x = (Graphics.boxWidth - this.width) / 2;
            this.y = (Graphics.boxHeight - this.height) / 2;
        };

        Window_DebugNumberInput.prototype.buttonY = function () {
            var spacing = 8;
            return this.height + spacing;
        };

        Window_DebugNumberInput.prototype.isCancelEnabled = function () {
            return true;
        };

        Window_DebugNumberInput.prototype.processOk = function () {
            SoundManager.playOk();

            if (this._okCallback) {
                this._okCallback(this.number);
            }

            this.updateInputData();
            this.deactivate();
            this.close();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugItemList
        //
        // アイテム所持数編集ウィンドウ

        function Window_DebugItemList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugItemList.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugItemList.prototype.constructor = Window_DebugItemList;

        Window_DebugItemList._lastIndex = 0;

        Window_DebugItemList.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this.refresh();
            this.selectLast();
            this.hide();
        };

        Window_DebugItemList.prototype.maxCols = function () {
            return 2;
        };

        Window_DebugItemList.prototype.maxItems = function () {
            return this._data ? this._data.length : 0;
        };

        Window_DebugItemList.prototype.item = function () {
            var index = this.index();
            return index >= 0 ? this._data[index] : null;
        };

        Window_DebugItemList.prototype.selectLast = function () {
            var index = this._data.indexOf(Window_DebugItemList._lastIndex);
            this.select(index >= 0 ? index : 0);
        };

        Window_DebugItemList.prototype.makeItemList = function () {
            this._data = $dataItems.slice(1);
            this._data = this._data.concat($dataWeapons.slice(1));
            this._data = this._data.concat($dataArmors.slice(1));
        };

        Window_DebugItemList.prototype.refresh = function () {
            this.makeItemList();
            this.createContents();
            this.drawAllItems();
        };

        Window_DebugItemList.prototype.drawItem = function (index) {
            var item = this._data[index];
            if (!item) {
                return;
            }

            var numberWidth = this.numberWidth();
            var rect = this.itemRectForText(index);
            this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
            this.drawItemNumber(item, rect.x, rect.y, rect.width);
        };

        Window_DebugItemList.prototype.numberWidth = function () {
            return this.textWidth('000');
        };

        Window_DebugItemList.prototype.drawItemNumber = function (item, x, y, width) {
            this.drawText(':', x, y, width - this.textWidth('00'), 'right');
            this.drawText($gameParty.numItems(item), x, y, width, 'right');
        };

        Window_DebugItemList.prototype.processCancel = function () {
            Window_Selectable.prototype.processCancel.call(this);
            Window_DebugItemList.lastTopRow = this.topRow();
            Window_DebugItemList.lastIndex = this.index();
        };

        Window_DebugItemList.prototype.updateHelp = function () {
            this.setHelpWindowItem(this.item());
        };


        //-----------------------------------------------------------------------------
        // Window_DebugActorList
        //
        // デバッグモード用アクター選択ウィンドウ

        function Window_DebugActorList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugActorList.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugActorList.prototype.constructor = Window_DebugActorList;

        Window_DebugActorList.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this._data = [];
            this.refresh();
            this.hide();
            this.selectLast();
        };

        Window_DebugActorList._lastIndex = 0;

        Window_DebugActorList.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugActorList.prototype.spacing = function () {
            return 48;
        };

        Window_DebugActorList.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugActorList.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugActorList.prototype.includes = function (item) {
            return item != null;
        };

        Window_DebugActorList.prototype.isEnabled = function (item) {
            return true;
        };

        Window_DebugActorList.prototype.select = function (index) {
            Window_Selectable.prototype.select.call(this, index);
            if (this._statusWindow) {
                this._statusWindow.setActor(this.item());
            }
        };

        Window_DebugActorList.prototype.setStatusWindow = function (window) {
            this._statusWindow = window;
            this.select(this.index());
        };

        Window_DebugActorList.prototype.makeItemList = function () {
            this._data = [];
            for (var i = 1; i < $dataActors.length; i++) {
                this._data.push($gameActors.actor(i));
            }
        };

        Window_DebugActorList.prototype.selectLast = function () {
            var index = this._data.indexOf(Window_DebugActorList._lastIndex);
            this.select(index >= 0 ? index : 0);
        };

        Window_DebugActorList.prototype.drawItem = function (index) {
            var item = this._data[index];
            if (!item) {
                return;
            }

            this.changePaintOpacity(this.isEnabled(item));
            this.resetTextColor();

            var text = '%1:%2'.format(item.actorId().padZero(4), item.name());
            var rect = this.itemRectForText(index);
            this.drawText(text, rect.x, rect.y, rect.width);
            this.changePaintOpacity(1);
        };

        Window_DebugActorList.prototype.refresh = function () {
            this.makeItemList();
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugActorParam
        //
        // デバッグ用アクターパラメータ変更ウィンドウ

        function Window_DebugActorParam() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugActorParam.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugActorParam.prototype.constructor = Window_DebugActorParam;

        Window_DebugActorParam.prototype.initialize = function (x, y, width, height) {
            this._data = [
                'level', 'skill', 'hp', 'mp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'
            ];
            this._paramId = {
                level: null,
                skill: null,
                hp: 0,
                mp: 1,
                atk: 2,
                def: 3,
                mat: 4,
                mdf: 5,
                agi: 6,
                luk: 7
            };
            this._actor = null;

            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this.createContents();
            this.refresh();
            this.hide();
            this.selectLast();
        };

        Window_DebugActorParam._lastIndex = 0;

        Window_DebugActorParam.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugActorParam.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugActorParam.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugActorParam.prototype.paramId = function () {
            return this._paramId[this.item()];
        };

        Window_DebugActorParam.prototype.setActor = function (actor) {
            if (this._actor !== actor) {
                this._actor = actor;
                this.refresh();
            }
        };

        Window_DebugActorParam.prototype.selectLast = function () {
            var index = this._data.indexOf(Window_DebugActorParam._lastIndex);
            this.select(index >= 0 ? index : 0);
        };

        Window_DebugActorParam.prototype.drawItem = function (index) {
            var item = this._data[index];
            if (!item) {
                return;
            }

            var rect = this.itemRectForText(index);

            var paramName;
            var paramValue1;
            var paramValue2;
            var paramId = this._paramId[item];
            if (paramId != null) {
                // 通常パラメータはパラメータ名と現在値、加算値を表示
                paramName = TextManager.param(paramId) + '+';
                paramValue1 = originalParamPlus.call(this._actor, paramId);
                paramValue2 = this._actor.param(paramId);
            }
            else {
                paramName = TextManager[item];
                switch (item) {
                    case 'level': paramValue1 = this._actor.level; break;
                    case 'skill': paramValue1 = '>'; break;
                    default: return;
                }
            }

            this.changeTextColor(this.systemColor());
            this.drawText(paramName, 0, rect.y, 160);
            this.resetTextColor();
            this.drawText(paramValue1, 160, rect.y, 90, 'right');
            if (paramValue2 != null) {
                this.drawText(
                    '(%1)'.format(padDigits(paramValue2, 6, ' ')),
                    270,
                    rect.y,
                    120);
            }
        };

        Window_DebugActorParam.prototype.refresh = function () {
            this.contents.clear();

            if (!this._actor) {
                return;
            }

            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugActorSkill
        //
        // デバッグ用アクタースキル編集ウィンドウ

        function Window_DebugActorSkill() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugActorSkill.prototype = Object.create(Window_SkillList.prototype);
        Window_DebugActorSkill.prototype.constructor = Window_DebugActorSkill;

        Window_DebugActorSkill.prototype.initialize = function (x, y, width, height) {
            Window_SkillList.prototype.initialize.call(this, x, y, width, height);
            this.hide();
        };

        Window_DebugActorSkill.prototype.isCurrentItemEnabled = function () {
            return true;
        };

        Window_DebugActorSkill.prototype.includes = function (item) {
            return item != null;
        };

        Window_DebugActorSkill.prototype.isEnabled = function (item) {
            return this._actor && this._actor.isLearnedSkill(item.id);
        };

        Window_DebugActorSkill.prototype.makeItemList = function () {
            if (!this._actor) {
                this._data = [];
                return;
            }

            this._data = $dataSkills.filter(function (item) {
                return this.includes(item);
            }, this);
        };

        Window_DebugActorSkill.prototype.selectLast = function () {
            this.select(0);
        };

        Window_DebugActorSkill.prototype.drawItem = function (index) {
            var skill = this._data[index];
            if (!skill) {
                return;
            }

            var rect = this.itemRectForText(index);
            this.changePaintOpacity(this.isEnabled(skill));
            this.drawItemName(skill, rect.x, rect.y, rect.width);
            this.changePaintOpacity(1);
        };

        /**
         * 項目の再描画
         */
        Window_DebugActorSkill.prototype.redrawItem = function (index) {
            this.clearItem(index);
            this.drawItem(index);
        };


        //-----------------------------------------------------------------------------
        // Window_DebugPartyListBase
        //
        // デバッグモード用パーティメンバー選択ウィンドウの基底クラス

        function Window_DebugPartyListBase() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugPartyListBase.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugPartyListBase.prototype.constructor = Window_DebugPartyListBase;

        Window_DebugPartyListBase.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this._data = [];
            this.refresh();
            this.hide();
        };

        Window_DebugPartyListBase.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugPartyListBase.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugPartyListBase.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugPartyListBase.prototype.makeItemList = function () {
            this._data = [];

            // 継承先で追加
        };

        Window_DebugPartyListBase.prototype.drawItem = function (index) {
            this.drawItemBackground(index);

            var rect = this.itemRectForText(index);
            var item = this._data[index];
            if (!item) {
                this.drawBlankItem(rect);
                return;
            }

            var name;
            var level;
            if (isActorCreated.call($gameActors, item)) {
                var actor = $gameActors.actor(item);
                name = actor.name();
                level = actor.level;
            }
            else {
                var actor = $dataActors[item];
                name = actor.name;
                level = '--';
            }

            this.drawText(name, rect.x, rect.y, rect.width);
            this.drawText('%1%2'.format(TextManager.levelA, level), rect.x, rect.y, rect.width, 'right');
        };

        /**
         * 空欄の描画
         */
        Window_DebugPartyListBase.prototype.drawBlankItem = function (rect) {
            // 継承先で実装
        };

        /**
         * 項目の背景描画
         */
        Window_DebugPartyListBase.prototype.drawItemBackground = function (index) {
            // 継承先で実装
        };

        Window_DebugPartyListBase.prototype.refresh = function () {
            this.makeItemList();
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugActivePartyList
        //
        // デバッグモードでパーティに加入しているメンバーを選択するウィンドウ

        function Window_DebugActivePartyList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugActivePartyList.prototype = Object.create(Window_DebugPartyListBase.prototype);
        Window_DebugActivePartyList.prototype.constructor = Window_DebugActivePartyList;

        Window_DebugActivePartyList.prototype.initialize = function (x, y, width, height) {
            this._isFormationChangeMode = false;
            this._pendingIndex = -1;

            Window_DebugPartyListBase.prototype.initialize.call(this, x, y, width, height);
        };

        /**
         * 並び替え中のインデックスを取得
         */
        Window_DebugActivePartyList.prototype.getPendingIndex = function () {
            return this._pendingIndex;
        };

        /**
         * 並び替え中のインデックスを設定
         */
        Window_DebugActivePartyList.prototype.setPendingIndex = function (index) {
            this._pendingIndex = index;
        };

        /**
         * 並び替え状態か
         */
        Window_DebugActivePartyList.prototype.isFormationChangeMode = function () {
            return this._isFormationChangeMode;
        };

        /**
         * 並び替え状態を設定
         */
        Window_DebugActivePartyList.prototype.setFormationChangeMode = function (mode) {
            this._isFormationChangeMode = !!mode;
            if (!this.isFormationChangeMode()) {
                this.setPendingIndex(-1);
            }
        };

        /**
         * 選択中の項目が有効か
         */
        Window_DebugActivePartyList.prototype.isCurrentItemEnabled = function () {
            if (this.isFormationChangeMode()) {
                var item = this._data[this.index()];
                return item && $gameActors.actor(item).isFormationChangeOk();
            }
            else {
                return true;
            }
        };

        Window_DebugActivePartyList.prototype.makeItemList = function () {
            Window_DebugPartyListBase.prototype.makeItemList.call(this);

            // パーティ内の全メンバーの ID を格納
            $gameParty.allMembers().forEach(function (actor) {
                this._data.push(actor.actorId());
            }, this);

            // 「追加」コマンド
            this._data.push(null);
        };

        Window_DebugActivePartyList.prototype.drawBlankItem = function (rect) {
            // 「追加」項目
            this.drawText(
                '( %1 )'.format(TextManager.DebugUtil.addToParty),
                rect.x,
                rect.y,
                rect.width,
                'center');
        };

        Window_DebugActivePartyList.prototype.drawItemBackground = function (index) {
            if (index !== this._pendingIndex) {
                return;
            }

            var rect = this.itemRect(index);
            var color = this.pendingColor();
            this.changePaintOpacity(false);
            this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
            this.changePaintOpacity(true);
        };

        Window_DebugActivePartyList.prototype.processHandling = function () {
            if (this.isOpenAndActive() && this.isHandled('formation')) {
                if (this.isFormationChangeMode()) {
                    // 並び替え決定
                    if (this.isOkTriggered() ||
                        Input.isTriggered(Params.formationButton)) {
                        this.processFormation();
                        return;
                    }
                }
                else {
                    // 並び替え開始
                    if (Input.isTriggered(Params.formationButton)) {
                        this.processFormation();
                        return;
                    }
                }
            }

            // 入力が確定しなかったら元の処理
            Window_DebugPartyListBase.prototype.processHandling.call(this);
        };

        /**
         * 並び替え操作の処理
         */
        Window_DebugActivePartyList.prototype.processFormation = function () {
            if (!this.item() || !this.isCurrentItemEnabled()) {
                // 並び替え対象にできない
                this.playBuzzerSound();
                return;
            }

            this.playOkSound();
            this.updateInputData();
            //this.deactivate();
            this.callHandler('formation');
        };


        //-----------------------------------------------------------------------------
        // Window_DebugReservePartyList
        //
        // デバッグモードでパーティに加入しているメンバーを選択するウィンドウ

        function Window_DebugReservePartyList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugReservePartyList.prototype = Object.create(Window_DebugPartyListBase.prototype);
        Window_DebugReservePartyList.prototype.constructor = Window_DebugReservePartyList;

        Window_DebugReservePartyList.prototype.initialize = function (x, y, width, height) {
            Window_DebugPartyListBase.prototype.initialize.call(this, x, y, width, height);
        };

        Window_DebugReservePartyList.prototype.makeItemList = function () {
            Window_DebugPartyListBase.prototype.makeItemList.call(this);

            // パーティ外の全メンバーの ID を格納
            for (var i = 1; i < $dataActors.length; i++) {
                if (!containsActor.call($gameParty, i)) {
                    this._data.push(i);
                }
            }

            // 「外す」コマンド
            this._data.push(null);
        };

        Window_DebugReservePartyList.prototype.drawBlankItem = function (rect) {
            // 「外す」項目
            this.drawText(
                '( %1 )'.format(TextManager.DebugUtil.removeFromParty),
                rect.x,
                rect.y,
                rect.width,
                'center');
        };


        //-----------------------------------------------------------------------------
        // Window_DebugMapList
        //
        // デバッグモード用マップ選択ウィンドウ

        function Window_DebugMapList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugMapList.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugMapList.prototype.constructor = Window_DebugMapList;

        Window_DebugMapList.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this._data = [];
            this.refresh();
            this.hide();
            this.selectLast();
        };

        Window_DebugMapList._lastIndex = 0;

        Window_DebugMapList.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugMapList.prototype.spacing = function () {
            return 48;
        };

        Window_DebugMapList.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugMapList.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugMapList.prototype.includes = function (item) {
            return item != null;
        };

        Window_DebugMapList.prototype.isEnabled = function (item) {
            return true;
        };

        Window_DebugMapList.prototype.select = function (index) {
            Window_Selectable.prototype.select.call(this, index);
            if (this._eventListWindow) {
                this._eventListWindow.setMap(this.item());
            }
        };

        Window_DebugMapList.prototype.setEventListWindow = function (window) {
            this._eventListWindow = window;
            this.select(this.index());
        };

        Window_DebugMapList.prototype.makeItemList = function () {
            this._data = $dataMapInfos.filter(function (info) {
                return info != null;
            });
        };

        Window_DebugMapList.prototype.selectLast = function () {
            var index = this._data.indexOf(Window_DebugMapList._lastIndex);
            this.select(index >= 0 ? index : 0);
        };

        Window_DebugMapList.prototype.drawItem = function (index) {
            var item = this._data[index];
            if (item == null) {
                return;
            }

            this.changePaintOpacity(this.isEnabled(item));
            this.resetTextColor();

            // マップ名描画
            var text = '%1:%2'.format(item.id.padZero(3), item.name);
            var rect = this.itemRectForText(index);
            this.drawText(text, rect.x, rect.y, rect.width);
            this.changePaintOpacity(1);
        };

        Window_DebugMapList.prototype.refresh = function () {
            this.makeItemList();
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugMapTilePosition
        //
        // デバッグモード用タイル座標ウィンドウ

        function Window_DebugMapTilePosition() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugMapTilePosition.prototype = Object.create(Window_Base.prototype);
        Window_DebugMapTilePosition.prototype.constructor = Window_DebugMapTilePosition;

        Window_DebugMapTilePosition.prototype.initialize = function (x, y, width) {
            this._mapSize = { width: 0, height: 0 };
            this._position = { x: 0, y: 0 };

            var wh = this.fittingHeight(2);
            Window_Base.prototype.initialize.call(this, x, y, width, wh);
        };

        /**
         * マップサイズの設定
         */
        Window_DebugMapTilePosition.prototype.setMapSize = function (width, height) {
            this._mapSize.width = width;
            this._mapSize.height = height;

            // 今のところ直後に setPosition が呼ばれるので、refresh 不要
        };

        /**
         * カーソル位置の設定
         */
        Window_DebugMapTilePosition.prototype.setPosition = function (x, y) {
            this._position.x = x;
            this._position.y = y;
            this.refresh();
        };

        Window_DebugMapTilePosition.prototype.clear = function () {
            this.contents.clear();
        };

        Window_DebugMapTilePosition.prototype.refresh = function () {
            this.clear();

            this.changeTextColor(this.systemColor());
            this.drawText(TextManager.DebugUtil.mapSize, 0, 0, 160);
            this.drawText(TextManager.DebugUtil.tilePosition, 0, this.lineHeight(), 160);

            this.resetTextColor();
            this.drawText(
                '%1,%2'.format(this._mapSize.width, this._mapSize.height),
                180, 0, 120
            );
            this.drawText(
                '%1,%2'.format(this._position.x, this._position.y),
                180, this.lineHeight(), 120
            );
        };


        //-----------------------------------------------------------------------------
        // Window_DebugMapTile
        //
        // デバッグモード用タイル選択ウィンドウ

        function Window_DebugMapTile() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugMapTile.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugMapTile.prototype.constructor = Window_DebugMapTile;

        Window_DebugMapTile.prototype.initialize = function (x, y, width, height) {
            this._data = [];
            this._map = new Game_Map();
            this._positionWindow = null;

            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this.createArrowSprites();

            // Pixi.js が古いと Tilemap が大きめに出るので、padding を増やす
            this.padding += (Const.pixiVersion >= 4 ? 18 : 26);

            this.createBaseSprite();
            this.createGridSprite();
            this.createDestinationSprite();
            this.select(0);
            this.hide();
        };

        Window_DebugMapTile.prototype.maxCols = function () {
            return this._map.width();
        };

        Window_DebugMapTile.prototype.maxItems = function () {
            return this._data.length;
        };

        /**
         * 現在の列を取得
         */
        Window_DebugMapTile.prototype.col = function () {
            return Math.floor(this.index() % this.maxCols());
        };

        /**
         * 左端に表示している列を取得
         */
        Window_DebugMapTile.prototype.leftCol = function () {
            return Math.floor(this._scrollX / this.itemWidth());
        };

        /**
         * 左端に表示する列の最大値を取得
         */
        Window_DebugMapTile.prototype.maxLeftCol = function () {
            return Math.max(0, this.maxCols() - this.maxPageCols());
        };

        /**
         * 左端に表示する列を設定
         */
        Window_DebugMapTile.prototype.setLeftCol = function (col) {
            var scrollX = col.clamp(0, this.maxLeftCol()) * this.itemWidth();
            if (this._scrollX !== scrollX) {
                this._scrollX = scrollX;
                this.refresh();
                this.updateCursor();
            }
        };

        Window_DebugMapTile.prototype.resetScroll = function () {
            this.setTopRow(0);
            this.setLeftCol(0);
        };

        /**
         * ページ内の最大列数を取得
         */
        Window_DebugMapTile.prototype.maxPageCols = function () {
            var pageWidth = this.width - this.padding * 2;
            return Math.floor(pageWidth / this.itemWidth());
        };

        Window_DebugMapTile.prototype.maxPageItems = function () {
            return this.maxPageRows() * this.maxPageCols();
        };

        /**
         * 右端の列を取得
         */
        Window_DebugMapTile.prototype.rightCol = function () {
            return Math.max(0, this.leftCol() + this.maxPageCols() - 1);
        };

        /**
         * 右端に表示する列を設定
         */
        Window_DebugMapTile.prototype.setRightCol = function (col) {
            this.setLeftCol(col - (this.maxPageCols() - 1));
        };

        Window_DebugMapTile.prototype.spacing = function () {
            return 0;
        };

        Window_DebugMapTile.prototype.itemWidth = function () {
            return this._map.tileWidth() * Const.mapTileScale;
        };

        Window_DebugMapTile.prototype.itemHeight = function () {
            return this._map.tileHeight() * Const.mapTileScale;
        };

        Window_DebugMapTile.prototype.activate = function () {
            Window_Selectable.prototype.activate.call(this);

            if (this._destinationSprite) {
                this._destinationSprite.visible = true;
            }
        };

        Window_DebugMapTile.prototype.deactivate = function () {
            Window_Selectable.prototype.deactivate.call(this);

            if (this._destinationSprite) {
                this._destinationSprite.visible = false;
            }
        };

        Window_DebugMapTile.prototype.select = function (index) {
            Window_Selectable.prototype.select.call(this, index);

            if (this._positionWindow) {
                var cursor = this.getCursorTile();
                this._positionWindow.setPosition(cursor.x, cursor.y);
            }

            this.updateTilemap();
            this.updateDestinationPosition();
        };

        /**
         * 左スクロール
         */
        Window_DebugMapTile.prototype.scrollLeft = function () {
            if (this.leftCol() > 0) {
                this.setLeftCol(this.leftCol() - 1);
            }
        };

        /**
         * 右スクロール
         */
        Window_DebugMapTile.prototype.scrollRight = function () {
            if (this.leftCol() + 1 < this.maxCols()) {
                this.setLeftCol(this.leftCol() + 1);
            }
        };

        Window_DebugMapTile.prototype.updateArrows = function () {
            Window_Selectable.prototype.updateArrows.call(this);

            // 左右アローの表示
            var leftCol = this.leftCol();
            var maxLeftCol = this.maxLeftCol();
            this._rightArrowSprite.visible = maxLeftCol > 0 && leftCol < maxLeftCol;
            this._leftArrowSprite.visible = leftCol > 0;
        };

        Window_DebugMapTile.prototype.processWheel = function () {
            Window_Selectable.prototype.processWheel.call(this);

            if (this.isOpenAndActive()) {
                var threshold = 20;
                if (TouchInput.wheelX >= threshold) {
                    this.scrollRight();
                }
                if (TouchInput.wheelX <= -threshold) {
                    this.scrollLeft();
                }
            }
        };

        Window_DebugMapTile.prototype.onTouch = function (triggered) {
            var lastIndex = this.index();

            Window_Selectable.prototype.onTouch.call(this, triggered);

            if (this.index() !== lastIndex) {
                // カーソル移動が行われた場合は後続の処理は不要
                return;
            }

            if (this._stayCount >= 10) {
                // 左右端のタップ判定
                var x = this.canvasToLocalX(TouchInput.x);
                if (x < this.padding) {
                    this.cursorLeft();
                }
                else if (x >= this.width - this.padding) {
                    this.cursorRight();
                }
            }

            if (this.index() !== lastIndex) {
                SoundManager.playCursor();
            }
        }

        Window_DebugMapTile.prototype.hitTest = function (x, y) {
            if (!this.isContentsArea(x, y)) {
                return -1;
            }

            var cx = x - this.padding;
            var cy = y - this.padding;
            var maxCols = this.maxCols();
            var maxPageCols = this.maxPageCols();
            var topIndex = this.leftCol() + this.topRow() * maxCols;
            for (var i = 0; i < this.maxPageItems(); i++) {
                var topOffset = Math.floor(i / maxPageCols) * maxCols;
                var index = topIndex + topOffset + i % maxPageCols;
                if (index < this.maxItems()) {
                    var rect = this.itemRect(index);
                    var right = rect.x + rect.width;
                    var bottom = rect.y + rect.height;
                    if (cx >= rect.x && cy >= rect.y && cx < right && cy < bottom) {
                        return index;
                    }
                }
            }

            return -1;
        };

        Window_DebugMapTile.prototype.ensureCursorVisible = function () {
            Window_Selectable.prototype.ensureCursorVisible.call(this);

            var col = this.col();
            if (col < this.leftCol()) {
                this.setLeftCol(col);
            }
            else if (col > this.rightCol()) {
                this.setRightCol(col);
            }
        };

        /**
         * 対象のマップを指定
         */
        Window_DebugMapTile.prototype.setupMap = function (mapId) {
            if (mapId === 0) {
                if (this._positionWindow) {
                    this._positionWindow.clear();
                }
                this._baseSprite.visible = false;
                return;
            }
            else {
                this._baseSprite.visible = true;
            }

            // この時点でマップデータはロード済みでなければならない
            debuglog('Window_DebugMapTile.setupMap() called');
            this._map.setup(mapId);
            if (this._positionWindow) {
                this._positionWindow.setMapSize(this._map.width(), this._map.height());
            }

            this.makeItemList();
            this.select(0);
            this.refreshTilemap();
        };

        /**
         * 有効なマップが指定されているか
         */
        Window_DebugMapTile.prototype.isMapValid = function () {
            return this._map && this._map.mapId() > 0;
        };

        /**
         * マップ表示サイズの取得
         */
        Window_DebugMapTile.prototype.getMapDisplaySize = function () {
            return {
                width:
                    (this._baseSprite.width + this._tilemap._margin * 2) /
                    this._baseSprite.scale.x,

                height:
                    (this._baseSprite.height + this._tilemap._margin * 2) /
                    this._baseSprite.scale.y
            };
        };

        /**
         * カーソル位置のタイル座標を取得
         */
        Window_DebugMapTile.prototype.getCursorTile = function () {
            return {
                x: this.index() % this._map.width(),
                y: Math.floor(this.index() / this._map.width())
            };
        };

        /**
         * マップ転送用の情報を取得
         */
        Window_DebugMapTile.prototype.getTransferInfo = function () {
            var tile = this.getCursorTile();

            // とりあえず下向き、黒フェード固定
            return {
                mapId: this._map.mapId(),
                x: tile.x,
                y: tile.y,
                d: 2,
                fadeType: 0
            };
        };

        /**
         * マップ位置ウィンドウの設定
         */
        Window_DebugMapTile.prototype.setPositionWindow = function (window) {
            this._positionWindow = window;
        };

        Window_DebugMapTile.prototype.itemRect = function (index) {
            var maxCols = this.maxCols();
            var rect = new Rectangle();
            rect.width = this.itemWidth();
            rect.height = this.itemHeight();
            rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
            rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
            return rect;
        };

        Window_DebugMapTile.prototype.isCursorVisible = function () {
            return false;
        };

        Window_DebugMapTile.prototype.makeItemList = function () {
            var tileCount = this._map.width() * this._map.height();
            this._data = Array.apply(null, { length: tileCount })
                .map(Number.call, Number);
        };

        /**
         * アロースプライトの作成
         */
        Window_DebugMapTile.prototype.createArrowSprites = function () {
            // あえて Window.prototype._refreshArrows に近い書き方
            var p = 12;
            var q = p * 2;
            var sx = 96 + q;
            var sy = 0 + q;

            this._leftArrowSprite = new Sprite();
            this._leftArrowSprite.bitmap = this.windowskin;
            this._leftArrowSprite.anchor.x = 0.5;
            this._leftArrowSprite.anchor.y = 0.5;
            this._leftArrowSprite.setFrame(sx, sy + p, p, q);
            this._leftArrowSprite.move(p, this.height / 2);
            this.addChild(this._leftArrowSprite);

            this._rightArrowSprite = new Sprite();
            this._rightArrowSprite.bitmap = this.windowskin;
            this._rightArrowSprite.anchor.x = 0.5;
            this._rightArrowSprite.anchor.y = 0.5;
            this._rightArrowSprite.setFrame(sx + p + q, sy + p, p, q);
            this._rightArrowSprite.move(this.width - p, this.height / 2);
            this.addChild(this._rightArrowSprite);
        };

        /**
         * ベーススプライトの作成
         */
        Window_DebugMapTile.prototype.createBaseSprite = function () {
            var sx = this.padding;
            var sy = this.padding;
            var sw = this.contentsWidth() - this.padding * 2;
            var sh = this.contentsHeight() - this.padding * 2;

            this._baseSprite = new Sprite();
            this._baseSprite.setFrame(0, 0, sw, sh);
            this._baseSprite.x = sx;
            this._baseSprite.y = sy;
            this._baseSprite.scale.x = Const.mapTileScale;
            this._baseSprite.scale.y = Const.mapTileScale;
            this.addChild(this._baseSprite);
        };

        /**
         * グリッドスプライトの作成
         */
        Window_DebugMapTile.prototype.createGridSprite = function () {
            var bw = this.contentsWidth() / Const.mapTileScale;
            var bh = this.contentsHeight() / Const.mapTileScale;

            this._gridSprite = new Sprite();
            this._gridSprite.bitmap = new Bitmap(bw, bh);
            this._baseSprite.addChild(this._gridSprite);
        };

        /**
         * グリッドスプライトの再描画
         */
        Window_DebugMapTile.prototype.refreshGridSprite = function () {
            var lineWidth = Const.mapGridLineWidth;

            function alignSize(value, align) {
                return value - (value % align) + lineWidth;
            }

            var color = Params.mapGridColor;
            var bitmap = this._gridSprite.bitmap;
            bitmap.clear();

            // グリッド描画用のサイズ計算
            //  * カーソルが当たる範囲のみ描画するように調整
            var dispSize = this.getMapDisplaySize();
            var tileWidth = this._tilemap.tileWidth;
            var tileHeight = this._tilemap.tileHeight;
            var mapWidth = this._map.width() * tileWidth;
            var mapHeight = this._map.height() * tileHeight;
            var dispWidth = alignSize(Math.min(dispSize.width, mapWidth), tileWidth);
            var dispHeight = alignSize(Math.min(dispSize.height, mapHeight), tileHeight);

            // 横線
            var vCount = Math.ceil(dispHeight / tileHeight);
            for (var i = 0; i < vCount; i++) {
                var dy = i * tileHeight;
                bitmap.fillRect(0, dy, dispWidth, lineWidth, color);
            }

            // 縦線
            var hCount = Math.ceil(dispWidth / tileWidth);
            for (var i = 0; i < hCount; i++) {
                var dx = i * tileWidth;
                bitmap.fillRect(dx, 0, lineWidth, dispHeight, color);
            }
        };

        /**
         * 移動先スプライトの作成
         */
        Window_DebugMapTile.prototype.createDestinationSprite = function () {
            this._destinationSprite = new Sprite_DebugMapDestination();
            this._destinationSprite.setMap(this._map);
            this._destinationSprite.visible = false;
            this._baseSprite.addChild(this._destinationSprite);
        };

        /**
         * タイルマップの作成
         */
        Window_DebugMapTile.prototype.createTilemap = function () {
            if (this._tilemap || !this.isMapValid()) {
                // 過剰に作成しない
                return;
            }

            if (Graphics.isWebGL()) {
                this._tilemap = new ShaderTilemap();
            }
            else {
                this._tilemap = new Tilemap();
            }

            // サイズをウィンドウ内に収める
            var size = this.getMapDisplaySize();
            this._tilemap.width = size.width;
            this._tilemap.height = size.height;

            this._destinationSprite.setVisibleArea(0, 0, size.width, size.height);

            // PIXI.js が v4 なら mask が正常に動くので、はみ出た部分を除外
            if (Const.pixiVersion >= 4) {
                this._maskGraphic = new PIXI.Graphics();
                this._maskGraphic.beginFill(0x000000);
                this._maskGraphic.drawRect(0, 0, size.width, size.height);
                this._maskGraphic.endFill();

                this._baseSprite.addChild(this._maskGraphic);
                this._tilemap.mask = this._maskGraphic;
            }

            // 最下層に配置
            this._baseSprite.addChildAt(this._tilemap, 0);
        };

        /**
         * タイルマップの再構築
         */
        Window_DebugMapTile.prototype.refreshTilemap = function () {
            this.createTilemap();

            this._tilemap.tileWidth = this._map.tileWidth();
            this._tilemap.tileHeight = this._map.tileHeight();
            this._tilemap.setData(this._map.width(), this._map.height(), this._map.data());

            // ループは無効化
            this._tilemap.horizontalWrap = false;  // this._map.isLoopHorizontal();
            this._tilemap.verticalWrap = false;  // this._map.isLoopVertical();

            // ウィンドウのスクロール量とタイルマップのスクロール量の比率
            this._scrollTileRatioX = this._tilemap.tileWidth / this.itemWidth();
            this._scrollTileRatioY = this._tilemap.tileHeight / this.itemHeight();

            this.refreshGridSprite();

            // ロード完了までスプライトを隠す
            this._tilemap.visible = false;
            this._destinationSprite.visible = false;
        };

        /**
         * タイルセットの再構築
         */
        Window_DebugMapTile.prototype.refreshTileset = function () {
            if (!this._map) {
                return;
            }

            this._tileset = this._map.tileset();
            if (!this._tileset) {
                return;
            }

            // この時点でタイルセット画像はロード済みでなければならない
            debuglog('Window_DebugMapTile.refreshTileset() called');
            var newTilesetFlags = this._map.tilesetFlags();
            this._tilemap.refreshTileset();
            if (!this._tilemap.flags.equals(newTilesetFlags)) {
                this._tilemap.refresh();
            }
            this._tilemap.flags = newTilesetFlags;

            // 読み込みが完了したらスプライトを表示
            this._tilemap.visible = true;
            this._destinationSprite.visible = true;
        };

        /**
         * タイルセットの読み込み
         */
        Window_DebugMapTile.prototype.loadTileset = function () {
            if (!this._map) {
                return;
            }

            this._tileset = this._map.tileset();
            if (!this._tileset) {
                return;
            }

            var tilesetNames = this._tileset.tilesetNames;
            for (var i = 0; i < tilesetNames.length; i++) {
                this._tilemap.bitmaps[i] = ImageManager.loadTileset(tilesetNames[i]);
            }
        };

        /**
         * タイルマップ表示の更新
         */
        Window_DebugMapTile.prototype.updateTilemap = function () {
            if (!this._tilemap) {
                return;
            }

            this._tilemap.origin.x = this._scrollX * this._scrollTileRatioX;
            this._tilemap.origin.y = this._scrollY * this._scrollTileRatioY;
        }

        /**
         * 移動先スプライトの位置を更新
         */
        Window_DebugMapTile.prototype.updateDestinationPosition = function () {
            if (!this._destinationSprite) {
                return;
            }

            var cursor = this.getCursorTile();
            this._destinationSprite.setDestination(
                cursor.x - this.leftCol(),
                cursor.y - this.topRow()
            );
        };

        Window_DebugMapTile.prototype.refresh = function () {
            Window_Selectable.prototype.refresh.call(this);

            this.updateTilemap();
            this.updateDestinationPosition();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugEventList
        //
        // イベント選択用ウィンドウ

        function Window_DebugEventList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugEventList.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugEventList.prototype.constructor = Window_DebugEventList;

        Window_DebugEventList.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this._data = [];
            this._map = null;
            this.refresh();
            this.hide();
            this.selectLast();
        };

        Window_DebugEventList._lastIndex = 0;

        Window_DebugEventList.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugEventList.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugEventList.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugEventList.prototype.includes = function (item) {
            return item != null;
        };

        Window_DebugEventList.prototype.isEnabled = function (item) {
            return true;
        };

        Window_DebugEventList.prototype.select = function (index) {
            Window_Selectable.prototype.select.call(this, index);
            if (this._switchListWindow) {
                this._switchListWindow.setEvent(this.item());
            }
        };

        Window_DebugEventList.prototype.setMap = function (map) {
            this._map = map;
            this.refresh();
        };

        Window_DebugEventList.prototype.setSwitchListWindow = function (window) {
            this._switchListWindow = window;
            this.select(this.index());
        };

        Window_DebugEventList.prototype.makeItemList = function () {
            if (this._map == null) {
                this._data = [];
                return;
            }

            // この時点でマップデータが一時領域に読み込み済みでなければならない
            this._data = $dataKmsTemporallyMapData.events.filter(function (event) {
                return event != null;
            });
        };

        Window_DebugEventList.prototype.selectLast = function () {
            var index = this._data.indexOf(Window_DebugEventList._lastIndex);
            index = Math.min(index, this._data.length - 1);
            this.select(index >= 0 ? index : 0);
        };

        Window_DebugEventList.prototype.drawItem = function (index) {
            var item = this._data[index];
            if (item == null) {
                return;
            }

            this.changePaintOpacity(this.isEnabled(item));
            this.resetTextColor();

            // イベント名描画
            var text = '%1:%2'.format(item.id.padZero(4), item.name);
            var rect = this.itemRectForText(index);
            this.drawText(text, rect.x, rect.y, rect.width);
            this.changePaintOpacity(1);
        };

        Window_DebugEventList.prototype.refresh = function () {
            this.makeItemList();
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugSelfSwitchList
        //
        // セルフスイッチ選択用ウィンドウ

        function Window_DebugSelfSwitchList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugSelfSwitchList.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugSelfSwitchList.prototype.constructor = Window_DebugSelfSwitchList;

        Window_DebugSelfSwitchList.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this._data = ['A', 'B', 'C', 'D'];
            this._map = null;
            this._event = null;
            this.refresh();
            this.hide();
            this.selectLast();
        };

        Window_DebugSelfSwitchList.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugSelfSwitchList.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugSelfSwitchList.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugSelfSwitchList.prototype.includes = function (item) {
            return item != null;
        };

        Window_DebugSelfSwitchList.prototype.isEnabled = function (item) {
            return true;
        };

        Window_DebugSelfSwitchList.prototype.setMap = function (map) {
            this._map = map;
            this.refresh();
        };

        Window_DebugSelfSwitchList.prototype.setEvent = function (event) {
            this._event = event;
            this.refresh();
        };

        Window_DebugSelfSwitchList.prototype.selectLast = function () {
            this.select(0);
        };

        /**
         * セルフスイッチアクセス用のキーを取得
         */
        Window_DebugSelfSwitchList.prototype.getKey = function (type) {
            var switchType = (type != null) ? type : this.item();

            if (this._map != null &&
                this._event.id != null &&
                switchType != null) {
                return [this._map.id, this._event.id, switchType];
            }
            else {
                return null;
            }
        };

        Window_DebugSelfSwitchList.prototype.drawItem = function (index) {
            var item = this._data[index];
            if (item == null || this._map == null || this._event == null) {
                return;
            }

            this.changePaintOpacity(this.isEnabled(item));
            this.resetTextColor();

            var switchValue = $gameSelfSwitches.value(this.getKey(item));
            var text = '[%1] %2'.format(item, switchValue ? 'ON' : 'OFF');
            var rect = this.itemRectForText(index);
            this.drawText(text, rect.x, rect.y, rect.width);
            this.changePaintOpacity(1);
        };

        Window_DebugSelfSwitchList.prototype.refresh = function () {
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugSystemValue
        //
        // デバッグ用システム値変更ウィンドウ

        function Window_DebugSystemValue() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugSystemValue.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugSystemValue.prototype.constructor = Window_DebugSystemValue;

        // 表示データの設定
        Window_DebugSystemValue.DataTypeConfig =
        {
            // type ... uint: 非負整数
            // get  ... 値取得関数
            // set  ... 値変更関数
            battleCount: {
                type: 'uint',
                get: function () { return $gameSystem._battleCount; },
                set: function (value) { $gameSystem._battleCount = value; }
            },
            winCount: {
                type: 'uint',
                get: function () { return $gameSystem._winCount; },
                set: function (value) { $gameSystem._winCount = value; }
            },
            escapeCount: {
                type: 'uint',
                get: function () { return $gameSystem._escapeCount; },
                set: function (value) { $gameSystem._escapeCount = value; }
            },
            saveCount: {
                type: 'uint',
                get: function () { return $gameSystem._saveCount; },
                set: function (value) { $gameSystem._saveCount = value; }
            }
        };

        Window_DebugSystemValue.prototype.initialize = function (x, y) {
            this._data = [
                'battleCount', 'winCount', 'escapeCount', 'saveCount'
            ];

            var width = this.windowWidth();
            var height = this.windowHeight();
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this.createContents();
            this.refresh();
            this.select(0);
            this.hide();
        };

        Window_DebugSystemValue.prototype.windowWidth = function () {
            return 360 + this.standardPadding() * 2;
        };

        Window_DebugSystemValue.prototype.windowHeight = function () {
            return this.fittingHeight(this.maxItems());
        };

        Window_DebugSystemValue.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugSystemValue.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        /**
         * 選択されているシステム値を表すキー文字列を取得
         */
        Window_DebugSystemValue.prototype.getKey = function () {
            return this.getKeyByIndex(this.index());
        };

        /**
         * インデックスを指定して、システム値を表すキー文字列を取得
         */
        Window_DebugSystemValue.prototype.getKeyByIndex = function (index) {
            if (!this._data || index < 0) {
                return null;
            }

            return this._data[index];
        };

        /**
         * 選択されているシステム値を取得
         */
        Window_DebugSystemValue.prototype.item = function () {
            return this.getItemByIndex(this.index());
        };

        /**
         * インデックスを指定して、システム値を取得
         */
        Window_DebugSystemValue.prototype.getItemByIndex = function (index) {
            var key = this.getKeyByIndex(index);
            if (key == null) {
                return null;
            }

            return Window_DebugSystemValue.DataTypeConfig[key];
        };

        Window_DebugSystemValue.prototype.drawItem = function (index) {
            var key = this.getKeyByIndex(index);
            var item = this.getItemByIndex(index);
            if (key == null || item == null) {
                return;
            }

            var paramName = TextManager.DebugUtil[key];
            var paramValue = item.get();

            var nameWidth = 180;
            var rect = this.itemRectForText(index);
            this.changeTextColor(this.systemColor());
            this.drawText(paramName, rect.x, rect.y, nameWidth);
            this.resetTextColor();
            var numWidth = rect.width - (rect.x + nameWidth);
            this.drawText(paramValue, rect.x + nameWidth, rect.y, numWidth, 'right');
        };

        Window_DebugSystemValue.prototype.refresh = function () {
            this.contents.clear();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugWatch
        //
        // ウォッチ対象データの内容を表示するウィンドウ

        function Window_DebugWatch() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugWatch.prototype = Object.create(Window_Base.prototype);
        Window_DebugWatch.prototype.constructor = Window_DebugWatch;

        Window_DebugWatch.prototype.initialize = function (x, y, width, height) {
            this._isAutoPosition = false;

            Window_Base.prototype.initialize.call(this, x, y, width, height);
            this.opacity = 0;

            // Dimmer より手前に更新通知演出を出すため、先に更新通知スプライトを作成
            this.createUpdateSprites();
            this.showBackgroundDimmer();
            this.refresh();
            this.hide();
        };

        /**
         * 更新通知スプライトの作成
         */
        Window_DebugWatch.prototype.createUpdateSprites = function () {
            this._updateSprites = [];

            var lineHeight = this.lineHeight();
            var padding = this.standardPadding();
            var count = Math.max(
                Math.floor((Graphics.boxHeight - this.y - this.standardPadding() * 2) / lineHeight),
                1);
            for (var i = 0; i < count; i++) {
                var sprite = new Sprite_DebugWatchUpdate();
                sprite.setup(padding, padding + i * lineHeight, this.contentsWidth(), lineHeight);
                this._updateSprites.push(sprite);
                this.addChildToBack(sprite);
            }
        };

        Window_DebugWatch.prototype.lineHeight = function () {
            return 36 * Params.watchFontSize / this.standardFontSize();
        };

        /**
         * ウォッチ対象を取得
         */
        Window_DebugWatch.prototype.getWatchList = function () {
            return $gameTemp.getDebugWatchItemList();
        };

        Window_DebugWatch.prototype.resetFontSettings = function () {
            Window_Base.prototype.resetFontSettings.call(this);

            this.contents.fontSize = Params.watchFontSize;
        };

        /**
         * ウォッチ対象を取得
         */
        Window_DebugWatch.prototype.setAutoPositionEnabled = function (isEnabled) {
            this._isAutoPosition = !!isEnabled;
            if (this._isAutoPosition) {
                this.adjustWindowPosition();
            }
        };

        Window_DebugWatch.prototype.update = function () {
            Window_Base.prototype.update.call(this);

            this.visible = this.getWatchList().length > 0;

            if ($gameTemp.isDebugWatchRefreshRequested()) {
                this.refresh();
            }
            else {
                // 更新された項目を再描画
                var list = this.getWatchList();
                for (var i = 0; i < list.length; i++) {
                    if (list[i].checkUpdate()) {
                        this.updateItem(i);
                    }
                }
            }
        };

        /**
         * ウォッチ項目の更新
         */
        Window_DebugWatch.prototype.updateItem = function (index) {
            this.drawItem(index);

            var sprite = this._updateSprites[index];
            if (sprite) {
                sprite.animate();
            }
        };

        /**
         * ウィンドウサイズの調整
         */
        Window_DebugWatch.prototype.adjustWindowSize = function () {
            this.height = this.fittingHeight(Math.max(this.getWatchList().length, 1));
            this.refreshDimmerBitmap();
        };

        /**
         * ウィンドウ位置の調整
         */
        Window_DebugWatch.prototype.adjustWindowPosition = function () {
            if (!this._isAutoPosition) {
                return;
            }

            switch (Params.watchWindowPosition) {
                case Const.WatchWindowPosition.topLeft:
                default:
                    this.x = 0;
                    this.y = -8;
                    break;

                case Const.WatchWindowPosition.topRight:
                    this.x = Graphics.boxWidth - this.width;
                    this.y = -8;
                    break;

                case Const.WatchWindowPosition.bottomLeft:
                    this.x = 0;
                    this.y = Graphics.boxHeight - this.height + 8;
                    break;

                case Const.WatchWindowPosition.bottomRight:
                    this.x = Graphics.boxWidth - this.width;
                    this.y = Graphics.boxHeight - this.height + 8;
                    break;
            }
        };

        Window_DebugWatch.prototype.itemRect = function (index) {
            var rect = new Rectangle();
            rect.width = this.contentsWidth();
            rect.height = this.lineHeight();
            rect.x = 0;
            rect.y = index * rect.height;
            return rect;
        };

        Window_DebugWatch.prototype.itemRectForText = function (index) {
            // Window_Selectable の処理を流用
            return Window_Selectable.prototype.itemRectForText.call(this, index);
        };

        Window_DebugWatch.prototype.clearItem = function (index) {
            // Window_Selectable の処理を流用
            Window_Selectable.prototype.clearItem.call(this, index);
        };

        Window_DebugWatch.prototype.drawItem = function (index) {
            var item = this.getWatchList()[index];
            if (!item) {
                return;
            }

            this.clearItem(index);

            var rect = this.itemRectForText(index);
            this.changeTextColor(this.systemColor());
            this.drawText(
                '[%1:%2] %3'.format(item.typeSymbol, item.id.padZero(4), item.name),
                rect.x,
                rect.y,
                rect.width
            );
            this.resetTextColor();
            this.drawText(item.getDisp(), rect.x, rect.y, rect.width, 'right');
        };

        Window_DebugWatch.prototype.drawAllItems = function () {
            this.resetFontSettings();
            for (var i = 0; i < this.getWatchList().length; i++) {
                this.drawItem(i);
            }
        };

        Window_DebugWatch.prototype.refresh = function () {
            $gameTemp.clearDebugWatchRefreshRequest();

            this.adjustWindowSize();
            this.adjustWindowPosition();
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugWatchItemList
        //
        // ウォッチ項目選択用ウィンドウ

        function Window_DebugWatchItemList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugWatchItemList.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugWatchItemList.prototype.constructor = Window_DebugWatchItemList;

        Window_DebugWatchItemList._lastIndex = 0;

        Window_DebugWatchItemList.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this.refresh();
            this.hide();
            this.selectLast();
        };

        Window_DebugWatchItemList.prototype.lineHeight = function () {
            return Window_Selectable.prototype.lineHeight.call(this) * 2;
        };

        Window_DebugWatchItemList.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugWatchItemList.prototype.selectLast = function () {
            var index = Window_DebugWatchItemList._lastIndex;
            this.select(index < this._data.length ? index : 0);
        };

        /**
         * 選択されている項目を取得
         */
        Window_DebugWatchItemList.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugWatchItemList.prototype.makeItemList = function () {
            this._data = $gameTemp.getDebugWatchItemList().concat('add');
        };

        Window_DebugWatchItemList.prototype.drawItem = function (index) {
            var rect = this.itemRectForText(index);
            rect.y -= rect.height / 4;

            var item = this._data[index];
            if (!item) {
                return;
            }
            else if (item === 'add') {
                this.drawText(
                    '( %1 )'.format(TextManager.DebugUtil.addWatchItem),
                    rect.x + 32,
                    rect.y + rect.height / 4,
                    rect.width - 32,
                    rect.height / 2
                );
                return;
            }

            this.changeTextColor(this.systemColor());
            this.drawText(item.typename, rect.x, rect.y, rect.width, rect.height / 2);
            this.resetTextColor();
            this.drawText(
                '%1: %2'.format(item.id.padZero(4), item.name),
                rect.x,
                rect.y + rect.height / 2,
                rect.width,
                rect.height / 2
            );
        };

        Window_DebugWatchItemList.prototype.refresh = function () {
            this.makeItemList();
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Window_DebugWatchItemEdit
        //
        // ウォッチ項目編集用ウィンドウ

        function Window_DebugWatchItemEdit() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugWatchItemEdit.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugWatchItemEdit.prototype.constructor = Window_DebugWatchItemEdit;

        Window_DebugWatchItemEdit.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this._item = new DebugWatchItem();
            this.setMode(Const.WatchItemEditMode.add);
            this.openness = 0;
            this.deactivate();
            this.refresh();
        };

        Window_DebugWatchItemEdit.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        /**
         * 編集している項目
         */
        Window_DebugWatchItemEdit.prototype.item = function () {
            return this._item;
        };

        /**
         * 編集する項目の設定
         */
        Window_DebugWatchItemEdit.prototype.setItem = function (item) {
            if (item instanceof DebugWatchItem) {
                this._item.copyFrom(item);
                this.setMode(Const.WatchItemEditMode.edit);
            }
            else {
                // DebugWatchItem でなければ追加モード (初期状態はスイッチ 1 を選択)
                this._item = new DebugWatchItem();
                this._item.setupSwitch(1);
                this.setMode(Const.WatchItemEditMode.add);
            }

            this.refresh();
            this.select(0);
        };

        /**
         * 編集モードの設定
         */
        Window_DebugWatchItemEdit.prototype.setMode = function (mode) {
            if (this._mode === mode) {
                return;
            }

            this._data = ['target', 'ok'];

            this._mode = mode;
            if (mode === Const.WatchItemEditMode.edit) {
                this._data.push('remove');
            }
        };

        /**
         * 編集モードの取得
         */
        Window_DebugWatchItemEdit.prototype.getMode = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugWatchItemEdit.prototype.itemRect = function (index) {
            var rect = Window_Selectable.prototype.itemRect.call(this, index);

            // 先頭だけ 2 行サイズにする
            if (index === 0) {
                rect.height += this.lineHeight();
            }
            else if (index > 0) {
                rect.y += this.lineHeight();
            }

            return rect;
        };

        Window_DebugWatchItemEdit.prototype.drawItem = function (index) {
            var rect = this.itemRectForText(index);
            var item = this._data[index];
            switch (item) {
                case 'target':
                    this.drawItemType(rect.x, rect.y, rect.width);
                    this.drawItemId(rect.x, rect.y + this.lineHeight(), rect.width);
                    break;

                case 'ok':
                    this.changeTextColor(this.systemColor());
                    this.drawText('OK', rect.x + 40, rect.y, rect.width);
                    this.resetTextColor();
                    break;

                case 'remove':
                    this.changeTextColor(this.systemColor());
                    this.drawText(TextManager.DebugUtil.watchItemRemove, rect.x + 40, rect.y, rect.width);
                    this.resetTextColor();
                    break;

                default:
                    // 何も表示しない
                    break;
            }
        };

        /**
         * 項目の種類を描画
         */
        Window_DebugWatchItemEdit.prototype.drawItemType = function (x, y, width) {
            this.changeTextColor(this.systemColor());
            this.drawText(TextManager.DebugUtil.watchItemType, x, y, 120);
            this.resetTextColor();
            this.drawText(this._item.typename, x + 120, y, width - 120);
        };

        /**
         * 項目の ID を描画
         */
        Window_DebugWatchItemEdit.prototype.drawItemId = function (x, y, width) {
            this.drawText(
                '%1: %2'.format(this._item.id.padZero(4), this._item.name),
                x, y, width);
        };

        Window_DebugWatchItemEdit.prototype.refresh = function () {
            this.height = this.fittingHeight(this.maxItems() + 1);
            this.createContents();

            if (this._item) {
                this.drawAllItems();
            }
        };


        //-----------------------------------------------------------------------------
        // Window_DebugTroopList
        //
        // 敵グループ選択用ウィンドウ

        function Window_DebugTroopList() {
            this.initialize.apply(this, arguments);
        }

        Window_DebugTroopList.prototype = Object.create(Window_Selectable.prototype);
        Window_DebugTroopList.prototype.constructor = Window_DebugTroopList;

        Window_DebugTroopList.prototype.initialize = function (x, y, width, height) {
            Window_Selectable.prototype.initialize.call(this, x, y, width, height);
            this._data = [];
            this.refresh();
            this.hide();
            this.selectLast();
        };

        Window_DebugTroopList._lastIndex = 0;

        Window_DebugTroopList.prototype.maxCols = function () {
            return 1;
        };

        Window_DebugTroopList.prototype.spacing = function () {
            return 48;
        };

        Window_DebugTroopList.prototype.maxItems = function () {
            return this._data ? this._data.length : 1;
        };

        Window_DebugTroopList.prototype.item = function () {
            var index = this.index();
            return this._data && index >= 0 ? this._data[index] : null;
        };

        Window_DebugTroopList.prototype.includes = function (item) {
            return item != null;
        };

        Window_DebugTroopList.prototype.isEnabled = function (item) {
            if (item == null) {
                // ランダムエンカウント枠があれば有効
                return $gameMap.encounterList().length > 0;
            }
            else {
                // 常に有効
                return true;
            }
        };

        Window_DebugTroopList.prototype.makeItemList = function () {
            this._data = $dataTroops.filter(function (item) {
                return this.includes(item);
            }, this);

            // 先頭は現在マップからのランダム選定用 null
            this._data.unshift(null);
        };

        Window_DebugTroopList.prototype.selectLast = function () {
            var index = this._data.indexOf(Window_DebugTroopList._lastIndex);
            this.select(index >= 0 ? index : 0);
        };

        Window_DebugTroopList.prototype.drawItem = function (index) {
            var item = this._data[index];

            this.changePaintOpacity(this.isEnabled(item));
            this.resetTextColor();

            var rect = this.itemRectForText(index);

            if (item == null) {
                // ランダム選定
                var text = '< %1 >'.format(TextManager.DebugUtil.encounterRandom);
                this.drawText(text, rect.x + 80, rect.y, rect.width);
            }
            else {
                // データベース
                var text = '%1:%2'.format(index.padZero(4), item.name);
                this.drawText(text, rect.x, rect.y, rect.width);
            }

            this.changePaintOpacity(1);
        };

        Window_DebugTroopList.prototype.refresh = function () {
            this.makeItemList();
            this.createContents();
            this.drawAllItems();
        };


        //-----------------------------------------------------------------------------
        // Scene_Map

        var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
        Scene_Map.prototype.createAllWindows = function () {
            _Scene_Map_createAllWindows.call(this);

            this.createDebugWatchWindow();
        };

        /**
         * ウォッチウィンドウの作成
         */
        Scene_Map.prototype.createDebugWatchWindow = function () {
            if (!$gameTemp.isPlaytest()) {
                return;
            }

            this._debugWatchWindow = new Window_DebugWatch(0, 0, Params.watchWindowWidth, 100);
            this._debugWatchWindow.setAutoPositionEnabled(true);
            this._debugWatchWindow.show();
            this.addWindow(this._debugWatchWindow);
        };


        //-----------------------------------------------------------------------------
        // Scene_Debug

        var _Scene_Debug_create = Scene_Debug.prototype.create;
        Scene_Debug.prototype.create = function () {
            _Scene_Debug_create.call(this);

            // 初期化時間短縮のため、汎用のウィンドウ以外は遅延初期化する
            this.createUpperWindowLayer();
            this.createTitleWindow();
            this.createCommandWindow();
            this.createHelpWindow();
            this.createNumberWindow();

            this.initializeWindowStates();
        };

        var _Scene_Debug_createHelpWindow = Scene_Debug.prototype.createHelpWindow;
        Scene_Debug.prototype.createHelpWindow = function () {
            _Scene_Debug_createHelpWindow.call(this);

            this._helpWindow.y = this._titleWindow.height;
        };

        var _Scene_Debug_createEditWindow = Scene_Debug.prototype.createEditWindow;
        Scene_Debug.prototype.createEditWindow = function () {
            _Scene_Debug_createEditWindow.call(this);

            // updateSwitch と updateVariable は都度置き換えて使うので一旦消す
            this._editWindow.updateSwitch
                = this._editWindow.updateVariable
                = function () { };
        };

        /**
         * ウィンドウの初期パラメータ調整
         */
        Scene_Debug.prototype.initializeWindowStates = function () {
            // タイトルウィンドウ分の高さ調整
            var wy = this._titleWindow.height;
            this._rangeWindow.y = wy;
            this._rangeWindow.height -= wy;
            this._editWindow.y = wy;
            this._editWindow.height = this._rangeWindow.height;
            /*
                this._debugHelpWindow.y      = wy + this._editWindow.height;
                this._debugHelpWindow.height = Graphics.boxHeight - this._debugHelpWindow.y;
                this._debugHelpWindow.resetFontSettings = function()
                {
                    Window_Base.prototype.resetFontSettings.call(this);
            
                    this.contents.fontSize *= 0.75;
                };
            */

            // 表示状態で作成されるが、初期状態では非表示にしておくウィンドウ群
            this._rangeWindow.deactivate();
            this._rangeWindow.hide();
            this._editWindow.hide();
            this._debugHelpWindow.hide();
            this._helpWindow.hide();
        };

        /**
         * 上層ウィンドウレイヤーの作成
         */
        Scene_Debug.prototype.createUpperWindowLayer = function () {
            var width = Graphics.boxWidth;
            var height = Graphics.boxHeight;
            var x = (Graphics.width - width) / 2;
            var y = (Graphics.height - height) / 2;
            this._upperWindowLayer = new WindowLayer();
            this._upperWindowLayer.move(x, y, width, height);
            this.addChild(this._upperWindowLayer);

            if (KMS.imported['CursorAnimation']) {
                this._animationCursor.addWindowLayer(this._upperWindowLayer);
            }
        };

        /**
         * タイトルウィンドウを作成
         */
        Scene_Debug.prototype.createTitleWindow = function () {
            this._titleWindow = new Window_DebugTitle(Graphics.boxWidth, 1);
            this._titleWindow.setText(TextManager.DebugUtil.sceneTitle);
            this.addWindow(this._titleWindow);
        };

        /**
         * コマンドウィンドウを作成
         */
        Scene_Debug.prototype.createCommandWindow = function () {
            var wx = 32;
            var wy = this._titleWindow.height + 32;
            this._commandWindow = new Window_DebugCommand(wx, wy);
            this._commandWindow.setHandler('itemNumber', this.onSelectItem.bind(this));
            this._commandWindow.setHandler('actorParam', this.onSelectActor.bind(this));
            this._commandWindow.setHandler('member', this.onSelectPartyMember.bind(this));
            this._commandWindow.setHandler('reloadMap', this.onReloadMap.bind(this));
            this._commandWindow.setHandler('loadDatabase', this.onReloadDatabase.bind(this));
            this._commandWindow.setHandler('transfer', this.onTransferMapStart.bind(this));
            this._commandWindow.setHandler('switchVar', this.onSwitchVarStart.bind(this));
            this._commandWindow.setHandler('selfSwitch', this.onSelfSwitchMapStart.bind(this));
            this._commandWindow.setHandler('systemValue', this.onSelectSystemValue.bind(this));
            this._commandWindow.setHandler('watchWindow', this.onWatchWindow.bind(this));
            this._commandWindow.setHandler('encounter', this.onForceEncounter.bind(this));
            //this._commandWindow.setHandler('dispPassage',  this.onDispPassage.bind(this));
            this._commandWindow.setHandler('cancel', this.popScene.bind(this));

            // 追加コマンド
            KMS.DebugUtil.debugCommands.forEach(function (command) {
                this._commandWindow.setHandler(command.id, command.onSelect.bind(this));
            }, this);

            this.addWindow(this._commandWindow);
        };

        /**
         * アイテムウィンドウを作成
         */
        Scene_Debug.prototype.createItemWindow = function () {
            if (this._itemWindow) {
                return;
            }

            var wy = this._helpWindow.y + this._helpWindow.height;
            var wh = Graphics.boxHeight - wy;
            this._itemWindow = new Window_DebugItemList(0, wy, Graphics.boxWidth, wh);
            this._itemWindow.setHelpWindow(this._helpWindow);
            this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
            this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
            this.addWindow(this._itemWindow);
        };

        /**
         * アクターパラメータ編集ウィンドウを作成
         */
        Scene_Debug.prototype.createActorParamWindow = function () {
            if (this._actorParamWindow) {
                return;
            }

            var wx = 360;
            var wy = this._titleWindow.height;
            var ww = Graphics.boxWidth - wx;
            var wh = Graphics.boxHeight - wy;
            this._actorParamWindow = new Window_DebugActorParam(wx, wy, ww, wh);
            this._actorParamWindow.setHandler('ok', this.onActorParamOk.bind(this));
            this._actorParamWindow.setHandler('cancel', this.onActorParamCancel.bind(this));
            this.addWindow(this._actorParamWindow);

            if (this._actorListWindow) {
                // 先に ActorListWindow を作ったときに腐らない用
                this._actorListWindow.setStatusWindow(this._actorParamWindow);
            }
        };

        /**
         * アクター一覧ウィンドウを作成
         */
        Scene_Debug.prototype.createActorListWindow = function () {
            if (this._actorListWindow) {
                return;
            }

            var wy = this._titleWindow.height;
            var wh = Graphics.boxHeight - wy;
            this._actorListWindow = new Window_DebugActorList(0, wy, 360, wh);
            this._actorListWindow.setHandler('ok', this.onActorOk.bind(this));
            this._actorListWindow.setHandler('cancel', this.onActorCancel.bind(this));
            this._actorListWindow.setStatusWindow(this._actorParamWindow);
            this.addWindow(this._actorListWindow);
        };

        /**
         * アクタースキル編集ウィンドウを作成
         */
        Scene_Debug.prototype.createActorSkillWindow = function () {
            if (this._actorSkillWindow) {
                return;
            }

            var wy = this._helpWindow.y + this._helpWindow.height;
            var wh = Graphics.boxHeight - wy;
            this._actorSkillWindow = new Window_DebugActorSkill(0, wy, Graphics.boxWidth, wh);
            this._actorSkillWindow.setHelpWindow(this._helpWindow);
            this._actorSkillWindow.setHandler('ok', this.onActorSkillOk.bind(this));
            this._actorSkillWindow.setHandler('cancel', this.onActorSkillCancel.bind(this));
            this.addWindow(this._actorSkillWindow);
        };

        /**
         * パーティメンバー用ウィンドウを作成
         */
        Scene_Debug.prototype.createPartyWindow = function () {
            if (this._activePartyWindow) {
                return;
            }

            var wy = this._titleWindow.height;
            var ww = Graphics.boxWidth / 2;
            this._activePartyTitleWindow = new Window_DebugTitle(ww, 1);
            this._activePartyTitleWindow.y = wy;
            this._activePartyTitleWindow.setText(TextManager.DebugUtil.activeParty);
            this.addWindow(this._activePartyTitleWindow);

            this._reservePartyTitleWindow = new Window_DebugTitle(ww, 1);
            this._reservePartyTitleWindow.x = ww;
            this._reservePartyTitleWindow.y = wy;
            this._reservePartyTitleWindow.setText(TextManager.DebugUtil.reserveParty);
            this.addWindow(this._reservePartyTitleWindow);

            wy += this._activePartyTitleWindow.height;
            var wh = Graphics.boxHeight - wy;
            this._activePartyWindow = new Window_DebugActivePartyList(0, wy, ww, wh);
            this._activePartyWindow.setHandler('ok', this.onActivePartyOk.bind(this));
            this._activePartyWindow.setHandler('formation', this.onActivePartyFormationStart.bind(this));
            this._activePartyWindow.setHandler('cancel', this.onActivePartyCancel.bind(this));
            this.addWindow(this._activePartyWindow);

            this._reservePartyWindow = new Window_DebugReservePartyList(ww, wy, ww, wh);
            this._reservePartyWindow.setHandler('ok', this.onReservePartyOk.bind(this));
            this._reservePartyWindow.setHandler('cancel', this.onReservePartyCancel.bind(this));
            this.addWindow(this._reservePartyWindow);
        };

        /**
         * マップ一覧ウィンドウを作成
         */
        Scene_Debug.prototype.createMapListWindow = function () {
            if (this._mapListWindow) {
                return;
            }

            // OK / キャンセルハンドラはコマンドに応じて変わるので、ここでは設定しない
            var wy = this._titleWindow.height;
            var wh = Graphics.boxHeight - wy;
            this._mapListWindow = new Window_DebugMapList(0, wy, 360, wh);
            this.addWindow(this._mapListWindow);
        };

        /**
         * タイルウィンドウを作成
         */
        Scene_Debug.prototype.createMapTileWindow = function () {
            if (this._mapTileWindow) {
                return;
            }

            var wx = 360;
            var wy = this._titleWindow.height;
            var ww = Graphics.boxWidth - wx;
            this._mapTilePositionWindow = new Window_DebugMapTilePosition(wx, wy, ww);
            this.addWindow(this._mapTilePositionWindow);

            wy = this._mapTilePositionWindow.y + this._mapTilePositionWindow.height;
            var wh = Graphics.boxHeight - wy;
            this._mapTileWindow = new Window_DebugMapTile(wx, wy, ww, wh);
            this._mapTileWindow.setHandler('ok', this.onTransferMapTileOk.bind(this));
            this._mapTileWindow.setHandler('cancel', this.onTransferMapTileCancel.bind(this));
            this._mapTileWindow.setPositionWindow(this._mapTilePositionWindow);
            this.addWindow(this._mapTileWindow);
        };

        /**
         * イベント一覧ウィンドウを作成
         */
        Scene_Debug.prototype.createEventListWindow = function () {
            if (this._eventListWindow) {
                return;
            }

            var wx = 360;
            var wy = this._titleWindow.height;
            var ww = Graphics.boxWidth - wx;
            this._eventListWindow = new Window_DebugEventList(wx, wy, ww, 64);
            var wh = Graphics.boxHeight - wy - this._eventListWindow.fittingHeight(4);
            this._eventListWindow.height = wh;
            this._eventListWindow.setHandler('ok', this.onSelfSwitchEventListOk.bind(this));
            this._eventListWindow.setHandler('cancel', this.onSelfSwitchEventListCancel.bind(this));
            this.addWindow(this._eventListWindow);
        };

        /**
         * セルフスイッチ一覧ウィンドウを作成
         */
        Scene_Debug.prototype.createSelfSwitchListWindow = function () {
            if (this._selfSwitchListWindow) {
                return;
            }

            var wx = this._eventListWindow.x;
            var wy = this._eventListWindow.y + this._eventListWindow.height;
            var ww = this._eventListWindow.width;
            var wh = Graphics.boxHeight - wy;
            this._selfSwitchListWindow = new Window_DebugSelfSwitchList(wx, wy, ww, wh);
            this._selfSwitchListWindow.setHandler('ok', this.onSelfSwitchListOk.bind(this));
            this._selfSwitchListWindow.setHandler('cancel', this.onSelfSwitchListCancel.bind(this));
            this.addWindow(this._selfSwitchListWindow);

            this._eventListWindow.setSwitchListWindow(this._selfSwitchListWindow);
        };

        /**
         * システム値ウィンドウを作成
         */
        Scene_Debug.prototype.createSystemValueWindow = function () {
            if (this._systemValueWindow) {
                return;
            }

            var wy = this._titleWindow.height + 32;
            this._systemValueWindow = new Window_DebugSystemValue(0, wy);
            this._systemValueWindow.x = (Graphics.boxWidth - this._systemValueWindow.width) / 2;
            this._systemValueWindow.setHandler('ok', this.onSystemValueOk.bind(this));
            this._systemValueWindow.setHandler('cancel', this.onSystemValueCancel.bind(this));
            this.addWindow(this._systemValueWindow);
        };

        /**
         * ウォッチウィンドウを作成
         */
        Scene_Debug.prototype.createWatchWindow = function () {
            if (this._watchWindow) {
                return;
            }

            var wx = 0;
            var wy = this._titleWindow.height;
            var ww = Graphics.boxWidth / 2;
            var wh = Graphics.boxHeight - wy;
            this._watchWindow = new Window_DebugWatch(wx, wy, ww, wh);

            // ウォッチ項目リストウィンドウより前に入れる
            if (this._watchEditWindow) {
                var index = this._windowLayer.getChildIndex(this._watchEditWindow);
                this._windowLayer.addChildAt(this._watchWindow, index);
            }
            else {
                this.addWindow(this._watchWindow);
            }
        };

        /**
         * ウォッチウィンドウを破棄
         */
        Scene_Debug.prototype.destroyWatchWindow = function () {
            if (!this._watchWindow) {
                return;
            }

            this._windowLayer.removeChild(this._watchWindow);
            delete this._watchWindow;
        };

        /**
         * ウォッチ項目リストウィンドウを作成
         */
        Scene_Debug.prototype.createWatchListWindow = function () {
            if (this._watchListWindow) {
                return;
            }

            var wx = Graphics.boxWidth / 2;
            var wy = this._titleWindow.height;
            var ww = Graphics.boxWidth - wx;
            var wh = Graphics.boxHeight - wy;
            this._watchListWindow = new Window_DebugWatchItemList(wx, wy, ww, wh);
            this._watchListWindow.setHandler('ok', this.onWatchListOk.bind(this));
            this._watchListWindow.setHandler('cancel', this.onWatchListCancel.bind(this));
            this.addWindow(this._watchListWindow);
        };

        /**
         * ウォッチ項目編集ウィンドウを作成
         */
        Scene_Debug.prototype.createWatchEditWindow = function () {
            if (this._watchEditWindow) {
                return;
            }

            var ww = Graphics.boxWidth * 3 / 5;
            var wx = (Graphics.boxWidth - ww) / 2;
            var wy = this._titleWindow.height + 32;
            var wh = Graphics.boxHeight - wy - 32;
            this._watchEditWindow = new Window_DebugWatchItemEdit(wx, wy, ww, wh);
            this._watchEditWindow.setHandler('ok', this.onWatchEditOk.bind(this));
            this._watchEditWindow.setHandler('cancel', this.onWatchEditCancel.bind(this));
            this.addWindow(this._watchEditWindow);
        };

        /**
         * 敵グループウィンドウを作成
         */
        Scene_Debug.prototype.createTroopWindow = function () {
            if (this._troopWindow) {
                return;
            }

            var wx = 32;
            var wy = this._titleWindow.height + 32;
            var ww = Graphics.boxWidth - 64;
            var wh = Graphics.boxHeight - wy - 32;
            this._troopWindow = new Window_DebugTroopList(wx, wy, ww, wh);
            this._troopWindow.setHandler('ok', this.onTroopOk.bind(this));
            this._troopWindow.setHandler('cancel', this.onTroopCancel.bind(this));
            this.addWindow(this._troopWindow);
        };

        /**
         * 数値入力ウィンドウを作成
         */
        Scene_Debug.prototype.createNumberWindow = function () {
            this._numberWindow = new Window_DebugNumberInput();
            this._upperWindowLayer.addChild(this._numberWindow);
        };

        /**
         * シーンの準備完了判定
         */
        var _Scene_Debug_isReady = Scene_Debug.prototype.isReady;
        Scene_Debug.prototype.isReady = function () {
            return _Scene_Debug_isReady.call(this) &&
                DataManager.isDatabaseLoaded() &&
                DataManager.isMapLoaded() &&
                (!this._isLoadingTemporallyMap || DataManager.isKmsTemporallyMapLoaded());
        };

        /**
         * シーンの更新
         */
        var _Scene_Debug_update = Scene_Debug.prototype.update;
        Scene_Debug.prototype.update = function () {
            // 読み込み中は更新しない
            if (!this.isReady()) {
                return;
            }

            // ロード完了時の処理
            if (this._loadCompleteHandler) {
                this._loadCompleteHandler.call(this);
                delete this._loadCompleteHandler;
            }

            _Scene_Debug_update.call(this);

            // update 後の処理
            if (this._postUpdateProc) {
                this._postUpdateProc.call(this);
                delete this._postUpdateProc;
            }
        };

        /**
         * メインコマンドウィンドウをアクティブ化
         */
        Scene_Debug.prototype.activateCommandWindow = function () {
            this._commandWindow.show();
            this._commandWindow.activate();
            this._titleWindow.setText(TextManager.DebugUtil.sceneTitle);
        };

        /**
         * アイテム選択の実行
         */
        Scene_Debug.prototype.onSelectItem = function () {
            this.createItemWindow();

            this._commandWindow.hide();
            this._helpWindow.show();
            this._itemWindow.show();
            this._itemWindow.activate();
            this._titleWindow.setText(TextManager.DebugUtil.itemNumber);
        };

        /**
         * アイテムの決定
         */
        Scene_Debug.prototype.onItemOk = function () {
            this._numberWindow.setHandler('cancel', this.onItemNumberCancel.bind(this));

            var item = this._itemWindow.item();
            var number = $gameParty.numItems(item);
            var digits = $gameParty.maxItems(item).toString().length;
            this._numberWindow.setCaption(item);
            this._numberWindow.setAllowNegative(false);
            this._numberWindow.start(number, digits, this.onItemNumberOk.bind(this));
        };

        /**
         * アイテム選択のキャンセル処理
         */
        Scene_Debug.prototype.onItemCancel = function () {
            this._helpWindow.hide();
            this._itemWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * アイテム個数入力の決定
         */
        Scene_Debug.prototype.onItemNumberOk = function (number) {
            // アイテム所持数の設定 (Game_Party に対して呼ぶ)
            var setItemNumber = function (item, number) {
                var currNumber = this.numItems(item);
                var amount = number - currNumber;
                this.gainItem(item, amount, false);
            };

            setItemNumber.call($gameParty, this._itemWindow.item(), number);

            this._itemWindow.refresh();
            this.onItemNumberCancel();
        };

        /**
         * アイテム個数入力のキャンセル処理
         */
        Scene_Debug.prototype.onItemNumberCancel = function () {
            this._numberWindow.close();
            this._itemWindow.activate();
        };

        /**
         * アクター選択の実行
         */
        Scene_Debug.prototype.onSelectActor = function () {
            this.createActorParamWindow();
            this.createActorListWindow();
            this.createActorSkillWindow();

            this._commandWindow.hide();
            this._actorListWindow.show();
            this._actorParamWindow.show();
            this._actorListWindow.activate();
            this._titleWindow.setText(TextManager.DebugUtil.actorParam);
        };

        /**
         * アクターの決定
         */
        Scene_Debug.prototype.onActorOk = function () {
            this._actorParamWindow.activate();
        };

        /**
         * アクター選択のキャンセル処理
         */
        Scene_Debug.prototype.onActorCancel = function () {
            this._actorListWindow.hide();
            this._actorParamWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * アクターパラメータの決定
         */
        Scene_Debug.prototype.onActorParamOk = function () {
            var actor = this._actorListWindow.item();
            var param = this._actorParamWindow.item();

            var caption;
            var number;
            var digits;
            var negative;
            switch (param) {
                case 'level':
                    {
                        caption = TextManager.level;
                        number = actor.level;
                        digits = actor.maxLevel().toString().length;
                        negative = false;
                    }
                    break;

                case 'skill':
                    {
                        // スキル編集ウィンドウに切り替え
                        this._actorListWindow.hide();
                        this._actorParamWindow.hide();
                        this._helpWindow.show();
                        this._actorSkillWindow.setActor(actor);
                        this._actorSkillWindow.selectLast();
                        this._actorSkillWindow.show();
                        this._actorSkillWindow.activate();
                    }
                    return;

                default:
                    {
                        var paramId = this._actorParamWindow.paramId();
                        caption = TextManager.param(paramId) + '+';
                        number = originalParamPlus.call(actor, paramId);
                        digits = 4;
                        negative = true;
                    }
                    break;
            }

            this._numberWindow.setCaption(caption);
            this._numberWindow.setAllowNegative(negative);
            this._numberWindow.setHandler('cancel', this.onActorParamInputCancel.bind(this));
            this._numberWindow.start(number, digits, this.onActorParamInputOk.bind(this));
        };

        /**
         * アクターパラメータのキャンセル処理
         */
        Scene_Debug.prototype.onActorParamCancel = function () {
            this._actorListWindow.activate();
        };

        /**
         * アクターパラメータ入力の決定
         */
        Scene_Debug.prototype.onActorParamInputOk = function (number) {
            var actor = this._actorListWindow.item();
            var param = this._actorParamWindow.item();

            if (param === 'level') {
                if (actor.level !== number) {
                    actor.changeLevel(number, false);
                }
            }
            else {
                // パラメータの設定 (Game_Actor に対して呼ぶ)
                var setParameter = function (paramId, value) {
                    var currValue = originalParamPlus.call(this, paramId);
                    var amount = value - currValue;
                    this.addParam(paramId, amount);
                };

                var paramId = this._actorParamWindow.paramId();
                setParameter.call(actor, paramId, number);
            }

            this._actorParamWindow.refresh();
            this.onActorParamInputCancel();
        };

        /**
         * アクターパラメータ入力のキャンセル処理
         */
        Scene_Debug.prototype.onActorParamInputCancel = function () {
            this._numberWindow.close();
            this._actorParamWindow.activate();
        };

        /**
         * アクタースキル編集の決定処理
         */
        Scene_Debug.prototype.onActorSkillOk = function () {
            // 選択したスキルの習得状態を切り替え
            var skill = this._actorSkillWindow.item();
            var actor = this._actorListWindow.item();
            if (actor.isLearnedSkill(skill.id)) {
                actor.forgetSkill(skill.id);
            }
            else {
                actor.learnSkill(skill.id);
            }

            this._actorSkillWindow.redrawItem(this._actorSkillWindow.index());
            this._actorSkillWindow.activate();
        };

        /**
         * アクタースキル編集のキャンセル処理
         */
        Scene_Debug.prototype.onActorSkillCancel = function () {
            this._helpWindow.hide();
            this._actorSkillWindow.hide();
            this._actorListWindow.show();
            this._actorParamWindow.refresh();
            this._actorParamWindow.show();
            this._actorParamWindow.activate();
        };

        /**
         * パーティ編成の実行
         */
        Scene_Debug.prototype.onSelectPartyMember = function () {
            this.createPartyWindow();

            this._commandWindow.hide();
            this._activePartyTitleWindow.show();
            this._reservePartyTitleWindow.show();
            this._activePartyWindow.show();
            this._activePartyWindow.activate();
            this._activePartyWindow.select(0);
            this._reservePartyWindow.show();
            this._reservePartyWindow.select(0);
            this._titleWindow.setText(TextManager.DebugUtil.member);
        };

        /**
         * パーティ編成: パーティ内アクター選択の決定
         */
        Scene_Debug.prototype.onActivePartyOk = function () {
            this._reservePartyWindow.activate();
        };

        /**
         * パーティ編成: パーティ内アクター選択のキャンセル
         */
        Scene_Debug.prototype.onActivePartyCancel = function () {
            this._activePartyTitleWindow.hide();
            this._reservePartyTitleWindow.hide();
            this._activePartyWindow.hide();
            this._reservePartyWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * パーティ編成: パーティ内アクター並び替えの開始
         */
        Scene_Debug.prototype.onActivePartyFormationStart = function () {
            this._activePartyWindow.setPendingIndex(this._activePartyWindow.index());
            this._activePartyWindow.setFormationChangeMode(true);
            this._activePartyWindow.refresh();
            this._activePartyWindow.setHandler('ok', this.onActivePartyFormationOk.bind(this));
            this._activePartyWindow.setHandler('formation', this.onActivePartyFormationOk.bind(this));
            this._activePartyWindow.setHandler('cancel', this.onActivePartyFormationCancel.bind(this));
        };

        /**
         * パーティ編成: パーティ内アクター並び替えの決定
         */
        Scene_Debug.prototype.onActivePartyFormationOk = function () {
            $gameParty.swapOrder(
                this._activePartyWindow.getPendingIndex(),
                this._activePartyWindow.index()
            );

            this._activePartyWindow.setFormationChangeMode(false);
            this._activePartyWindow.refresh();
            this._activePartyWindow.setHandler('ok', this.onActivePartyOk.bind(this));
            this._activePartyWindow.setHandler('formation', this.onActivePartyFormationStart.bind(this));
            this._activePartyWindow.setHandler('cancel', this.onActivePartyCancel.bind(this));
        };

        /**
         * パーティ編成: パーティ内アクター並び替えのキャンセル
         */
        Scene_Debug.prototype.onActivePartyFormationCancel = function () {
            this._activePartyWindow.setFormationChangeMode(false);
            this._activePartyWindow.refresh();
            this._activePartyWindow.setHandler('ok', this.onActivePartyOk.bind(this));
            this._activePartyWindow.setHandler('formation', this.onActivePartyFormationStart.bind(this));
            this._activePartyWindow.setHandler('cancel', this.onActivePartyCancel.bind(this));
            this._activePartyWindow.activate();
        };

        /**
         * パーティ編成: 待機メンバー選択の決定
         */
        Scene_Debug.prototype.onReservePartyOk = function () {
            // 選択したアクター同士を入れ替える
            var inActor = this._reservePartyWindow.item();
            var outActor = this._activePartyWindow.item();
            replaceActor.call($gameParty, inActor, outActor);

            this._activePartyWindow.refresh();
            this._activePartyWindow.activate();
            this._reservePartyWindow.refresh();
        };

        /**
         * パーティ編成: 待機メンバー選択のキャンセル
         */
        Scene_Debug.prototype.onReservePartyCancel = function () {
            this._activePartyWindow.activate();
        };

        /**
         * マップリロードの実行
         */
        Scene_Debug.prototype.onReloadMap = function () {
            $gameMap.setup($gameMap._mapId);
            this.popScene();

            // XXX: 入り直しせずにリロードする？
            //DataManager.loadMapData();
            //$gameMap._tilesetId = $dataMap.tilesetId;
            //$gameMap.refereshVehicles();
            //$gameMap.setupParallax();
            //$gameMap.setupBattleback();
            //$gameMap.refresh();
        };

        /**
         * データベースリロードの実行
         */
        Scene_Debug.prototype.onReloadDatabase = function () {
            // null 参照回避のため、update 完了後にリロードする
            this._postUpdateProc = function () {
                DataManager.loadDatabase();
            };

            // データベースロード完了後の処理
            this._loadCompleteHandler = function () {
                // ウォッチ項目の再構築
                $gameTemp.getDebugWatchItemList().forEach(function (item) {
                    item.refresh();
                });

                function reload(window) {
                    if (window) {
                        window.refresh();
                    }
                }

                // データベースに依存しているウィンドウを再描画
                reload(this._itemWindow);
                reload(this._actorListWindow);
                reload(this._actorParamWindow);
                reload(this._activePartyWindow);
                reload(this._reservePartyWindow);
                reload(this._mapListWindow);
                reload(this._rangeWindow);
                reload(this._editWindow);
                reload(this._watchListWindow);
                reload(this._troopWindow);

                // 追加コマンド
                KMS.DebugUtil.debugCommands.forEach(function (command) {
                    command.onReloadDatabase.call(this);
                }, this);

                // 追加処理
                KMS.DebugUtil.databaseReloadHandlers.forEach(function (handler) {
                    handler.call(window);
                });

                this._commandWindow.activate();
            }
        };

        /**
         * 場所移動コマンドの実行
         */
        Scene_Debug.prototype.onTransferMapStart = function () {
            this.createMapListWindow();
            this.createMapTileWindow();

            // マップ一覧のハンドラを設定
            this._mapListWindow.setHandler('ok', this.onTransferMapListOk.bind(this));
            this._mapListWindow.setHandler('cancel', this.onTransferMapListCancel.bind(this));

            this._commandWindow.hide();
            this._mapListWindow.show();
            this._mapTilePositionWindow.show();
            this._mapTileWindow.show();
            this._mapListWindow.selectLast();
            this._mapListWindow.activate();
            this._titleWindow.setText(TextManager.DebugUtil.transfer);
        };

        /**
         * 場所移動: マップの決定
         */
        Scene_Debug.prototype.onTransferMapListOk = function () {
            // null 参照回避のため、update 完了後にマップを読み込む
            this._postUpdateProc = function () {
                var map = this._mapListWindow.item();
                DataManager.loadMapData(map.id);
            };

            // マップデータ読み込み完了時の処理
            this._loadCompleteHandler = function () {
                debuglog('DataManager.loadMapData finished');

                // update 完了後にタイルセットを読み込む
                this._postUpdateProc = function () {
                    var map = this._mapListWindow.item();
                    this._mapTileWindow.setupMap(map.id);
                    this._mapTileWindow.loadTileset();

                    // タイルセットの読み込み完了後に表示を反映
                    this._loadCompleteHandler = function () {
                        debuglog('Window_DebugMapTile.loadTileset finished');

                        this._mapTileWindow.refreshTileset();
                        this._mapTileWindow.activate();
                    };
                };
            };
        };

        /**
         * 場所移動: マップ選択のキャンセル
         */
        Scene_Debug.prototype.onTransferMapListCancel = function () {
            this._mapListWindow.hide();
            this._mapTileWindow.hide();
            this._mapTilePositionWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * 場所移動: タイルの決定
         */
        Scene_Debug.prototype.onTransferMapTileOk = function () {
            // 移動先を設定
            var info = this._mapTileWindow.getTransferInfo();
            $gamePlayer.reserveTransfer(info.mapId, info.x, info.y, info.d, info.fadeType);

            // マップに戻る
            this.popScene();
        };

        /**
         * 場所移動: タイル選択のキャンセル
         */
        Scene_Debug.prototype.onTransferMapTileCancel = function () {
            this._mapTileWindow.setupMap(0);
            this._mapListWindow.activate();
        };

        /**
         * スイッチ・変数コマンドの実行
         */
        Scene_Debug.prototype.onSwitchVarStart = function () {
            // ハンドラの切り替え
            this._rangeWindow.setHandler('cancel', this.onSwitchVarCancel.bind(this));
            this._editWindow.setHandler('ok', this.onSwitchVarOk.bind(this));

            this._commandWindow.hide();
            this._rangeWindow.show();
            this._editWindow.show();
            this._rangeWindow.activate();
            this.refreshHelpWindow();
            this._titleWindow.setText(TextManager.DebugUtil.switchVar);
        };

        /**
         * スイッチ・変数範囲ウィンドウのキャンセル処理
         */
        Scene_Debug.prototype.onSwitchVarCancel = function () {
            this._rangeWindow.hide();
            this._editWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * スイッチ・変数編集ウィンドウの決定
         */
        Scene_Debug.prototype.onSwitchVarOk = function () {
            var id = this._editWindow.currentId();
            switch (this._editWindow.getMode()) {
                case 'switch':
                    {
                        // スイッチを切り替える
                        $gameSwitches.setValue(id, !$gameSwitches.value(id));
                        this._editWindow.redrawCurrentItem();
                        this._editWindow.activate();
                    }
                    break;

                case 'variable':
                    {
                        // 変数の入力
                        var caption = '%1:%2'.format(id.padZero(4), this._editWindow.itemName(id));
                        var number = $gameVariables.value(id);
                        var digits = Params.variableInputDigits;

                        this._numberWindow.setCaption(caption);
                        this._numberWindow.setAllowNegative(true);
                        this._numberWindow.setHandler('cancel', this.onSwitchVarInputCancel.bind(this));
                        this._numberWindow.start(number, digits, this.onSwitchVarInputOk.bind(this));
                    }
                    break;

                default:
                    // 来ないはずだが、とりあえず無反応にする
                    this._editWindow.activate();
                    break;
            }
        };

        /**
         * スイッチ・変数操作: 入力の決定
         */
        Scene_Debug.prototype.onSwitchVarInputOk = function (number) {
            $gameVariables.setValue(this._editWindow.currentId(), number);
            this._editWindow.redrawCurrentItem();

            // 入力の終了処理はキャンセルと同じ
            this.onSwitchVarInputCancel();
        };

        /**
         * スイッチ・変数操作: 入力のキャンセル処理
         */
        Scene_Debug.prototype.onSwitchVarInputCancel = function () {
            this._numberWindow.close();
            this._editWindow.activate();
        };

        /**
         * セルフスイッチコマンドの実行
         */
        Scene_Debug.prototype.onSelfSwitchMapStart = function () {
            this.createMapListWindow();
            this.createEventListWindow();
            this.createSelfSwitchListWindow();

            // マップ一覧のハンドラを設定
            this._mapListWindow.setHandler('ok', this.onSelfSwitchMapListOk.bind(this));
            this._mapListWindow.setHandler('cancel', this.onSelfSwitchMapListCancel.bind(this));

            // ウィンドウ切り替え
            this._commandWindow.hide();
            this._mapListWindow.show();
            this._eventListWindow.show();
            this._selfSwitchListWindow.show();
            this._mapListWindow.selectLast();
            this._mapListWindow.activate();
            this.refreshHelpWindow();
            this._titleWindow.setText(TextManager.DebugUtil.selfSwitch);
        };

        /**
         * セルフスイッチ: マップの決定
         */
        Scene_Debug.prototype.onSelfSwitchMapListOk = function () {
            this._isLoadingTemporallyMap = true;

            var map = this._mapListWindow.item();
            DataManager.loadKmsTemporallyMapData(map.id);

            // マップデータ読み込み完了後の処理
            this._loadCompleteHandler = function () {
                this._isLoadingTemporallyMap = false;

                var map = this._mapListWindow.item();
                this._eventListWindow.setMap(map);
                this._selfSwitchListWindow.setMap(map);
                this._eventListWindow.selectLast();
                this._eventListWindow.activate();
            };
        };

        /**
         * セルフスイッチ: マップ選択のキャンセル
         */
        Scene_Debug.prototype.onSelfSwitchMapListCancel = function () {
            this._mapListWindow.hide();
            this._eventListWindow.hide();
            this._selfSwitchListWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * セルフスイッチ: イベントの決定
         */
        Scene_Debug.prototype.onSelfSwitchEventListOk = function () {
            //var event = this._eventListWindow.item();
            //this._selfSwitchListWindow.setEvent(event);
            this._selfSwitchListWindow.activate();
        };

        /**
         * セルフスイッチ: イベント選択のキャンセル
         */
        Scene_Debug.prototype.onSelfSwitchEventListCancel = function () {
            this._eventListWindow.setMap(null);
            this._selfSwitchListWindow.setMap(null);
            this._mapListWindow.activate();

            $dataKmsTemporallyMapData = null;
        };

        /**
         * セルフスイッチの決定
         */
        Scene_Debug.prototype.onSelfSwitchListOk = function () {
            var key = this._selfSwitchListWindow.getKey();
            if (key == null) {
                return;
            }

            // ON/OFF 切り替え
            $gameSelfSwitches.setValue(key, !$gameSelfSwitches.value(key));

            this._selfSwitchListWindow.refresh();
            this._selfSwitchListWindow.activate();
        };

        /**
         * セルフスイッチ選択のキャンセル
         */
        Scene_Debug.prototype.onSelfSwitchListCancel = function () {
            this._eventListWindow.activate();
        };

        /**
         * システム値コマンドの実行
         */
        Scene_Debug.prototype.onSelectSystemValue = function () {
            this.createSystemValueWindow();

            this._commandWindow.hide();
            this._systemValueWindow.show();
            this._systemValueWindow.activate();
            this._titleWindow.setText(TextManager.DebugUtil.systemValue);
        };

        /**
         * システム値: 項目の決定
         */
        Scene_Debug.prototype.onSystemValueOk = function () {
            var key = this._systemValueWindow.getKey();
            var value = this._systemValueWindow.item();
            if (key == null || value == null) {
                return;
            }

            var caption = TextManager.DebugUtil[key];
            var number = value.get();
            var digits = Params.variableInputDigits;

            this._numberWindow.setCaption(caption);
            this._numberWindow.setAllowNegative(false);
            this._numberWindow.setHandler('cancel', this.onSystemValueInputCancel.bind(this));
            this._numberWindow.start(number, digits, this.onSystemValueInputOk.bind(this));
        };

        /**
         * システム値: 項目選択のキャンセル
         */
        Scene_Debug.prototype.onSystemValueCancel = function () {
            this._systemValueWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * システム値: 入力の決定
         */
        Scene_Debug.prototype.onSystemValueInputOk = function (number) {
            var value = this._systemValueWindow.item();
            if (value != null) {
                value.set(number);
            }

            this._systemValueWindow.refresh();
            this.onSystemValueInputCancel();
        };

        /**
         * システム値: 入力のキャンセル処理
         */
        Scene_Debug.prototype.onSystemValueInputCancel = function () {
            this._numberWindow.close();
            this._systemValueWindow.refresh();
            this._systemValueWindow.activate();
        };

        /**
         * ウォッチウィンドウコマンドの実行
         */
        Scene_Debug.prototype.onWatchWindow = function () {
            this.createWatchWindow();
            this.createWatchListWindow();
            this.createWatchEditWindow();

            // _watchWindow は自動で表示状態が変わるので何もしない
            this._commandWindow.hide();
            this._watchListWindow.show();
            this._watchListWindow.activate();
            this._titleWindow.setText(TextManager.DebugUtil.watchWindow);
        };

        /**
         * ウォッチ: 項目の決定
         */
        Scene_Debug.prototype.onWatchListOk = function () {
            this._watchEditWindow.setItem(this._watchListWindow.item());
            this._watchEditWindow.open();
            this._watchEditWindow.activate();
        };

        /**
         * ウォッチ: 項目選択のキャンセル
         */
        Scene_Debug.prototype.onWatchListCancel = function () {
            // update で自動表示されてしまうので消去ついでに削除
            this.destroyWatchWindow();

            this._watchListWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * ウォッチ: 項目編集の決定
         */
        Scene_Debug.prototype.onWatchEditOk = function () {
            var selectedItem = this._watchListWindow.item();

            switch (this._watchEditWindow.getMode()) {
                case 'target':
                    {
                        // ウォッチ対象を選択
                        this.onWatchSelectSwitchVarStart();
                    }
                    return;

                case 'ok':
                    {
                        var editItem = this._watchEditWindow.item();
                        if (selectedItem instanceof DebugWatchItem) {
                            // 編集 (選択項目を差し替える)
                            $gameTemp.replaceDebugWatchItem(
                                editItem,
                                this._watchListWindow.index()
                            );
                        }
                        else {
                            // 追加
                            $gameTemp.registerDebugWatchItem(editItem);
                        }
                        this._watchListWindow.refresh();
                    }
                    break;

                case 'remove':
                    {
                        // 選択項目を削除
                        //  * 末尾の「追加」コマンドは消せないので、index の修正は不要
                        $gameTemp.removeDebugWatchItem(selectedItem);
                        this._watchListWindow.refresh();
                    }
                    break;

                default:
                    // 何もしない (キャンセル扱い)
                    break;
            }

            this._watchEditWindow.close();
            this._watchListWindow.activate();
        };

        /**
         * ウォッチ: スイッチ・変数選択の開始
         */
        Scene_Debug.prototype.onWatchSelectSwitchVarStart = function () {
            // ハンドラの切り替え
            this._rangeWindow.setHandler('cancel', this.onWatchSelectSwitchVarCancel.bind(this));
            this._editWindow.setHandler('ok', this.onWatchSelectSwitchVarOk.bind(this));

            this.destroyWatchWindow();

            this._watchListWindow.hide();
            this._watchEditWindow.hide();
            this._rangeWindow.show();
            this._editWindow.show();
            this._rangeWindow.activate();
        };

        /**
         * ウォッチ: スイッチ・変数選択の決定
         */
        Scene_Debug.prototype.onWatchSelectSwitchVarOk = function () {
            var item = this._watchEditWindow.item();

            if (this._editWindow.getMode() === 'switch') {
                // スイッチを選択
                item.setupSwitch(this._editWindow.currentId());
            }
            else {
                // 変数を選択
                item.setupVariable(this._editWindow.currentId());
            }

            this._watchEditWindow.refresh();

            // ウィンドウを閉じる処理はキャンセルと一緒
            this.onWatchSelectSwitchVarCancel();
        };

        /**
         * ウォッチ: スイッチ・変数選択のキャンセル処理
         */
        Scene_Debug.prototype.onWatchSelectSwitchVarCancel = function () {
            this.createWatchWindow();

            this._rangeWindow.hide();
            this._editWindow.hide();
            this._watchListWindow.show();
            this._watchEditWindow.show();
            this._watchEditWindow.activate();
        };

        /**
         * ウォッチ: 項目編集のキャンセル
         */
        Scene_Debug.prototype.onWatchEditCancel = function () {
            this._watchEditWindow.close();
            this._watchListWindow.activate();
        };

        /**
         * エンカウントコマンドの実行
         */
        Scene_Debug.prototype.onForceEncounter = function () {
            this.createTroopWindow();

            this._commandWindow.hide();
            this._troopWindow.show();
            this._troopWindow.activate();
            this._titleWindow.setText(TextManager.DebugUtil.encounter);
        };

        /**
         * 敵グループの決定
         */
        Scene_Debug.prototype.onTroopOk = function () {
            var troop = this._troopWindow.item();
            if (!troop) {
                // null の場合は現在のマップからランダム選定
                var troopId = $gamePlayer.makeEncounterTroopId();
                troop = $dataTroops[troopId];
                if (!troop) {
                    // マップに敵がいなければ何もしない
                    this._troopWindow.activate();
                    return;
                }
            }

            // エンカウント実行 (逃走、敗北可)
            BattleManager.setup(troop.id, true, true);
            SceneManager.push(Scene_Battle);
        };

        /**
         * 敵グループ選択のキャンセル処理
         */
        Scene_Debug.prototype.onTroopCancel = function () {
            this._troopWindow.hide();
            this.activateCommandWindow();
        };

        /**
         * 通行可否表示コマンドの実行
         */
        Scene_Debug.prototype.onDispPassage = function () {
            // TODO: 実装
            this._titleWindow.setText(TextManager.DebugUtil.dispPassage);
        };

    })();

}  // <-- if (Utils.isOptionValid('test'))
