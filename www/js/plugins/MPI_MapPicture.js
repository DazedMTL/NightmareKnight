//===========================================================================
// MPI_MapPicture.js
//===========================================================================

/*:
 * @plugindesc マップ座標基準でピクチャを表示します。
 * @author 奏ねこま（おとぶき ねこま）
 *
 * @param 重なり判定-A
 * @desc 重なり判定-Aを有効にする場合は true を、無効にする場合は false を指定してください。
 * @default true
 * 
 * @param 重なり判定-B
 * @desc 重なり判定-Bを有効にする場合は true を、無効にする場合は false を指定してください。
 * @default true
 * 
 * @param 重なり判定-C
 * @desc 重なり判定-Cを有効にする場合は true を、無効にする場合は false を指定してください。
 * @default true
 * 
 * @param 判定周期
 * @desc 重なり判定を何フレーム毎に行うかを指定してください。
 * @default 4
 * 
 * @param 不透明度
 * @desc プレイヤーと重なったときの不透明度を指定してください。[0-255]
 * @default 64
 *
 * @param 変化量
 * @desc 半透明になる際の不透明度の変化量を指定してください。値が大きいほど早く半透明になります。
 * @default 16
 *
 * @help
 * [ 概要 ] ...
 *  ピクチャを画面座標ではなくマップ座標基準で表示します。
 *
 * [ 使い方 ] ...
 *  イベントコマンド「ピクチャの表示...」を実行する直前に、プラグインコマンドを
 *  実行してください。
 *
 * [ プラグインコマンド ] ...
 *  MAP_PICTURE_S
 *   「ピクチャの表示」で指定した座標をマップ座標として表示します。
 *
 *  MAP_PICTURE_SM
 *   「ピクチャの表示」で指定した座標をマップ座標として表示します。
 *   また、プレイヤーがピクチャに重なった場合、ピクチャを半透明にします。
 *
 *  MAP_PICTURE_E
 *   「ピクチャの表示」を実行したイベントの座標にピクチャを表示します。
 *   「ピクチャの表示」で指定した座標は無視されます。
 *
 *  MAP_PICTURE_EM
 *   「ピクチャの表示」を実行したイベントの座標にピクチャを表示します。
 *   「ピクチャの表示」で指定した座標は無視されます。
 *   また、プレイヤーがピクチャに重なった場合、ピクチャを半透明にします。
 *
 * [ 重なり判定 ] ...
 *  重なり判定ｰA：プレイヤー画像の四隅の座標を判定します。
 *  重なり判定ｰB：プレイヤー画像の上下左右の座標を判定します。
 *  重なり判定ｰC：プレイヤー画像の中心の座標を判定します。
 *
 *   ■重なり判定ｰA  ■重なり判定-B  ■重なり判定-C
 *   ●○○○○○●  ○○○●○○○  ○○○○○○○
 *   ○○○○○○○  ○○○○○○○  ○○○○○○○
 *   ○○○○○○○  ●○○○○○●  ○○○●○○○
 *   ○○○○○○○  ○○○○○○○  ○○○○○○○
 *   ●○○○○○●  ○○○●○○○  ○○○○○○○
 * 
 * [ 利用規約 ] ................................................................
 *  ・本プラグインの利用は、RPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
 *  ・商用、非商用、有償、無償、一般向け、成人向けを問わず、利用可能です。
 *  ・利用の際、連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *  ・プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *  ・不具合対応以外のサポートやリクエストは、基本的に受け付けておりません。
 *  ・本プラグインにより生じたいかなる問題についても、一切の責任を負いかねます。
 * [ 改訂履歴 ] ................................................................
 *   Version 1.03  2019/02/26  $gameScreen.showPictureを直接実行した場合でも
 *                             プラグインの効果が適用されるように修正しました。
 *   Version 1.02  2018/10/17  ゲームデータ更新後にセーブデータをロードすると
 *                             セーブ時に表示していたピクチャが消える問題を修正。
 *   Version 1.01  2017/01/29  マップの編集内容次第では、データロード時にエラー
 *                             になる可能性がある問題を修正。
 *                             マップ座標基準で表示しているピクチャは、マップ移
 *                             動時に消去するように仕様を変更。
 *   Version 1.00  2017/01/20  First edition.
 * -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
 *  Web Site: http://makonet.sakura.ne.jp/rpg_tkool/
 *  Twitter : https://twitter.com/koma_neko
 *  Copylight (c) 2018 Nekoma Otobuki
 */

