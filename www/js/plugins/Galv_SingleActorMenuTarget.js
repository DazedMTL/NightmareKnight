//-----------------------------------------------------------------------------
//  Galv's Single Actor Menu Target
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  Galv_SingleActorMenuTarget.js
//-----------------------------------------------------------------------------
//  2016-12-28 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_SingleActorMenuTarget = true;

var Galv = Galv || {};                  // Galv's main object
Galv.SAMT = Galv.SAMT || {};            // Galv's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.0) Remove target selection when using an item/skill on an actor with only 1 actor in party.
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Battle
 * @desc true or false to activate this plugin in battles or not.
 * @default true
 *
 * @param Menus
 * @desc true or false to activate this plugin in other menus
 * @default true
 *
 *
 * @help
 *   Galv's 
 * ----------------------------------------------------------------------------
 * This plugin changes menus (skill, item, main menu) to skip the actor select
 * step when there is only one actor in the party.
 *
 * This was a quick one designed for the default menus. Any custom menu plugins
 * you have may not be compatible with this.
 * ----------------------------------------------------------------------------
 */

/*:ja
 * @plugindesc (v.1.0) パーティが1人の時、アイテム/スキル使用時のアクター選択を省略します。
 *
 * @author Galv - galvs-scripts.com
 *
 * @param Battle
 * @text 戦闘
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc 戦闘でこのプラグインを有効化
 * 有効:true / 無効:false
 * @default true
 *
 * @param Menus
 * @text メニュー
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc 他のメニューでこのプラグインを有効化
 * 有効:true / 無効:false
 * @default true
 *
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン:
 * https://galvs-scripts.com/2016/12/28/galvs-single-actor-menu-target/
 *
 *   Galv's Single Actor Menu Target
 * ---------------------------------------------------------------------------
 * このプラグインはメニュー(スキル、アイテム、メインメニュー)を変更して、
 * パーティにアクターが1人しかいない時、
 * アクターの選択ステップを省略します。
 * ※2人以上になると自動的に、省略しなくなります。
 *
 * デフォルトのメニュー用に設計された簡単なものです。
 * お持ちのカスタムメニュープラグインは、これと互換性がない場合があります。
 *
 * ---------------------------------------------------------------------------
 */


//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function () {

	Galv.SAMT.battle = PluginManager.parameters('Galv_SingleActorMenuTarget')["Battle"].toLowerCase() == 'true' ? true : false;
	Galv.SAMT.menus = PluginManager.parameters('Galv_SingleActorMenuTarget')["Menus"].toLowerCase() == 'true' ? true : false;

	Galv.SAMT.oneMember = function () {
		return $gameParty.battleMembers().length == 1;
	};


	if (Galv.SAMT.menus) {
		Galv.SAMT.Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
		Scene_Menu.prototype.commandPersonal = function () {
			if (Galv.SAMT.oneMember()) {
				this.onPersonalOk();
			} else {
				Galv.SAMT.Scene_Menu_commandPersonal.call(this);
			}
		};

		Galv.SAMT.Scene_ItemBase_showSubWindow = Scene_ItemBase.prototype.showSubWindow;
		Scene_ItemBase.prototype.showSubWindow = function (window) {
			//if (Galv.SAMT.oneMember()) return;
			Galv.SAMT.Scene_ItemBase_showSubWindow.call(this, window);
		};

		Galv.SAMT.Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
		Scene_Item.prototype.onItemOk = function () {
			Galv.SAMT.Scene_Item_onItemOk.call(this);
			//if (Galv.SAMT.oneMember()) {
			//	this.onActorOk();
			//	this.onActorCancel();
			//}
		};

		Galv.SAMT.Scene_Skill_onItemOk = Scene_Skill.prototype.onItemOk;
		Scene_Skill.prototype.onItemOk = function () {
			Galv.SAMT.Scene_Skill_onItemOk.call(this);
			if (Galv.SAMT.oneMember()) {
				this.onActorOk();
				this.onActorCancel();
			}
		};
	}

	if (Galv.SAMT.battle) {
		Galv.SAMT.Scene_Battle_selectActorSelection = Scene_Battle.prototype.selectActorSelection;
		Scene_Battle.prototype.selectActorSelection = function () {
			Galv.SAMT.Scene_Battle_selectActorSelection.call(this);
			if (Galv.SAMT.oneMember()) {
				this._actorWindow.processOk();
			}
		};
	}

})();
