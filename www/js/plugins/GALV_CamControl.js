//-----------------------------------------------------------------------------
//  Galv's Cam Control
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_CamControl.js
//  With some fixes by Anisoft
//-----------------------------------------------------------------------------
//  2016-05-02 - Version 2.0 - compatibilty with zooming and offset fixes
//                           - by Anisoft
//  2016-04-18 - Version 1.9 - fixed a bug with saving while cam disabled
//  2016-03-16 - Version 1.8 - transferring player to same map no longer moves
//                           - the camera if it has a different target.
//  2015-12-30 - Version 1.7 - another fix for shuttering issue
//  2015-12-17 - Version 1.6 - put in code to fix potential shuttering issue
//  2015-12-17 - Version 1.5 - fixed an issue that enabled the disabled cam
//  2015-12-01 - Version 1.4 - minor code changes
//  2015-12-01 - Version 1.3 - missed part of the last bug. Fixed now.
//  2015-11-30 - Version 1.2 - fixed bug with loading game and target breaking
//  2015-11-27 - Version 1.1 - added tile size option
//  2015-11-27 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_CamControl = true;

var Galv = Galv || {}; // Galv's main object
Galv.pCmd = Galv.pCmd || {}; // Plugin Command manager
Galv.CC = Galv.CC || {}; // Galv's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc Allows greater control over where the game camera is focused. View HELP for plugin commands.
 *
 * @author Galv - galvs-scripts.com
 *
 * @param Tile Size
 * @desc Default 48. Only change if you change tile size in your game
 * @default 48
 *
 * @help
 *   Galv's Cam Control
 * ----------------------------------------------------------------------------
 * This plugin creates a sliding movement for the camera as well as allows you
 * to set the target position of it to wherever required. (Player, event, xy)
 *
 * ----------------------------------------------------------------------------
 *   PLUGIN COMMANDS
 * ----------------------------------------------------------------------------
 *   CAM PLAYER SPD               // Set camera focus to player.
 *                                // CAM - the plugin command word
 *                                // PLAYER - command word to choose player
 *                                // SPD    - speed camera scrolls to target
 *                                //          v# to use a variable
 *                                //          default scroll speed is 800
 *                                //          leave speed blank for default
 *
 *   CAM EVENT ID SPD             // Set camera focus to an event.
 *                                // CAM - the plugin command word
 *                                // EVENT  - command word to choose event
 *                                // ID     - the event's id
 *                                //          v# to use a variable
 *                                // SPD    - speed camera scrolls to target
 *                                //          v# to use a variable
 *                                //          default scroll speed is 800
 *                                //          leave speed blank for default
 *
 *   CAM X Y SPD                  // Set camera focus to an x,y position.
 *                                // CAM - the plugin command word
 *                                // X      - the position on the map
 *                                // Y      - the position on the map
 *                                //          v# to use variables
 *                                // SPD    - speed camera scrolls to target
 *                                //          v# to use a variable
 *                                //          default scroll speed is 800
 *                                //          leave speed blank for default
 *
 *   CAM DISABLE                  // Sets the focus on player and disables the
 *                                // sliding motion. (RPGMaker default);
 *                                // Using any command above will enable again
 *
 * NOTE: The higher the SPD value for these commands, the slower the movement.
 * Not recommended to use speeds that are too fast.
 *
 * EXAMPLES
 * CAM PLAYER         // Camera focuses on player at speed 800
 * CAM PLAYER 1600    // Camera focuses on player at speed 1600 (slower)
 * CAM EVENT 3        // Camera focuses on event 3 at speed 800
 * CAM EVENT 12 400   // Camera focuses on event 12 at speed 400 (faster)
 * CAM 23 18          // Camera focuses on x23, y18 position on the map
 */