var Imported = Imported || {};
Imported.MPI_MapPicture = true;

var Makonet = Makonet || {};
Makonet.MPP = {};

(function () {
    'use strict';

    var MPD = Makonet.MPP;
    MPD.product = 'MPI_MapPicture';
    MPD.parameters = PluginManager.parameters(MPD.product);

    MPD.check1 = MPD.parameters['重なり判定-A'].trim().toLowerCase() === 'true';
    MPD.check2 = MPD.parameters['重なり判定-B'].trim().toLowerCase() === 'true';
    MPD.check3 = MPD.parameters['重なり判定-C'].trim().toLowerCase() === 'true';
    MPD.cycle = +MPD.parameters['判定周期'];
    MPD.opacity = +MPD.parameters['不透明度'];
    MPD.step = +MPD.parameters['変化量'];

    var _ = MPD.product;

    //==============================================================================
    // Game_System
    //==============================================================================

    Object.defineProperty(Game_System.prototype, _, {
        get: function () { return this[`$${_}`] = this[`$${_}`] || { coordinate_type: '', modesty: false, event_id: 0 }; },
        set: function (value) { this[`$${_}`] = value; },
        configurable: true
    });

    //==============================================================================
    // Game_Picture
    //==============================================================================

    Object.defineProperty(Game_Picture.prototype, _, {
        get: function () { return this[`$${_}`] = this[`$${_}`] || { coordinate_type: '', modesty: false, event_id: 0 }; },
        set: function (value) { this[`$${_}`] = value; },
        configurable: true
    });

    //==============================================================================
    // Game_Map
    //==============================================================================

    (function (o, p) {
        var f = o[p]; o[p] = function (mapId) {
            if (mapId !== this.mapId()) {
                $gameScreen._pictures.forEach(function (picture, index) {
                    if (picture && picture[_].coordinate_type !== '') {
                        $gameScreen._pictures[index] = null;
                    }
                });
            }
            f.apply(this, arguments);
        };
    }(Game_Map.prototype, 'setup'));

    //==============================================================================
    // Game_Screen
    //==============================================================================

    {
        let __showPicture = Game_Screen.prototype.showPicture;
        Game_Screen.prototype.showPicture = function (pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode) {
            __showPicture.apply(this, arguments);
            var picture = this.picture(pictureId);
            picture[_].coordinate_type = $gameSystem[_].coordinate_type;
            picture[_].modesty = $gameSystem[_].modesty;
            picture[_].event_id = $gameSystem[_].event_id;
            $gameSystem[_] = { coordinate_type: '', modesty: false, event_id: 0 };
        };
    }

    //==============================================================================
    // Game_Interpreter
    //==============================================================================

    (function (o, p) {
        var f = o[p]; o[p] = function (command, args) {
            f.apply(this, arguments);
            switch (command.toUpperCase()) {
                case 'MAP_PICTURE_SM':
                    $gameSystem[_].modesty = true;
                case 'MAP_PICTURE_S':
                    $gameSystem[_].coordinate_type = 'standard';
                    $gameSystem[_].event_id = this._eventId;
                    break;
                case 'MAP_PICTURE_EM':
                    $gameSystem[_].modesty = true;
                case 'MAP_PICTURE_E':
                    $gameSystem[_].coordinate_type = 'event';
                    $gameSystem[_].event_id = this._eventId;
                    break;
            }
        };
    }(Game_Interpreter.prototype, 'pluginCommand'));

    //==============================================================================
    // Sprite_Picture
    //==============================================================================

    (function (o, p) {
        var f = o[p]; o[p] = function () {
            f.apply(this, arguments);
            var picture = this.picture();
            if (picture[_].coordinate_type) {
                switch (picture[_].coordinate_type) {
                    case 'standard':
                        this.x = Math.floor((picture.x() - $gameMap._displayX) * $gameMap.tileWidth());
                        this.y = Math.floor((picture.y() - $gameMap._displayY) * $gameMap.tileHeight());
                        break;
                    case 'event':
                        var event = $gameMap.event(picture[_].event_id);
                        if (event && event.event()) {
                            this.x = Math.floor((event._realX - $gameMap._displayX) * $gameMap.tileWidth());
                            this.y = Math.floor((event._realY - $gameMap._displayY) * $gameMap.tileHeight());
                        } else {
                            picture[_] = { coordinate_type: '', modesty: false, event_id: 0 };
                        }
                        break;
                }
            }
        };
    }(Sprite_Picture.prototype, 'updatePosition'));

    //==============================================================================
    // Game_Player
    //==============================================================================

    Object.defineProperty(Game_Player.prototype, _, {
        get: function () { return this[`$${_}`] = this[`$${_}`] || { left: 0, top: 0, right: 0, bottom: 0 }; },
        set: function (value) { this[`$${_}`] = value; },
        configurable: true
    });

    //==============================================================================
    // Sprite_Character
    //==============================================================================

    (function (o, p) {
        var f = o[p]; o[p] = function () {
            f.apply(this, arguments);
            if (this._character === $gamePlayer) {
                var gp = $gamePlayer[_];
                gp.left = parseInt(this.x - this.anchor.x * this.patternWidth());
                gp.top = parseInt(this.y - this.anchor.y * this.patternHeight());
                gp.right = gp.left + this.patternWidth();
                gp.bottom = gp.top + this.patternHeight();
            }
        };
    }(Sprite_Character.prototype, 'updateCharacterFrame'));

    //==============================================================================
    // Sprite_Picture
    //==============================================================================

    Object.defineProperty(Sprite_Picture.prototype, _, {
        get: function () { return this[`$${_}`] = this[`$${_}`] || { opacity: 255, overlap: false }; },
        set: function (value) { this[`$${_}`] = value; },
        configurable: true
    });

    (function (o, p) {
        var f = o[p]; o[p] = function () {
            f.apply(this, arguments);
            var this_ = this[_];
            if (this.picture()[_].modesty && !!this.bitmap) {
                if (Graphics.frameCount % MPD.cycle === 0) {
                    var pl = parseInt(this.x - this.anchor.x * this._realFrame.width);
                    var pt = parseInt(this.y - this.anchor.y * this._realFrame.height);
                    var pr = pl + this._realFrame.width;
                    var pb = pt + this._realFrame.height;
                    var gp = $gamePlayer[_];
                    var bl = (gp.left === gp.left.clamp(pl, pr));
                    var bt = (gp.top === gp.top.clamp(pt, pb));
                    var br = (gp.right === gp.right.clamp(pl, pr));
                    var bb = (gp.bottom === gp.bottom.clamp(pt, pb));
                    this_.overlap = false;
                    if ((bl && bt) || (bl && bb) || (br && bt) || (br && bb)) {
                        var cl = gp.left - pl;
                        var ct = gp.top - pt;
                        var cr = gp.right - pl;
                        var cb = gp.bottom - pt;
                        var cx = parseInt((cl + cr) / 2);
                        var cy = parseInt((ct + cb) / 2);
                        if ((MPD.check1 && ((this.bitmap.getAlphaPixel(cl, ct) > 0) ||
                            (this.bitmap.getAlphaPixel(cl, cb) > 0) ||
                            (this.bitmap.getAlphaPixel(cr, ct) > 0) ||
                            (this.bitmap.getAlphaPixel(cr, cb) > 0))) ||
                            (MPD.check2 && ((this.bitmap.getAlphaPixel(cx, ct) > 0) ||
                                (this.bitmap.getAlphaPixel(cx, cb) > 0) ||
                                (this.bitmap.getAlphaPixel(cl, cy) > 0) ||
                                (this.bitmap.getAlphaPixel(cr, cy) > 0))) ||
                            (MPD.check3 && (this.bitmap.getAlphaPixel(cx, cy) > 0))) {
                            this_.overlap = true;
                        }
                    }
                }
                this_.opacity += (MPD.step * (this_.overlap ? -1 : 1));
                this_.opacity = this_.opacity.clamp(MPD.opacity, this.picture().opacity());
                this.opacity = this_.opacity;
            }
        };
    }(Sprite_Picture.prototype, 'updateOther'));
}());
