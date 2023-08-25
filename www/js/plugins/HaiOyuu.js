//=============================================================================
// HaiOyuu.js
//=============================================================================

/*:ja
 * @plugindesc ver1.00 スキル見てから回避余裕でした。
 * @author まっつＵＰ
 *
 * @param skip
 * @desc この値が0以下の時はそのバトラーの追加能力値も0以下の時
 * このプラグインによって得られる効果を受けません。
 * @default 0
 * 
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * アイテムまたはスキルのノートタグ
 * <HO追加反撃: x>
 * <HO追加反射: x>
 * <HO追加命中: x>
 * <HO追加回避: x>
 * <HO追加魔法回避: x>
 * xには数値を入れてください。x%の加算で評価します。
 * 
 * 例:<HO追加魔法回避: 20> 通常の魔法回避に、+20%の確率で魔法回避します。
 * 
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function () {

    var parameters = PluginManager.parameters('HaiOyuu');
    var HOskip = Number(parameters['skip'] || 0);

    var _Game_Action_itemCnt = Game_Action.prototype.itemCnt;
    Game_Action.prototype.itemCnt = function (target) {
        var rate = _Game_Action_itemCnt.call(this, target);
        if (!this.isPhysical() || !target.canMove()) return rate;
        var text = 'HO追加反撃';
        return this.HOscore(rate, text);
    };

    var _Game_Action_itemMrf = Game_Action.prototype.itemMrf;
    Game_Action.prototype.itemMrf = function (target) {
        var rate = _Game_Action_itemMrf.call(this, target);
        if (!this.isMagical()) return rate;
        var text = 'HO追加反射';
        return this.HOscore(rate, text);
    };

    var _Game_Action_itemHit = Game_Action.prototype.itemHit;
    Game_Action.prototype.itemHit = function (target) {
        var rate = _Game_Action_itemHit.call(this, target);
        var text = 'HO追加命中';
        return this.HOscore(rate, text);
    };

    var _Game_Action_itemEva = Game_Action.prototype.itemEva;
    Game_Action.prototype.itemEva = function (target) {
        var rate = _Game_Action_itemEva.call(this, target);
        if (this.isPhysical()) {
            var text = 'HO追加回避';
        } else if (this.isMagical()) {
            var text = 'HO追加魔法回避';
        } else {
            return rate;
        }
        return this.HOscore(rate, text);
    };

    Game_Action.prototype.HOscore = function (rate, text) {
        if (this.isHOskip(rate)) return rate;
        var value = Number(this.item().meta[text] || 0) / 100;
        value += rate;
        return value;
    };

    Game_Action.prototype.isHOskip = function (rate) {
        return HOskip <= 0 && rate <= 0;
    };

})();
