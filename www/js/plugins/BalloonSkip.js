// BalloonSkip.js
//
// (c) 2018 KIRIHARA Miyahito
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
// Version
// 1.0.0 2018/6/28 公開
//
// https://ci-en.jp/creator/1734

/*:
 * @plugindesc フキダシアイコン表示中、okキー/ctrlキー押下でそれを終了
 * @author 桐原巳弥人
 *
 * @help フキダシアイコンを表示している間、okキーあるいはctrlキーが押されたら
 * （押されていたら）それを終了します。
 * okキーが既に押しっぱなしだった場合は、フキダシアイコンが一瞬だけ見えます。
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * 利用規約：
 *  MITライセンスです。
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *
 */
(function () {
  "use strict";

  var pluginName = "BalloonSkip";

  var _update = Sprite_Balloon.prototype.update;
  Sprite_Balloon.prototype.update = function () {
    if (Input.isTriggered("ok") || Input.isPressed("control")) {
      this._duration = 0;
    }
    if (Input.isPressed("ok")) {
      this._duration -= 5;
    }
    _update.apply(this);
  };
})();
