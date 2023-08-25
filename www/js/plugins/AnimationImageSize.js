//=============================================================================
// AnimationImageSize.js
//=============================================================================
// Copyright (c) 2018 Thirop
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//============================================================================= 
// Version
// 1.0.0 2018/05/17 初版

//=============================================================================
/*:
 * @plugindesc アニメーションの画像サイズ変更
 * @author Thirop
 * @help
 * ファイル名の末尾に「_x96」のように
 * １パターンあたりの画像サイズ(pixel)を指定することで、
 * 1パターン192pixel以外のサイズのアニメーション画像を使うことができます。
 * ゲームの容量を抑える、ブラウザ版の通信を高速化、
 * 画像キャッシュの節約といった効果があります。
 * エディタ上では表示が乱れるので、
 * 通常サイズの画像と縮小サイズの画像を用意して編集し、
 * 最後に画像を入れ替えることをおすすめします。
 *
 * 例)Absorb.pngのアニメーション画像を50%(1パターン96pixel)縮小して使う。
 *
 * 1.Absorb.pngを50%縮小したファイルにAbsorb_x96.pngというファイル名をつけて
 * img/animationsフォルダに保存。
 * 2.エディタ上ではAbsorb.pngを使ってアニメーションを編集
 * 3.最後にアニメーション画像をAbsorb_x96.pngに変更。
 */
//============================================================================= 

(function () {
    var _Sprite_Animation_initMembers = Sprite_Animation.prototype.initMembers;
    Sprite_Animation.prototype.initMembers = function () {
        _Sprite_Animation_initMembers.call(this);

        this._frameSize1 = 192;
        this._frameSize2 = 192;
    };


    var _Sprite_Animation_loadBitmaps = Sprite_Animation.prototype.loadBitmaps;
    Sprite_Animation.prototype.loadBitmaps = function () {
        _Sprite_Animation_loadBitmaps.call(this);
        var name1 = this._animation.animation1Name;
        var name2 = this._animation.animation2Name;
        var frameSize = 192;
        if (name1) {
            var matchSize = name1.match(/_x([0-9]+)/);
            if (matchSize) {
                frameSize = Number(matchSize[1]);
            }
        }
        this._frameSize1 = frameSize;
        frameSize = 192;
        if (name2) {
            var matchSize = name2.match(/_x([0-9]+)/);

            if (matchSize) {
                frameSize = Number(matchSize[1]);
            }
        }
        this._frameSize2 = frameSize;
    };


    var _Sprite_Animation_updateCellSprite = Sprite_Animation.prototype.updateCellSprite;
    Sprite_Animation.prototype.updateCellSprite = function (sprite, cell) {
        _Sprite_Animation_updateCellSprite.call(this, sprite, cell);
        var pattern = cell[0];
        if (pattern >= 0) {
            var useBitmap1 = pattern < 100;
            var frameSize = useBitmap1 ? this._frameSize1 : this._frameSize2;
            var scaleAdjustRate = 192 / frameSize;
            var sx = pattern % 5 * frameSize;
            var sy = Math.floor(pattern % 100 / 5) * frameSize;
            sprite.setFrame(sx, sy, frameSize, frameSize);
        }
    };

})();
