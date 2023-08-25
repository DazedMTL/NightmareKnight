//=============================================================================
// Tatsu_HighAndLow.js
// 内容：トランプゲーム「ハイアンドロー」をプレイするためのプラグインです。
// 製作者：タツノコ
// バージョン：Ver1.2.1
//=============================================================================
/*:
 * @plugindesc トランプゲーム「ハイアンドロー」のプラグイン
 * @author タツノコ
 *
 * @param backgroundImage
 * @desc ゲーム背景を設定できます。
 * @type file
 * @dir img
 * 
 * @param coinUse
 * @desc コインを使用するかどうか
 * @on 使用する（true）
 * @off 使用しない（false）
 * @type Boolean
 * @default false
 *
 * @param coinVariable
 * @desc コインを使用する場合、コインの枚数を管理する変数の番号
 * @type variable

 * @param betCoinList
 * @desc コインを使用する場合、コインの使用枚数
 * @type Number[]
 * @default ["1","10","100"]
 * 
 * @param winSe
 * @desc 勝負に勝った時の効果音
 * @type file
 * @dir audio
 * @default se/se_fanfale
 * 
 * @param loseSe
 * @desc 勝負に負けた時の効果音
 * @type file
 * @dir audio
 * @default se/se_lose_fanfale
 * 
 * @param useBGM
 * @desc 専用BGMを使うかどうか
 * @type Boolean
 * @on 使用する（true）
 * @off 使用しない（false）
 * @default false
 * 
 * @param backBGM
 * @desc 専用BGM
 * @type file
 * @dir audio
 * @default bgm/bgm_kajino
 * 
 * @param -> ウィンドウのポジション用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param betCoinSelectPosX
 * @text BetするコインのselectウィンドウのX座標位置
 * @desc BetするコインのselectウィンドウのX座標位置
 * @default 100
 * @parent -> ウィンドウのポジション用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param betCoinSelectPosY
 * @text BetするコインのselectウィンドウのY座標位置
 * @desc BetするコインのselectウィンドウのY座標位置
 * @default 294
 * @parent -> ウィンドウのポジション用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param betCoinSelectWidth
 * @text Betするコインのselectウィンドウの幅
 * @desc Betするコインのselectウィンドウの幅
 * @default 120
 * @parent -> ウィンドウのポジション用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param betCoinSelectHeight
 * @text Betするコインのselectウィンドウの高さ
 * @desc Betするコインのselectウィンドウの高さ
 * @default 150
 * @parent -> ウィンドウのポジション用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> コインの枚数を表示するウィンドウ用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param autoAdjustPositionAndSize
 * @text 自動でポジションおよび、コイン枚数の文字サイズの調整を行うかどうか
 * @desc trueの場合、プラグインパラメータの設定は反映されません。自分で調整する場合は、falseにしてください。
 * @type Boolean
 * @on 自動調整をする（true）
 * @off 自動調整をしない（false）
 * @default true
 * @parent -> コインの枚数を表示するウィンドウ用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param coinWindowX
 * @text コインを表示するウィンドウのX座標の位置
 * @desc コインを表示するウィンドウのX座標の位置
 * @default 620
 * @parent -> コインの枚数を表示するウィンドウ用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param coinWindowY
 * @text コインを表示するウィンドウのY座標の位置
 * @desc コインを表示するウィンドウのY座標の位置
 * @default 0
 * @parent -> コインの枚数を表示するウィンドウ用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param coinWindowWidth
 * @text コインを表示するウィンドウの幅
 * @desc コインを表示するウィンドウの幅
 * @default 210
 * @parent -> コインの枚数を表示するウィンドウ用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param coinWindowHeight
 * @text コインを表示するウィンドウの高さ
 * @desc コインを表示するウィンドウの高さ
 * @default 110
 * @parent -> コインの枚数を表示するウィンドウ用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param coinWindowStringSize
 * @text コインを表示するウィンドウの文字サイズ
 * @desc コインを表示するウィンドウの文字サイズ
 * @default 19
 * @parent -> コインの枚数を表示するウィンドウ用パラメータ <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @help
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * 本プラグインは、ゲーム内にてトランプゲームの「HIGH&LOW」を実装するプラグインです。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 設定方法/PluginManager Setting
 *-----------------------------------------------------------------------------
 * 1.コインをBETする処理にしたい場合は、パラメータ名：「coinUse」をtrueにしてください。
 * 2.パラメータ名：「coinVariable」にコインの枚数を管理する変数番号を入れてください
 * 3.パラメータ名：「coinUse」がfalseの場合、コインがなくても遊べます。
 *-----------------------------------------------------------------------------
 * 変更履歴
 *-----------------------------------------------------------------------------
 * 
 * Ver 1.0.0 初版
 * Ver 1.0.1 プラグイン利用条件の修正/著作権表示の修正
 * Ver 1.0.2 デバッグ用コメントの削除/プラグイン利用条件の修正
 * Ver 1.1.0 解像度が、1024X576、1024X640、816X624に対応するように修正
 *           プラグインパラメータの追加
 * Ver 1.1.1 軽微なバグを修正
 * Ver 1.2.0 軽微なバグを修正
 * Ver 1.2.1 所持コイン数が最低BET未満の場合、進行不能になるバグを修正
 * Ver 1.2.2 5戦まで勝った後ゲームを終了するとコインが二倍に取得できてしまう問題を対応
 *-----------------------------------------------------------------------------
 *-----------------------------------------------------------------------------
 * 素材著作権
 *-----------------------------------------------------------------------------
 * 
 * 【デフォルトで使用している音楽、および効果音】
 * 　->魔王魂樣
 * 【URL】
 * 　->https://maoudamashii.jokersounds.com/
 * 
 *
 * 【背景画像/トランプ画像素材】
 * 　->タツノコ
 * 
 *-----------------------------------------------------------------------------
 * その他利用規約
 *-----------------------------------------------------------------------------
 * その他利用規約については添付の「readme.txt」をご覧ください。
 *
 */
//=============================================================================