/*:ja
 * @plugindesc マップ上でのカメラの焦点をより細かく制御できます
 *
 * @author Galv - galvs-scripts.com
 *
 * @param Tile Size
 * @text タイルサイズ
 * @desc デフォルト48。タイルサイズを変更した場合にのみ変更
 * @default 48
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン:
 * https://galvs-scripts.com/2015/11/27/mv-cam-control/
 *
 *   Galv's Cam Control
 * ---------------------------------------------------------------------------
 * このプラグインは、カメラのスライド動作を作成するだけでなく、
 * カメラの目標位置を必要な場所に設定できるようにします。
 * (プレーヤー、イベント、xy)
 *
 * ---------------------------------------------------------------------------
 *   プラグインコマンド
 * ---------------------------------------------------------------------------
 *   CAM PLAYER SPD
 *      // カメラのフォーカスをプレーヤーに設定します。
 *      // CAM - プラグインコマンドワード
 *      // PLAYER - プレイヤーを選択するコマンドワード
 *      // SPD    - 高速カメラが対象にスクロールします
 *      //          v+変数IDを入れると、変数の値になります。
 *      //          省略すると、デフォルトのスクロール速度800になります
 *
 *   CAM EVENT ID SPD
 *      // カメラフォーカスをイベントに設定します。
 *      // CAM - プラグインコマンドワード
 *      // EVENT  - イベントを選択するコマンドワード
 *      // ID     - イベントのID
 *      //          v+変数IDを入れると、変数の値になります。
 *      // SPD    - 高速カメラが対象にスクロールします
 *      //          v+変数IDを入れると、変数の値になります。
 *      //          省略すると、デフォルトのスクロール速度800になります
 *
 *   CAM X Y SPD
 *      // カメラフォーカスをX、Y位置に設定します。
 *      // CAM - プラグインコマンドワード
 *      // X      - マップ上の位置
 *      // Y      - マップ上の位置
 *      //          変数を使用するv#
 *      // SPD    - 高速カメラが対象にスクロールします
 *      //          v+変数IDを入れると、変数の値になります。
 *      //          省略すると、デフォルトのスクロール速度800になります
 *
 *   CAM DISABLE
 *      // プレーヤーにフォーカスを設定したスライド動作を無効にします。
 *      // つまり、RPGツクールMVのデフォルトの動作に戻ります。
 *
 * 注:これらのコマンドのSPD値が高いほど、動きは遅くなります。
 * 速すぎる速度は推奨されません。
 *
 * 例
 * CAM PLAYER
 *    // カメラはプレーヤーに速度800で焦点を合わせます
 * CAM PLAYER 1600
 *    // カメラはプレーヤーに速度1600(遅い)で焦点を合わせます
 * CAM EVENT 3 v1
 *    // カメラはイベント3に速度は変数ID1の値で焦点を合わせます
 * CAM EVENT 12 400
 *    // カメラはイベント12に速度400(高速)で焦点を合わせます
 * CAM 23 18
 *    // カメラはマップ上のx23,y18の位置に速度800で焦点を合わせます
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function () {
  Galv.CC.size = Number(
    PluginManager.parameters("Galv_CamControl")["Tile Size"]
  );

  // OVERWRITE - BECAUSE OF JITTER
  Game_Map.prototype.displayX = function () {
    return Math.round(this._displayX * Galv.CC.size) / Galv.CC.size;
  };
  Game_Map.prototype.displayY = function () {
    return Math.round(this._displayY * Galv.CC.size) / Galv.CC.size;
  };

  // GALV'S PLUGIN MANAGEMENT. INCLUDED IN ALL GALV PLUGINS THAT HAVE PLUGIN COMMAND CALLS, BUT ONLY RUN ONCE.
  if (!Galv.aliased) {
    var Galv_Game_Interpreter_pluginCommand =
      Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
      if (Galv.pCmd[command]) {
        Galv.pCmd[command](args);
        return;
      }
      Galv_Game_Interpreter_pluginCommand.call(this, command, args);
    };
    Galv.aliased = true; // Don't keep aliasing for other Galv scripts.
  }

  // Direct to Plugin Object
  Galv.pCmd.CAM = function (arguments) {
    Galv.CC.camControl(arguments);
  };
  // END GALV'S PLUGIN MANAGEMENT

  Galv.CC.camControl = function (args) {
    var key = args[0].toLowerCase();
    var speed = 800;
    switch (key) {
      case "player":
        var target = $gamePlayer;
        if (args[1]) speed = Galv.CC.getValue(args[1]);
        break;
      case "event":
        var eId = Galv.CC.getValue(args[1]);
        var target = $gameMap.event(eId);
        if (args[2]) speed = Galv.CC.getValue(args[2]);
        break;
      case "disable":
        $gameMap.camTarget = $gamePlayer;
        $gameMap.camNorm = true;
        $gameMap.savedCamTarget = null;
        return;
      default:
        var px = Galv.CC.getValue(args[0]);
        var py = Galv.CC.getValue(args[1]);
        if (args[2]) speed = Galv.CC.getValue(args[2]);
        var target = {
          x: px,
          y: py,
          _realX: px,
          _realY: py,
          screenX: Game_CharacterBase.prototype.screenX,
          screenY: function () {
            var th = $gameMap.tileHeight();
            return Math.round(this.scrolledY() * th + th);
          },
          scrolledX: Game_CharacterBase.prototype.scrolledX,
          scrolledY: Game_CharacterBase.prototype.scrolledY,
        };
    }

    $gameMap.camTargetSet(target, speed);
    $gameMap.savedCamTarget = args;
  };

  Galv.CC.getValue = function (string) {
    if (string[0].toLowerCase() === "v") {
      // Use variable
      var varId = Number(string.replace("v", ""));
      return $gameVariables.value(varId);
    } else {
      return Number(string);
    }
  };

  // GAME PLAYER

  Galv.CC.Game_Player_updateScroll = Game_Player.prototype.updateScroll;
  Game_Player.prototype.updateScroll = function (lastScrolledX, lastScrolledY) {
    if ($gameMap.camNorm)
      return Galv.CC.Game_Player_updateScroll.call(
        this,
        lastScrolledX,
        lastScrolledY
      );
  };

  // GAME MAP

  Galv.CC.Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    Galv.CC.Scene_Map_onMapLoaded.call(this);
    if (!$gameMap.camNorm) {
      $gameMap.savedCamTarget = $gameMap.savedCamTarget || ["PLAYER"];
      Galv.CC.camControl($gameMap.savedCamTarget);
    }
  };

  Galv.CC.Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function (mapId) {
    this.zoom = this.zoom || new PIXI.Point(1, 1);
    if (!this.camNorm) {
      this.camTargetSet($gamePlayer, 800);
      this.savedCamTarget = ["PLAYER"];
    }
    Galv.CC.Game_Map_setup.call(this, mapId);
  };

  Game_Map.prototype.camTargetSet = function (target, speed) {
    this.camTarget = target;
    this.camNorm = false;
    this.camSpeed = speed || 800;
  };

  Galv.CC.Game_Map_updateScroll = Game_Map.prototype.updateScroll;
  Game_Map.prototype.updateScroll = function () {
    if (this.camNorm) return Galv.CC.Game_Map_updateScroll.call(this);

    this._scrollRest = 0;

    var cw = Graphics.boxWidth / 2;
    var ch = Graphics.boxHeight / 2;

    var screenX = this.camTarget.screenX() * this.zoom.x;
    var screenY = this.camTarget.screenY() * this.zoom.y;

    var sx = Math.abs(screenX - cw) / this.camSpeed;
    var sy = Math.abs(screenY - ch) / this.camSpeed;
    if (sx < 0.005) sx = 0;
    if (sy < 0.005) sy = 0;

    var x_pos = screenX;
    var y_pos = screenY;

    if (y_pos < ch) {
      this.scrollUp(sy);
    } else if (y_pos > ch) {
      this.scrollDown(sy);
    }

    if (x_pos < cw) {
      this.scrollLeft(sx);
    } else if (x_pos > cw) {
      this.scrollRight(sx);
    }
  };

  Galv.CC.Game_Player_center = Game_Player.prototype.center;
  Game_Player.prototype.center = function (x, y) {
    if ($gameMap.camTarget == $gamePlayer || $gameMap.camNorm) {
      return Galv.CC.Game_Player_center.call(this, x, y);
    }
  };

  Game_Player.prototype.centerX = function () {
    return (
      (Graphics.width / $gameMap.tileWidth() - 1 * $gameMap.zoom.x) /
      2.0 /
      $gameMap.zoom.x
    );
  };

  Game_Player.prototype.centerY = function () {
    return (
      (Graphics.height / $gameMap.tileHeight() - 1.75 * $gameMap.zoom.y) /
      2.0 /
      $gameMap.zoom.y
    );
  };
})();
