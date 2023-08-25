//=============================================================================
// tpfulldaro.js
//=============================================================================

/*:ja
 * @plugindesc ver1.20 使用効果に対する制限の拡張
 * @author まっつＵＰ
 * 
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * target.tp < target.maxTp()がfalseの時は
 * それ以外に有効な使用効果等なければ消費されなくなります。
 * 
 * 成長の使用効果に対しての判定を追加します。
 * その能力値の最大値の約半分を能力値増減の合計の下限・上限とします。
 * また、実際の増減の際、その能力値の合計値を下限・上限に修正します。
 * （このプラグイン導入前の既存のセーブデータでは正常に動作しない場合があります。
 *  その場合お手数ですがニューゲームやイベントテストからお試しください。）
 * 
 * コモンイベントの他に別の使用効果が置かれており
 * いずれかが有効でなければそのアイテム（スキル）は使用できなくなります。
 * 使用効果がコモンイベントのみの場合は使用できます。
 * 
 * なお、これらの使用条件の適用は他の使用効果の条件と同じく
 * 戦闘中では影響されません。
 * 
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 * ver1.20 記述の整理、主に競合対策
 *        「成長」の使用条件を追加
 * 
 */

(function () {

    //var parameters = PluginManager.parameters('tpfulldaro');

    var _Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
    Game_Action.prototype.testItemEffect = function (target, effect) {
        switch (effect.code) {

            case Game_Action.EFFECT_GAIN_TP:
                return target.tp < target.maxTp();

            case Game_Action.EFFECT_GROW:
                return target.testItemenableaddParam(effect.dataId, effect.value1);

            case Game_Action.EFFECT_COMMON_EVENT:
                return this.item().effects.length === 1;

            default:
                return _Game_Action_testItemEffect.call(this, target, effect);

        }
    };

    //addparam関係はやや冗長な書き方をしているが、これは保守性を意識しているため。
    var _Game_BattlerBase_addParam = Game_BattlerBase.prototype.addParam;
    Game_BattlerBase.prototype.addParam = function (paramId, value) {
        if (!this.testItemenableaddParam(paramId, value)) return;
        _Game_BattlerBase_addParam.call(this, paramId, value);
        this.addParamclamp(paramId);
    };

    Game_BattlerBase.prototype.addParamLimit = function (paramId, sign) {
        var maxValue = (this.paramMax(paramId) + 1) / 2;
        return sign * Math.floor(maxValue);
    };

    //小規模な機能なためrefreshではなくaddparamの方にフックする。
    Game_BattlerBase.prototype.addParamclamp = function (paramId) {
        var max = this.addParamLimit(paramId, 1);
        var min = this.addParamLimit(paramId, -1);
        this._paramPlus[paramId] = this._paramPlus[paramId].clamp(min, max);
        this.refresh();
    };

    Game_BattlerBase.prototype.testItemenableaddParam = function (paramId, grow) {
        grow = Math.floor(grow);
        var sign = Math.sign(grow);
        if (sign === 0) return false;
        var limit = this.addParamLimit(paramId, sign);
        if (sign === 1) {
            return limit > this._paramPlus[paramId];
        } else {
            return limit < this._paramPlus[paramId];
        }
    };

})();