(function () {

    var getArgJson = function (arg, defaultValue) {
        try {
            arg = JSON.parse(arg || null);
            if (arg === null) {
                arg = defaultValue;
            }
        } catch (e) {
            alert(`!!!Plugin param is wrong.!!!\nPlugin:${pluginName}.js\nValue:${arg}`);
            arg = defaultValue;
        }
        return arg;
    };

    var HighAndLowP = HighAndLowP || {};
    var parameters = PluginManager.parameters('Tatsu_HighAndLow');
    HighAndLowP.coinUseStr = String(parameters['coinUse'] || "false");
    HighAndLowP.coinVariable = Number(parameters['coinVariable'] || 0);
    HighAndLowP.betCoinList = getArgJson(parameters['betCoinList'] || [1, 10, 100]);
    HighAndLowP.winSe = String(parameters['winSe'] || null);
    HighAndLowP.loseSe = String(parameters['loseSe'] || null);
    HighAndLowP.backgroundImage = String(parameters['backgroundImage'] || null);
    HighAndLowP.useBGMStr = String(parameters['useBGM'] || 'false');
    HighAndLowP.backBGM = String(parameters['backBGM'] || null);
    HighAndLowP.betCoinSelectPosX = Number(parameters['betCoinSelectPosX'] || 100);
    HighAndLowP.betCoinSelectPosY = Number(parameters['betCoinSelectPosY'] || 294);
    HighAndLowP.betCoinSelectHeight = Number(parameters['betCoinSelectHeight'] || 150);
    HighAndLowP.betCoinSelectWidth = Number(parameters['betCoinSelectWidth'] || 150);

    HighAndLowP.autoAdjustPositionAndSizeStr = String(parameters['autoAdjustPositionAndSize'] || 'true');
    HighAndLowP.coinWindowX = Number(parameters['coinWindowX'] || 260);
    HighAndLowP.coinWindowY = Number(parameters['coinWindowY'] || 0);
    HighAndLowP.coinWindowWidth = Number(parameters['coinWindowWidth'] || 210);
    HighAndLowP.coinWindowHeight = Number(parameters['coinWindowHeight'] || 110);
    HighAndLowP.coinWindowStringSize = Number(parameters['coinWindowStringSize'] || 19);

    'use strict';

    function CardInfo() {
        this.initialize.apply(this, arguments);
    };

    CardInfo.prototype.initialize = function (iMark, iNum) {
        this._mark = iMark;
        this._num = iNum;
        this._sprite = new Sprite();
        this._openFlg = false;
    };

    CardInfo.prototype.getMark = function () {
        return this._mark;
    };

    CardInfo.prototype.getNum = function () {
        return this._num;
    };

    CardInfo.prototype.getSprite = function () {
        return this._sprite;
    };

    CardInfo.prototype.setSprite = function (isprite) {
        this._sprite = isprite;
    };

    CardInfo.prototype.getOpenFlg = function () {
        return this._openFlg;
    };

    CardInfo.prototype.setOpenFlg = function (openFlg) {
        this._openFlg = openFlg;
    };

    var pluginName = "HighAndLow";
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === pluginName) {
            switch (args[0]) {
                case 'start':
                    SceneManager.push(Scene_HighAndLowScene);
                    break;
            }
        }
    };

    function Scene_HighAndLowScene() {
        this.initialize.apply(this, arguments);
    };

    Scene_HighAndLowScene.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_HighAndLowScene.prototype.constructor = Scene_HighAndLowScene;

    Scene_HighAndLowScene.prototype.initialize = function () {
        Scene_MenuBase.prototype.initialize.call(this);
        this._resultPushOk = false;
        var coinuse = String(HighAndLowP.coinUseStr) === "true" ? true : false;
        var useBgm = String(HighAndLowP.useBGMStr) === "true" ? true : false;
        var isAutoAdjustCoinWindow = String(HighAndLowP.autoAdjustPositionAndSizeStr) === "true" ? true : false;

        HighAndLowP.coinUse = coinuse;
        HighAndLowP.useBgm = useBgm;
        HighAndLowP.isAutoAdjustCoinWindow = isAutoAdjustCoinWindow;

        this._getCoin = 0;
    };

    Scene_HighAndLowScene.prototype.createBackground = function () {
        this._backgroundSprite = new Sprite();
        var imgHighLowDirStr = "highLow/";
        if (HighAndLowP.backgroundImage && HighAndLowP.backgroundImage != null && HighAndLowP.backgroundImage != "" && HighAndLowP.backgroundImage != "null") {
            this._backgroundSprite.bitmap = ImageManager.loadBitmap('img/highLow/', HighAndLowP.backgroundImage.substr(imgHighLowDirStr.length));
        } else {
            if (Graphics.width == 1024) {
                if (Graphics.height == 576) {
                    this._backgroundSprite.bitmap = ImageManager.loadBitmap('img/highLow/', 'backgournd1024_576');
                } else if (Graphics.height == 640) {
                    this._backgroundSprite.bitmap = ImageManager.loadBitmap('img/highLow/', 'backgournd1024_640');
                } else {
                    this._backgroundSprite.bitmap = ImageManager.loadBitmap('img/highLow/', 'background');
                }
            } else {
                this._backgroundSprite.bitmap = ImageManager.loadBitmap('img/highLow/', 'background');
            }
        }

        this.addChild(this._backgroundSprite);
    };

    Scene_HighAndLowScene.prototype.create = function () {
        Scene_MenuBase.prototype.create.call(this);
        this.cardInitCreate();
        if (HighAndLowP.coinUse) {
            this._step = 'BetStep';
            this._resultBetCoinWindow = new Window_BetCoin_Window();
            this.addWindow(this._resultBetCoinWindow);
            this._resultBetCoinWindow.deactivate();
            this._resultBetCoinWindow.setMyDispCoin($gameVariables.value(HighAndLowP.coinVariable));
        } else {
            this._step = 'setup';
        }
    };

    Scene_HighAndLowScene.prototype.cardInitCreate = function () {
        var cardMarks = new Array();
        var cardtmpList = new Array();
        cardMarks.push("s");
        cardMarks.push("h");
        cardMarks.push("c");
        cardMarks.push("d");
        var i = 0;
        var j = 0;
        for (i = 0; i < cardMarks.length; i++) {
            var tmpMark = cardMarks[i];
            for (j = 1; j <= 13; j++) {
                var tmp = new CardInfo(tmpMark, j);
                cardtmpList.push(tmp);
            }
        }
        this._allCardList = cardtmpList;
    };

    Scene_HighAndLowScene.prototype.createResultImage = function () {
        if (this._resultImgWindow == undefined) {
            this._resultImgWindow = new Window_result_ImageWindow();
            this.addWindow(this._resultImgWindow);
            this._resultImgWindow.deactivate();
        }
    };

    Scene_HighAndLowScene.prototype.pushOK = function () {
        if (this._myHandWindow.index() > -1) {
            this._myHandWindow.selectCard();
            this._step = 'deal';
            this._myHandWindow.select(-1);
        }
    };

    Scene_HighAndLowScene.prototype.start = function () {
        Scene_MenuBase.prototype.start.call(this);
        if (HighAndLowP.coinUse) {
            if (isNaN(HighAndLowP.coinVariable)) {
                alert("パラメータ：「coinVariable」の設定が正しくありません。変数番号を設定してください。");
                this.popScene();
            } else {
                if (HighAndLowP.coinVariable < 1) {
                    alert("パラメータ：「coinVariable」の設定が正しくありません。変数番号を設定してください。");
                    this.popScene();
                }
            }

            if (!HighAndLowP.betCoinList) {
                alert("パラメータ：「betCoinList」の設定が正しくありません。正しく枚数のリストを設定してください。");
                this.popScene();
            } else {
                if (HighAndLowP.betCoinList.length < 1) {
                    alert("パラメータ：「betCoinList」の設定が正しくありません。正しく枚数のリストを設定してください。");
                    this.popScene();
                }
            }
        }

        if (HighAndLowP.useBgm) {
            $gameSystem.saveBgm();
            AudioManager.fadeOutBgm(1);
            var bgm = HighAndLowP.backBGM;
            var tmpFolder = "bgm/";

            if (bgm != "" && bgm != null) {
                AudioManager.playBgm({ "name": bgm.substr(tmpFolder.length), "volume": 80, "pitch": 100, "pan": 0 });
            } else {
                AudioManager.playBgm({ "name": "bgm_kajino", "volume": 80, "pitch": 100, "pan": 0 });
            }
        }
    };

    Scene_HighAndLowScene.prototype.update = function () {
        Scene_MenuBase.prototype.update.call(this);
        this.mainGame();
    };

    Scene_HighAndLowScene.prototype.mainGame = function () {
        switch (this._step) {
            case 'BetStep':
                this.betStep();
                break;
            case 'setup':
                this.HandOutCardStep();
                break;
            case 'enemySelect':
                this.enemyTurn();
                break;
            case 'mySelect':
                this.myTurn();
                break;
            case 'deal':
                this.deal();
                break;
            case 'result':
                this.result();
                break;
            case 'resultMove':
                this.resultMove();
                break;
            case 'resultAfter':
                this.resultAfter();
                break;
            case 'next':
                this.nextBattle();
                break;
            case 'retry':
                this.retry();
                break;
            case 'end':
                if (this._myHandWindow.getCardIndos().length == 0) {
                    if (!this._battleResult) {
                        this.exitGame();
                    } else {
                        // 最後に勝った場合は、先にメッセージを表示しているため、そのまま終了する。
                        //this.coinPlus();
                        if (HighAndLowP.useBgm) {
                            AudioManager.fadeOutBgm(1);
                            $gameSystem.replayBgm();
                        }
                        this.popScene();
                    }
                } else {
                    this.exitGame();
                }

                break;
            default:
                break;
        }
    };

    Scene_HighAndLowScene.prototype.betStep = function () {

        var minNum = 0;
        minNum = HighAndLowP.betCoinList[0];
        for (var jj = 0; jj < HighAndLowP.betCoinList.length; jj++) {
            if ((minNum) > Number(HighAndLowP.betCoinList[jj])) {
                minNum = Number(HighAndLowP.betCoinList[jj]);
            }
        }

        // 最小bet数のコインよりも少ない場合
        var targeNowCoin = $gameVariables.value(HighAndLowP.coinVariable);
        var isCoinZero = (targeNowCoin < 1);
        var isCoinUnder = (targeNowCoin < minNum);
        if (isCoinZero || isCoinUnder) {
            if (this._WindowExitMsg == undefined) {
                this._WindowExitMsg = new Window_Message();
                if (isCoinZero) {
                    this._WindowExitMsg.drawText("コインが足りません。", 0, 0, Graphics.width, 300);
                } else {
                    this._WindowExitMsg.drawText("コインの所持数が、最低BET未満です。", 0, 0, Graphics.width, 300);
                }

                this.addWindow(this._WindowExitMsg);
            }

            if (this._WindowExitMsg.isClosed()) {
                this._WindowExitMsg.open();
            }

            this._WindowExitMsg.activate();

            if (this._WindowExitMsg.isOpen()) {
                if (Input.isRepeated('ok') || TouchInput.isTriggered() || Input.isTriggered('ok')) {
                    if (HighAndLowP.useBgm) {
                        AudioManager.fadeOutBgm(1);
                        $gameSystem.replayBgm();
                    }
                    this.popScene();
                }
            }
            return;
        }

        if (this._InsufficientCoinsMsgWindow != undefined) {
            if (this._InsufficientCoinsMsgWindow.isOpen()) {
                return;
            }
        }

        if (this._handWindow != undefined && this._handWindow.isOpen()) {
            this._handWindow.close();
        }

        if (this._myHandWindow != undefined && this._myHandWindow.isOpen()) {
            this._myHandWindow.close();
        }

        if (this._betMsgWindow == undefined) {
            this._betMsgWindow = new Window_Message();
            this.addWindow(this._betMsgWindow);
            this._betMsgWindow.drawText("コインを何枚BETしますか？", 0, 0, Graphics.width, 300);
        }

        if (this._betSelectWindow == undefined) {
            this._betSelectWindow = new Window_Bet_Select();
            this._betSelectWindow.setHandler('ok', this.betOK.bind(this));
            this.addWindow(this._betSelectWindow);
            this._betSelectWindow.activate();
        }

        if (this._betMsgWindow.isClosed()) {
            this._betMsgWindow.open();
        }

        if (this._betSelectWindow.isClosed()) {
            this._betSelectWindow.open();
        }
        this._betSelectWindow.activate();
    };

    Scene_HighAndLowScene.prototype.betOK = function () {
        var idx = this._betSelectWindow.index();
        var coin = HighAndLowP.betCoinList[idx];
        var nowCoin = $gameVariables.value(HighAndLowP.coinVariable);

        if (this._betMsgWindow.isOpen()) {
            this._betMsgWindow.close();
        }

        if (this._betSelectWindow.isOpen()) {
            this._betSelectWindow.deactivate();
            this._betSelectWindow.close();
        }

        if (nowCoin < coin) {
            if (this._InsufficientCoinsMsgWindow == undefined) {
                this._InsufficientCoinsMsgWindow = new Window_Message();
                this.addWindow(this._InsufficientCoinsMsgWindow);
                this._InsufficientCoinsMsgWindow.drawText("コインが足りません", 0, 0, Graphics.width, 300);
            }

            if (this._InsufficientCoinsMsgWindow.isClosed()) {
                this._InsufficientCoinsMsgWindow.open();
                this._InsufficientCoinsMsgWindow.activate();
                this._InsufficientCoinsMsgWindow.startPause();
            }
        } else {
            this._betCoin = coin;
            var tmpCoin = nowCoin - coin;
            this._getCoin = 0;
            $gameVariables.setValue(HighAndLowP.coinVariable, tmpCoin);
            this._resultBetCoinWindow.setDispCoin(this._getCoin);
            this._resultBetCoinWindow.setMyDispCoin($gameVariables.value(HighAndLowP.coinVariable));
            this._step = 'setup';
        }
    };

    Scene_HighAndLowScene.prototype.HandOutCardStep = function () {
        if (this._handWindow != undefined && this._handWindow.isClosed()) {
            this._handWindow.open();
        }
        if (this._myHandWindow != undefined && this._myHandWindow.isClosed()) {
            this._myHandWindow.open();
        }
        this.HandOutCard();

        this._handWindow.cardDraw();
        this._myHandWindow.cardDraw();
        this.createResultImage();
        this._step = 'enemySelect';
    };

    Scene_HighAndLowScene.prototype.HandOutCard = function () {
        this._enemyCardInfo = new Array();
        this._myCardInfo = new Array();
        var record = new Array();
        var ii = 0;
        for (i = 0; i < 10; i++) {
            var tmp = i % 2;
            var draw = Math.floor(Math.random() * 52);
            while (record.indexOf(draw) >= 0) {
                draw = Math.floor(Math.random() * 52);
            }
            var tmpCard = this._allCardList[draw];
            var tmpNum = ('00' + tmpCard.getNum()).slice(-2);
            var tmpSprite = new Sprite();
            tmpSprite.bitmap = ImageManager.loadBitmap('img/tPoker/', tmpCard.getMark() + tmpNum, 0, false);
            tmpSprite.x = 19 + (ii * (80 + 12));
            tmpSprite.y = 17;
            tmpSprite.scale.x = 0.4;
            tmpSprite.scale.y = 0.4;
            if (tmp == 0) {
                tmpSprite.setFrame(0, 320 * 6, 200, 320);
            } else {
                tmpSprite.y = tmpSprite.y + 180;
                tmpSprite.setFrame(0, 0, 200, 320);
                tmpCard.setOpenFlg(false);
            }

            tmpCard.setSprite(tmpSprite);

            if (tmp == 0) {
                this._myCardInfo.push(tmpCard);
            } else {
                this._enemyCardInfo.push(tmpCard);
                ii++;
            }
            record.push(draw);
        }

        if (this._handWindow == undefined) {
            this._handWindow = new Window_handCard(false, this._enemyCardInfo);
            this.addWindow(this._handWindow);
        } else {
            this._handWindow.setCardIndos(this._enemyCardInfo);
        }

        if (HighAndLowP.coinUse) {
            if (HighAndLowP.isAutoAdjustCoinWindow) {
                this._resultBetCoinWindow.x = this._handWindow.x + this._handWindow.width;
            }
        }

        if (this._myHandWindow == undefined) {
            this._myHandWindow = new Window_handCard(true, this._myCardInfo);
            this._myHandWindow.setHandler('ok', this.pushOK.bind(this));
            this._myHandWindow.activate();
            this.addWindow(this._myHandWindow);
            this._myHandWindow.opacity = 0;
        } else {
            this._myHandWindow.setCardIndos(this._myCardInfo);
            this._myHandWindow.activate();
        }
    };

    Scene_HighAndLowScene.prototype.myTurn = function () {
        this._handWindow.deactivate();
        this._myHandWindow.activate();
    };

    Scene_HighAndLowScene.prototype.enemyTurn = function () {
        this._myHandWindow.deactivate();
        this._handWindow.deactivate();

        var tmpCardInfos = this._handWindow.getCardIndos();

        var tmpHigrightIndex = Math.floor(Math.random() * tmpCardInfos.length);
        this._handWindow.select(tmpHigrightIndex);
        this._handWindow.selectCard();
        this._step = 'mySelect';
        this._handWindow.select(-1);
        this._handWindow.deactivate();
    };

    Scene_HighAndLowScene.prototype.deal = function () {

        if (!this._resultPushOk) {
            if (this._selectWindow == undefined) {
                this._myHandWindow.deactivate();
                this._handWindow.deactivate();

                this._selectWindow = new Window_HighAndLow_Select(100, 300, 120, 150);
                this._selectWindow.setHandler('ok', this.dealPushOK.bind(this));
                this._selectWindow.activate();
                this.addWindow(this._selectWindow);
            } else {
                if (this._selectWindow.isClosed()) {
                    this._selectWindow.select(0);
                    this._selectWindow.open();
                    this._selectWindow.activate();
                }
            }
        }

        if (this._resultPushOk) {
            this._resultPushOk = false;
            this._handWindow._omote = 'omote';
        }

        if (this._handWindow.getbattleCard().getOpenFlg()) {
            this._selectWindow.deactivate();
            this._selectWindow.close();
            this._step = 'result';
        }
    };

    Scene_HighAndLowScene.prototype.dealPushOK = function () {
        this._selectedIndex = this._selectWindow.index();
        if (this._selectedIndex > -1) {
            this._resultPushOk = true;
        }
    };

    Scene_HighAndLowScene.prototype.result = function () {
        var myBattleCard = this._myHandWindow.getbattleCard();
        var enemyBattlCard = this._handWindow.getbattleCard();
        var myNumber = myBattleCard.getNum();
        var enemyNumber = enemyBattlCard.getNum();
        var battleResult = false;
        if (this._selectedIndex == 0) {
            battleResult = (enemyNumber < myNumber);
        } else if (this._selectedIndex == 1) {
            battleResult = (enemyNumber == myNumber);
        } else if (this._selectedIndex == 2) {
            battleResult = (enemyNumber > myNumber);
        }

        this._resultImgWindow.setWinFlg(battleResult);
        this._resultImgWindow.setImgMoveFlg(true);
        this._battleResult = battleResult;
        this._step = 'resultMove';
    };

    Scene_HighAndLowScene.prototype.resultMove = function () {
        if (this._resultImgWindow.getMoveEndFlg()) {
            this._step = 'resultAfter';
            this._resultImgWindow.setMoveEndFlg(false);


            if (HighAndLowP.coinUse) {
                if (this._battleResult) {
                    var tmpBetCoin = this._betCoin;
                    this._betCoin = tmpBetCoin * 2;
                    this._getCoin = this._betCoin;
                } else {
                    this._betCoin = 0;
                    this._getCoin = 0;
                }
                this._resultBetCoinWindow.setDispCoin(this._getCoin);
            }
        }
    };

    Scene_HighAndLowScene.prototype.resultAfter = function () {
        if (this._myHandWindow.getCardIndos().length > 0) {
            var myIndex = this._myHandWindow.index();
            var enemyIndex = this._handWindow.index();
            var myBattleCard = this._myHandWindow.getbattleCard();
            var enemyBattleCard = this._handWindow.getbattleCard();
            var mySprite = myBattleCard.getSprite();
            var enemySprite = enemyBattleCard.getSprite();
            mySprite.x = mySprite.x + (140 + (this._myHandWindow.getUsedCards().length * 70));
            mySprite.opacity = 255;
            mySprite.scale.x = 0.3;
            mySprite.scale.y = 0.3;
            enemySprite.x = enemySprite.x + (140 + (this._handWindow.getUsedCards().length * 70));
            enemySprite.opacity = 255;
            enemySprite.scale.x = 0.3;
            enemySprite.scale.y = 0.3;
            this._myHandWindow.setUsedCards(myBattleCard);
            this._handWindow.setUsedCards(enemyBattleCard);
            this._myHandWindow.clearItem(myIndex);
            this._handWindow.clearItem(enemyIndex);
            this._myHandWindow._battleCard = null;
            this._handWindow._battleCard = null;
            var myCardInfo = this._myHandWindow.getCardIndos();
            for (var j = 0; j < myCardInfo.length; j++) {
                var cardSprite = myCardInfo[j].getSprite();
                cardSprite.x = 19 + (j * (80 + 12));
            }

            var enemyCardInfo = this._handWindow.getCardIndos();
            for (var i = 0; i < enemyCardInfo.length; i++) {
                var enemyCardSprite = enemyCardInfo[i].getSprite();
                enemyCardSprite.x = 19 + (i * (80 + 12));
            }

            this._step = 'next';
            this._myHandWindow.refresh();
            this._handWindow.refresh();
        } else {
            this.viewGetCoinMsg();
            if (this._WindowLastExitMsg.isOpen()) {
                if (Input.isRepeated('ok') || TouchInput.isTriggered() || Input.isTriggered('ok')) {
                    this.coinPlus();
                    this._WindowLastExitMsg.close();
                    this._step = 'next';
                }
            }
        }
    };

    Scene_HighAndLowScene.prototype.coinPlus = function () {
        if (HighAndLowP.coinUse) {
            var tmpCoin = $gameVariables.value(HighAndLowP.coinVariable);
            $gameVariables.setValue(HighAndLowP.coinVariable, Number(this._getCoin) + Number(tmpCoin));
        }
    };

    Scene_HighAndLowScene.prototype.nextBattle = function () {
        if (this._confirmWinMsgWindow == undefined) {
            this._confirmWinMsgWindow = new Window_Message();
            this.addWindow(this._confirmWinMsgWindow);
        }

        if (this._confirmLoseMsgWindow == undefined) {
            this._confirmLoseMsgWindow = new Window_Message();
            this.addWindow(this._confirmLoseMsgWindow);
            this._confirmLoseMsgWindow.drawText("初めから再挑戦しますか？", 0, 0, Graphics.width, 300);
        }

        if (this._battleResult) {
            this._confirmWinMsgWindow.contents.clear();
            if (this._myHandWindow.getCardIndos().length > 0) {
                this._confirmWinMsgWindow.drawText("続けて挑戦しますか？", 0, 0, Graphics.width, 300);
            } else {
                this._confirmWinMsgWindow.drawText("もう一度プレイしますか？", 0, 0, Graphics.width, 300);
            }

            if (this._confirmWinMsgWindow.isClosed()) {
                this._confirmWinMsgWindow.open();
            }

        } else {
            if (this._confirmLoseMsgWindow.isClosed()) {
                this._confirmLoseMsgWindow.open();
            }
        }

        if (this._confirmMsgSelectWindow == undefined) {
            this._confirmMsgSelectWindow = new Window_continue_Select();
            this._confirmMsgSelectWindow.setHandler('ok', this.confirmNext.bind(this));
            this.addWindow(this._confirmMsgSelectWindow);
            this._confirmMsgSelectWindow.refresh();
            this._confirmMsgSelectWindow.activate();
            this._confirmMsgSelectWindow.open();
            this._myHandWindow.deactivate();
        } else {
            if (this._confirmMsgSelectWindow.isClosed()) {
                this._confirmMsgSelectWindow.open();
                this._confirmMsgSelectWindow.activate();
                this._myHandWindow.deactivate();
            }
        }

        if (this._nextFlag) {
            switch (this._endJudge) {
                case 'continue':
                    if (this._battleResult) {
                        if (this._myHandWindow.getCardIndos().length > 0) {
                            this._step = 'enemySelect';
                        } else {
                            this.resetGame();
                            if (HighAndLowP.coinUse) {
                                this._step = 'BetStep';
                            } else {
                                this._step = 'setup';
                            }
                        }

                        this._nextFlag = false;
                    } else {
                        this.resetGame();
                        if (HighAndLowP.coinUse) {
                            this._step = 'BetStep';
                        } else {
                            this._step = 'setup';
                        }
                        this._nextFlag = false;
                    }
                    this._handWindow._omote = 'init';
                    this._endJudge = 'init';
                    break;
                case 'end':
                    this._step = 'end';
                    break;
            };
        }
    };

    Scene_HighAndLowScene.prototype.resetGame = function () {
        this._handWindow.clearInfo();
        this._myHandWindow.clearInfo();
    };

    Scene_HighAndLowScene.prototype.confirmNext = function () {
        this._nextFlag = true;
        var idx = this._confirmMsgSelectWindow.index();
        this._confirmMsgSelectWindow.close();

        if (this._battleResult) {
            this._confirmWinMsgWindow.close();
            this._confirmWinMsgWindow.deactivate();
        } else {
            this._confirmLoseMsgWindow.close();
            this._confirmLoseMsgWindow.deactivate();
        }

        this._confirmMsgSelectWindow.deactivate();
        switch (idx) {
            case 0:
                this._endJudge = 'continue';
                break;
            case 1:
                this._endJudge = 'end';
                break;
        };
    };

    Scene_HighAndLowScene.prototype.viewGetCoinMsg = function () {
        if (this._WindowLastExitMsg == undefined) {
            this._WindowLastExitMsg = new Window_Message();
            this.addWindow(this._WindowLastExitMsg);
        }

        if (this._WindowLastExitMsg.isClosed()) {
            this._WindowLastExitMsg.contents.clear();
            this._WindowLastExitMsg.drawText("勝負終了です。", 0, 0, Graphics.width, 300);
            if (HighAndLowP.coinUse) {
                this._WindowLastExitMsg.drawText("獲得枚数は" + this._getCoin + "枚です。", 0, 40, Graphics.width, 300);
            }
            this._WindowLastExitMsg.open();
        }

        this._WindowLastExitMsg.activate();
    };

    Scene_HighAndLowScene.prototype.exitGame = function () {
        this.viewGetCoinMsg();
        if (this._WindowLastExitMsg.isOpen()) {
            if (Input.isRepeated('ok') || TouchInput.isTriggered() || Input.isTriggered('ok')) {
                if (HighAndLowP.useBgm) {
                    AudioManager.fadeOutBgm(1);
                    $gameSystem.replayBgm();
                }
                this.coinPlus();

                this.popScene();
            }
        }
    };

    //==========================================================
    // シーン設定はここまで
    //==========================================================

    //==========================================================
    // 手札用のWindow
    //==========================================================    
    function Window_handCard() {
        this.initialize.apply(this, arguments);
    };

    Window_handCard.prototype = Object.create(Window_Selectable.prototype);
    Window_handCard.prototype.constructor = Window_handCard;

    Window_handCard.prototype.initialize = function (isPlayer, cardInfos) {
        this._isPlayer = isPlayer;
        this._cardInfos = cardInfos;
        var graphicsWidthHalf = Graphics.width / 2 - 235;
        var xPos = graphicsWidthHalf;
        var thisWidth = 470;
        var thisHeight = 180;
        var yPos = 0;
        if (Graphics.width != 1024) {
            xPos = xPos - 50;
        }

        if (isPlayer) {
            yPos = Graphics.height - (thisHeight - 15);
        } else {
            yPos = -180;
        }
        Window_Selectable.prototype.initialize.call(this, xPos, yPos, thisWidth, thisHeight);
        this.opacity = 0;
        this._delay = 0;
        this._omote = 'init';
        this._usedCardInfo = new Array();
        this._battleCard = null;
        this._useIndex = -1;
        this.refresh();
        this._baseY = 0;
        this._baseX = 200;
        if (isPlayer) {
            this._baseY = -125;
        } else {
            this._baseY = 165 + (yPos * -1);
            for (i = 0; i < this._cardInfos.length; i++) {
                this._cardInfos[i].getSprite().y = (yPos * -1) + 20;
            }
        }
    };

    Window_handCard.prototype.getCardIndos = function () {
        return this._cardInfos;
    };

    Window_handCard.prototype.setCardIndos = function (cardInfos) {
        return this._cardInfos = cardInfos;
    };

    Window_handCard.prototype.getUsedCards = function () {
        return this._usedCardInfo;
    };

    Window_handCard.prototype.setUsedCards = function (iusedCard) {
        this._usedCardInfo.push(iusedCard);
    };

    Window_handCard.prototype.getbattleCard = function () {
        return this._battleCard;
    };


    Window_handCard.prototype.maxItems = function () {
        if (this.getCardIndos() != undefined && this.getCardIndos().length > 0) {
            return this.getCardIndos().length;
        } else {
            return 5;
        }
    };

    Window_handCard.prototype.maxCols = function () {
        return 5;
    };

    Window_handCard.prototype.cardDraw = function () {
        if (this._cardInfos) {
            var i = 0;
            for (i = 0; i < this._cardInfos.length; i++) {
                this.addChild(this._cardInfos[i].getSprite());
            }
        }

    };

    Window_handCard.prototype.itemWidth = function () {
        return 80;
    };

    Window_handCard.prototype.itemHeight = function () {
        return 120;
    };

    Window_handCard.prototype.update = function () {
        Window_Selectable.prototype.update.call(this);

        if (this._isPlayer) {
            for (var i = 0; i < this._cardInfos.length; i++) {
                if (this.index() == i) {
                    this._cardInfos[i].getSprite().opacity = 255;
                } else {
                    this._cardInfos[i].getSprite().opacity = 100;
                }
            }
        } else {
            for (var i = 0; i < this._cardInfos.length; i++) {
                this._cardInfos[i].getSprite().opacity = 255;
            }
        }


        switch (this._omote) {
            case 'omote':
                this.openCard();
                break;
            default:
                break;
        }
    };

    Window_handCard.prototype.selectCard = function () {
        var tmpIndex = this.index();
        if (tmpIndex != -1) {
            var tmpCardInfo = this._cardInfos[tmpIndex];
            var tmpSprite = tmpCardInfo.getSprite();
            tmpSprite.y = this._baseY;
            tmpSprite.x = this._baseX;
            if (!this._isPlayer) {
                tmpSprite.opacity = 255;
            }

            this._battleCard = tmpCardInfo;
            this._useIndex = tmpIndex;
            this._cardInfos.splice(tmpIndex, 1);
        }
    };

    Window_handCard.prototype.openCard = function () {
        if (this._battleCard && this._battleCard.getOpenFlg() == false) {
            var tmpSprite = this._battleCard.getSprite();
            this._delay++;
            if (this._delay > 3) {
                this._delay = 0;
                var maxH = tmpSprite.bitmap.height;
                var frameY = tmpSprite._frame.y + 320;
                if (maxH <= tmpSprite._frame.y) {
                    tmpSprite.setFrame(0, 320 * 6, 200, 320);
                    this._battleCard.setOpenFlg(true);
                    this._omote = 'end';
                    return;
                } else if (frameY == (320 * 7)) {
                    tmpSprite.setFrame(0, 320 * 6, 200, 320);
                    this._battleCard.setOpenFlg(true);
                    this._omote = 'end';
                    return;
                }
                tmpSprite.setFrame(0, frameY, 200, 320);
            }
        }
    };
    Window_handCard.prototype.clearInfo = function () {
        this._useIndex = -1;
        if (this._battleCard != undefined && this._battleCard != null) {
            var battleTmpSprite = this._battleCard.getSprite();
            this.removeChild(battleTmpSprite);
        }
        this._battleCard = undefined;

        if (this._cardInfos != undefined && this._cardInfos.length > 0) {
            for (var i = 0; i < this._cardInfos.length; i++) {
                var tmpSp = this._cardInfos[i].getSprite();
                this.removeChild(tmpSp);
            }
        }

        this._cardInfos = undefined;
        this._cardInfos = new Array();

        if (this._usedCardInfo != undefined && this._usedCardInfo.length > 0) {
            for (var j = 0; j < this._usedCardInfo.length; j++) {
                var usedTmpSp = this._usedCardInfo[j].getSprite();
                this.removeChild(usedTmpSp);
            }
        }
        this._usedCardInfo = undefined;
        this._usedCardInfo = new Array();
        this._omote = 'init';
    };

    // ===========================================
    // プレイヤーが選択する「上中下」の選択肢を表示させるウィンドウ
    // ===========================================
    function Window_HighAndLow_Select() {
        this.initialize.apply(this, arguments);
    };

    Window_HighAndLow_Select.prototype = Object.create(Window_Selectable.prototype);
    Window_HighAndLow_Select.prototype.constructor = Window_HighAndLow_Select;

    Window_HighAndLow_Select.prototype.initialize = function (wx, wy, ww, wh) {
        Window_Selectable.prototype.initialize.call(this, wx, wy, ww, wh);
        this._data = new Array();
        this._data.push('大きい');
        this._data.push('同じ');
        this._data.push('小さい');
        this.select(0);
        this.refresh();
    };

    Window_HighAndLow_Select.prototype.maxCols = function () {
        return 1;
    };

    Window_HighAndLow_Select.prototype.maxItems = function () {
        return 3;
    };

    Window_HighAndLow_Select.prototype.drawItem = function (index) {
        if (this._data) {
            var item = this._data[index];
            var rect = this.itemRect(index);
            this.drawText(item, rect.x, rect.y, this.width);
        }
    };


    //==================================================
    // 勝利画像を表示するためのWindow基本は画面外に配置する
    //==================================================
    function Window_result_ImageWindow() {
        this.initialize.apply(this, arguments);
    };

    Window_result_ImageWindow.prototype = Object.create(Window_Base.prototype);
    Window_result_ImageWindow.prototype.constructor = Window_result_ImageWindow;


    Window_result_ImageWindow.prototype.setWinFlg = function (res) {
        this._winFlg = res;
    };

    Window_result_ImageWindow.prototype.getWinFlg = function () {
        return this._winFlg;
    };

    Window_result_ImageWindow.prototype.setImgMoveFlg = function (mvFlg) {
        this._mvFlg = mvFlg;
    };

    Window_result_ImageWindow.prototype.setMoveEndFlg = function (mvEndlg) {
        this._mvEndFlg = mvEndlg;
    };

    Window_result_ImageWindow.prototype.getMoveEndFlg = function () {
        return this._mvEndFlg;
    };

    Window_result_ImageWindow.prototype.initialize = function () {
        Window_Base.prototype.initialize.call(this, Graphics.width, 200, 100, 100);
        this.setupImg();
        this.opacity = 0;
        this.setInit();
    };

    Window_result_ImageWindow.prototype.setInit = function () {
        this._mvFlg = false;
        this._mvEndFlg = false;
        this._imgMvStep = 'mvInit';
    };

    Window_result_ImageWindow.prototype.setupImg = function () {
        if (!this._winSprite) {
            var winSprite = new Sprite();
            winSprite.bitmap = ImageManager.loadBitmap('img/highLow/', "win");
            winSprite.scale.x = 0.4;
            winSprite.scale.y = 0.4;
            winSprite.x = 0;
            winSprite.y = 0;
            this.addChild(winSprite);
            this._winSprite = winSprite;
        }

        if (!this._loseSprite) {
            var loseSprite = new Sprite();
            loseSprite.bitmap = ImageManager.loadBitmap('img/highLow/', "lose");
            loseSprite.scale.x = 0.4;
            loseSprite.scale.y = 0.4;
            loseSprite.x = 0;
            loseSprite.y = 0;
            this.addChild(loseSprite);
            this._loseSprite = loseSprite;
        }

        this._hafWidth = ((Graphics.width * -1) + (Graphics.width / 2)) - 100;
    };


    Window_result_ImageWindow.prototype.update = function () {
        Window_Base.prototype.update.call(this);
        if (this._mvFlg) {
            switch (this._imgMvStep) {
                case 'mvInit':
                    this.mvInit();
                    break;
                case 'mvStart':
                    this.mvStart();
                    break;
                case 'mvAfter':
                    this.mvAfter();
                    break;
                default:
                    break;
            };
        }
    };

    Window_result_ImageWindow.prototype.mvInit = function () {
        var resultSe = "";
        if (this._winFlg) {
            var tmpSe = HighAndLowP.winSe;
            this._mvSprite = this._winSprite;
        } else {
            var tmpSe = HighAndLowP.loseSe;
            this._mvSprite = this._loseSprite;
        }

        AudioManager.playSe({ "name": tmpSe.substr(3), "volume": 100, "pitch": 100, "pan": 0 });


        this._mvDelay = 0;
        this._mvStop = 0;
        this._tmpMvStop = 0;
        this._mvStopFlg = false;
        this._restartFlg = false;
        this._imgMvStep = 'mvStart';

        this.activate();
    };

    Window_result_ImageWindow.prototype.mvStart = function () {
        this._mvDelay++;
        if (!this._mvStopFlg) {
            if (this._mvDelay > 1) {
                this._mvDelay = 0;
                if (this._mvSprite.x >= this._hafWidth || this._restartFlg) {
                    this._mvSprite.x -= 45;
                } else {
                    this._mvStopFlg = true;
                }

                if (this._mvSprite.x <= -1006) {
                    this._mvSprite.x = 0;
                    this._imgMvStep = 'mvAfter';
                }
            }
        } else {
            this._mvStop++;
            if (this._mvStop > 5) {
                this._mvStop = 0;
                this._tmpMvStop++;
            }
            if (this._tmpMvStop > 10) {
                this._restartFlg = true;
                this._mvStopFlg = false;
            }
        }
    };

    Window_result_ImageWindow.prototype.mvAfter = function () {
        this._mvFlg = false;
        this._mvEndFlg = true;
        this._imgMvStep = 'mvInit';
    };


    // ===========================================
    // プレイヤーが選択する「続行/やめる」の選択肢を表示させるウィンドウ
    // ===========================================
    function Window_continue_Select() {
        this.initialize.apply(this, arguments);
    };

    Window_continue_Select.prototype = Object.create(Window_Selectable.prototype);
    Window_continue_Select.prototype.constructor = Window_continue_Select;

    Window_continue_Select.prototype.initialize = function () {
        var windowHeight = 120;
        Window_Selectable.prototype.initialize.call(this, HighAndLowP.betCoinSelectPosX, HighAndLowP.betCoinSelectPosY, 150, windowHeight);
        this._data = new Array();
        this._data.push('はい');
        this._data.push('いいえ');
        this.select(0);
        this.refresh();
    };

    Window_continue_Select.prototype.maxCols = function () {
        return 1;
    };

    Window_continue_Select.prototype.maxItems = function () {
        return 2;
    };

    Window_continue_Select.prototype.drawItem = function (index) {
        if (this._data) {
            var item = this._data[index];
            var rect = this.itemRect(index);
            this.drawText(item, rect.x, rect.y, this.width);
        }
    };

    // ===========================================
    // プレイヤーが選択するコインの枚数リスト
    // ===========================================
    function Window_Bet_Select() {
        this.initialize.apply(this, arguments);
    };

    Window_Bet_Select.prototype = Object.create(Window_Selectable.prototype);
    Window_Bet_Select.prototype.constructor = Window_Bet_Select;

    Window_Bet_Select.prototype.initialize = function () {
        var width = HighAndLowP.betCoinSelectWidth;
        var height = HighAndLowP.betCoinSelectHeight;
        var yPos = HighAndLowP.betCoinSelectPosY;
        var xPos = HighAndLowP.betCoinSelectPosX;
        Window_Selectable.prototype.initialize.call(this, xPos, yPos, width, height);
        this._data = new Array();
        for (var i = 0; i < HighAndLowP.betCoinList.length; i++) {
            this._data.push(HighAndLowP.betCoinList[i]);
        }

        this.select(0);
        this.refresh();
    };

    Window_Bet_Select.prototype.maxItems = function () {
        return HighAndLowP.betCoinList.length;
    };

    Window_Bet_Select.prototype.maxCols = function () {
        return 1;
    };

    Window_Bet_Select.prototype.drawItem = function (index) {
        if (this._data) {
            var item = this._data[index];
            var rect = this.itemRect(index);
            this.drawText(item, rect.x, rect.y, this.width);
        }
    };

    // ===========================================
    // 現在の獲得枚数を表示するウィンドウ
    // ===========================================
    function Window_BetCoin_Window() {
        this.initialize.apply(this, arguments);
    };

    Window_BetCoin_Window.prototype = Object.create(Window_Base.prototype);
    Window_BetCoin_Window.prototype.constructor = Window_BetCoin_Window;

    Window_BetCoin_Window.prototype.initialize = function () {
        if (HighAndLowP.isAutoAdjustCoinWindow) {
            Window_Base.prototype.initialize.call(this, 620, 0, 210, 110);
        } else {
            Window_Base.prototype.initialize.call(this, HighAndLowP.coinWindowX, HighAndLowP.coinWindowY, HighAndLowP.coinWindowWidth, HighAndLowP.coinWindowHeight);
        }

        this._dispCoin = 0;
        this._dispMyCoin = 0;
        this.opacity = 0;
    };

    Window_BetCoin_Window.prototype.update = function () {
        Window_Base.prototype.update.call(this);
    };

    Window_BetCoin_Window.prototype.refreshCoin = function (coin) {
        this.contents.clear();
        this.dispCoinTxt();
    };

    Window_BetCoin_Window.prototype.setDispCoin = function (coin) {
        this._dispCoin = coin;
        this.refreshCoin();
    };

    Window_BetCoin_Window.prototype.setMyDispCoin = function (myCoin) {
        this._dispMyCoin = myCoin;
        this.refreshCoin();
    };

    Window_BetCoin_Window.prototype.dispCoinTxt = function () {
        this.contents.fontSize = this.standardFontSize();
        this.drawText('獲得枚数:' + this._dispCoin + '枚', 0, 10, this.width, this.height);
        this.drawText('所持メダル:' + this._dispMyCoin + '枚', 0, 40, this.width, this.height);
    };

    Window_BetCoin_Window.prototype.standardFontSize = function () {
        if (HighAndLowP.isAutoAdjustCoinWindow) {
            return 19;
        } else {
            return HighAndLowP.coinWindowStringSize;
        }
    };
})();