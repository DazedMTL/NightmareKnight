/*
DependStateEscape.js

2016/11/10 version 1.0

  利用規約
  ・MITライセンス
  ・商用・非商用問わず使えます。
 ・改変公開可能
*/

/*:ja
 * @plugindesc パーティの誰かが特定ステート時にバトル中の逃げるコマンドを封印
 * @author さうと
 *
 * 
 * @param stateNo
 * @desc 逃走不可状態にするステートのデータ番号
 * @default 0
 *
 * @help ステート番号を指定
 */

(function () {
	var parameters = PluginManager.parameters('DependStateEscape');

	//rpg_manager.js
	BattleManager.canEscape = function () {
		var ret = this._canEscape;
		for (i = 0; i < $dataActors.length; i++) {
			if ($gameActors.actor(i) == null)
				continue;

			//パラは文字列なのでint変換する
			if ($gameActors.actor(i).isStateAffected(parseInt(parameters['stateNo']))) {
				ret = false;
			}
		}
		return ret;
	};

})();