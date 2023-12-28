//=============================================================================
// 多重アニメーションカットプラグイン2
//=============================================================================
//Copyright (c) 2016 Trb
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
//twitter https://twitter.com/Trb_surasura
/*:
 * @plugindesc 連続攻撃した時にアニメーションを多重再生しないようにします。
 * @author Trb
 * 
 * @help 連続攻撃した時にアニメーションを多重再生しないようにするプラグインです。
 * 設定は特に必要ありません。

 */
(function () {
  Sprite_Battler.prototype.setupAnimation = function () {
    var beforeData = 0; //1つ前のアニメーションIDを記録する変数
    while (this._battler.isAnimationRequested()) {
      var data = this._battler.shiftAnimation();
      if (data.animationId != beforeData) {
        //アニメーションIDが1つ前のものと違っていたらセットする
        var animation = $dataAnimations[data.animationId];
        var mirror = data.mirror;
        var delay = animation.position === 3 ? 0 : data.delay;
        this.startAnimation(animation, mirror, delay); //アニメーションをセットするメソッド
        beforeData = data.animationId; //今セットしたアニメーションのIDを代入
        for (var i = 0; i < this._animationSprites.length; i++) {
          var sprite = this._animationSprites[i];
          sprite.visible = this._battler.isSpriteVisible();
        }
      }
    }
  };
})();
