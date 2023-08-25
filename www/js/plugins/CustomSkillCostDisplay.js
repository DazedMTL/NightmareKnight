//=============================================================================
// Plugin for RPG Maker MV(1.6.0 or later) and MZ
// CustomSkillCostDisplay.js
//=============================================================================
// [Update History]
// 2021/Sep/16 Ver1.0.0 First Release
// 2021/Sep/17 Ver1.0.1 Available also under RMMV

/*:
 * @target MV MZ
 * @plugindesc [Ver1.0.1]Enables to change MP cost description
 * @author Sasuke KANNAZUKI
 *
 * @orderAfter HPConsumeSkill
 *
 * @help This plugin does not provide plugin commands.
 * This plugin runs under RPG Maker MV(Ver1.6.0 or later) and MZ.
 *
 * This plugin changes display consume MP/TP/HP.
 * (To make HP consume skill, you need HPConsumeSkill.js)
 *
 * [Summary]
 * On current system, MP/TP consume display is not enough.
 * This plugin make display both consume MP and TP.
 *
 * And you can set any string as a skill consume display.
 *
 * [How to display customized string at consume position]
 * Describe skill's note as following:
 *
 * <SkillCostText:anyString>
 *
 * at anyString is drawn normal color at default,
 * but you can use following escape sequence.
 * \CNC[0]  Changes normal color
 * \CNC[1]  Changes system color
 * \CCS[1] Changes consume MP color
 * \CCS[2] Changes consume TP color
 * \CCS[3] Changes consume HP color (default:17)
 * Ex.
 * <SkillCostText:\CNC[1]ALL\CCS[2]TP>  // ALL TP
 * <SkillCostText:\CCS[1]Random MP>  // Random MP
 * 
 * You can also include each cost in the text.
 * %1=Consume MP, %2=Consume TP and %3=Consume HP.
 * Ex.
 * <SkillCostText:Let\CCS[1]%1>
 *
 * Furthermore, you can use escape sequence like \C[], \I[] and so on.
 *
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @target MV MZ
 *
 * @orderAfter HPConsumeSkill
 *
 * @plugindesc [Ver1.0.1]MP/TP消費欄の文字列をカスタマイズします
 * @author 神無月サスケ
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * このプラグインは、RPGツクールMV(Ver1.6.0以降)およびMZに対応しています。
 * このプラグインは、MP/TP消費欄の文字列をカスタム可能にします。
 *
 * ■概要
 * 従来のシステムでは、TPとMP両方消費するスキルでは、消費TPしか表示されません。
 * このプラグインは、消費HP/TP/MPを全て表示するように変更します。
 * (消費HP設定には、HPConsumeSkill.js が必要です)
 *
 * また、特定のスキルの消費欄を任意の文字列にすることが可能です。
 *
 * ■消費欄に任意の文字列を表示する方法
 * メモに以下の形式で記述します：
 * <SkillCostText:表示文字列>
 * デフォルトでは、この文字列は通常色(白)で描画されますが、
 * 以下のエスケープ文字を使うことで、変更可能です。
 *
 * \CNC[0]=通常色 \CNC[1]=システム色
 * \CCS[1]=消費MP色 \CCS[2]=消費TP色 \CCS[3]=消費HP色(デフォルト値:17)
 * 例：
 * <SkillCostText:\CNC[1]全\CCS[2]TP> //全TP
 * <SkillCostText:\CCS[1]ランダムMP> // ランダムMP
 *
 * また、本来の消費MP/TP/HPも以下の文字列で変更可能です。
 * %1=消費MP %2=消費TP %3=消費HP
 * 例：
 * <SkillCostText:なんと\CCS[1]%1>
 *
 * 加えて、\C[]や\I[]など従来のウィンドウで指定可能なエスケープ文字も有効です。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(() => {

  //
  // check HPConsueSkill.js is included or not.
  //
  const hasHpSkill = !!DataManager.processHpCost;

  const hpCostColor = () => {
    if (hasHpSkill) {
      const hpParam = PluginManager.parameters('HPConsumeSkill');
      const color = +hpParam['Consume HP Color'];
      return color && color >= 0 ? color : 17;
    } else {
      return 17;
    }
  };

  //
  // Process when it consumes plural elements.
  //
  const needsPluralKindCosts = skill => {
    let kind = 0;
    if (skill.mpCost) { kind++; }
    if (skill.tpCost) { kind++; }
    if (hasHpSkill && skill.hpCost) { kind++; }
    return kind >= 2;
  };

  const pluralCostText = (skill, actor) => {
    let text = "";
    if (skill.mpCost) {
      const mpCost = actor ? actor.skillMpCost(skill) : skill.mpCost;
      text = "\\CCS[1]" + mpCost + text;
    }
    if (skill.tpCost) {
      const tpCost = actor ? actor.skillTpCost(skill) : skill.tpCost;
      if (text) { text = " " + text; }
      text = "\\CCS[2]" + tpCost + text;
    }
    if (hasHpSkill && skill.hpCost) {
      if (text) { text = " " + text; }
      text = "\\CCS[3]" + String(skill.hpCost) + text;
    }
    return text;
  };

  if (!Window_SkillList.prototype.textSizeEx) { // MV
    Window_SkillList.prototype.textSizeEx = function (text) {
      return { width: this.drawTextEx(text, 0, -1000) };
    };
  }

  Window_SkillList.prototype.pluralCostWidth = function (text) {
    return this.textSizeEx(text).width;
  };

  //
  // process note string
  //
  const displayText = skill => {
    const originalText = skill.meta.SkillCostText;
    return "\\CNC[0]" + originalText.format(skill.mpCost, skill.hpCost,
      skill.hpCost || 0
    );
  };

  Window_SkillList.prototype.noteCostWidth = function (skill) {
    const text = displayText(skill);
    return this.textSizeEx(text).width;
  };

  //
  // process original escape code
  //
  const _Window_SkillList_processEscapeCharacter =
    Window_SkillList.prototype.processEscapeCharacter;
  Window_SkillList.prototype.processEscapeCharacter = function (code,
    textState) {
    const c = 'ColorManager' in window ? ColorManager : this;
    switch (code) {
      case 'CNC':
        switch (this.obtainEscapeParam(textState)) {
          case 0:
            this.changeTextColor(c.normalColor());
            break;
          case 1:
            this.changeTextColor(c.systemColor());
            break;
        }
        break;
      case 'CCS':
        switch (this.obtainEscapeParam(textState)) {
          case 1:
            this.changeTextColor(c.mpCostColor());
            break;
          case 2:
            this.changeTextColor(c.tpCostColor());
            break;
          case 3:
            this.changeTextColor(c.textColor(hpCostColor()));
            break;
        }
        break;
    }
    _Window_SkillList_processEscapeCharacter.call(this, code, textState);
  };

  //
  // display routine
  //
  if (!Window_SkillList.prototype.itemAt) { // MV
    Window_SkillList.prototype.itemAt = function (index) {
      return this._data && index >= 0 ? this._data[index] : null;
    };
  }

  const _Window_SkillList_drawItem = Window_SkillList.prototype.drawItem;
  Window_SkillList.prototype.drawItem = function (index) {
    $gameTemp.skillForCost = this.itemAt(index);
    _Window_SkillList_drawItem.call(this, index);
  };

  const _Window_SkillList_costWidth = Window_SkillList.prototype.costWidth;
  Window_SkillList.prototype.costWidth = function () {
    const skill = $gameTemp.skillForCost;
    if (skill.meta.SkillCostText) {
      return this.noteCostWidth(skill);
    }
    if (needsPluralKindCosts(skill)) {
      return this.pluralCostWidth(pluralCostText(skill, this._actor));
    }
    return _Window_SkillList_costWidth.call(this);
  };

  const _Window_SkillList_drawSkillCost =
    Window_SkillList.prototype.drawSkillCost;
  Window_SkillList.prototype.drawSkillCost = function (skill, x, y, width) {
    if (skill.meta.SkillCostText) {
      const x2 = x + width - this.noteCostWidth(skill);
      this.drawTextEx(displayText(skill), x2, y, width);
      return;
    }
    if (needsPluralKindCosts(skill)) {
      const x2 = x + width - this.costWidth();
      const text = pluralCostText(skill);
      this.drawTextEx(text, x2, y, width);
      return;
    }
    _Window_SkillList_drawSkillCost.call(this, skill, x, y, width);
  };

})();
