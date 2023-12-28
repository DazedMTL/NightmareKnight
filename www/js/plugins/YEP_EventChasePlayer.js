//=============================================================================
// Yanfly Engine Plugins - Event Chase Player
// YEP_EventChasePlayer.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_EventChasePlayer = true;

var Yanfly = Yanfly || {};
Yanfly.ECP = Yanfly.ECP || {};
Yanfly.ECP.version = 1.07;

//=============================================================================
/*:
 * @plugindesc v1.07 When a player is in the proximity of a certain event,
 * the event will start chasing or fleeing from the player.
 * @author Yanfly Engine Plugins
 *
 * @param Sight Lock
 * @type number
 * @min 0
 * @desc This is the number of frames for how long an event chases
 * the player if 'this._seePlayer = true' is used.
 * @default 300
 *
 * @param See Player
 * @type boolean
 * @on YES
 * @off NO
 * @desc Does the event have to be able to see the player by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Alert Timer
 * @type number
 * @min 0
 * @desc This is the number of frames that must occur before the
 * alert balloon will show up on the same event.
 * @default 120
 *
 * @param Alert Balloon
 * @type number
 * @min 0
 * @desc This is the default balloon used when the player is seen.
 * Refer to balloon ID's.
 * @default 1
 *
 * @param Alert Sound
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc This is the default sound played when the player is seen.
 * @default Attack1
 *
 * @param Alert Common Event
 * @type common_event
 * @desc The default common event played when the player is seen.
 * Use 0 if you do not wish to use a Common Event.
 * @default 0
 *
 * @param End Common Event
 * @type common_event
 * @desc The default common event played when the player is seen.
 * Use 0 if you do not wish to use a Common Event.
 * @default 0
 *
 * @param Set Variables ID
 * @type number
 * @min 0
 * @desc The frames to wait after finishing a chase/flee.
 * @default 0
 *
 * @param Event ID
 * @type number
 * @min 0
 * @desc The frames to wait after finishing a chase/flee.
 * @default 0
 *
 * @param particle Name
 * @desc Text item used in the option menu (change for different language)
 * Default: chaserEff
 * @default chaserEff
 *
 * @param Return After
 * @type boolean
 * @on YES
 * @off NO
 * @desc After chasing/fleeing from a player, the event returns
 * to its original spot. NO - false   YES - true
 * @default true
 *
 * @param Return Wait
 * @type number
 * @min 0
 * @desc The frames to wait after finishing a chase/flee.
 * @default 180
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to make events that will chase the player or flee
 * from the player when the player enters within range of the event or when the
 * event sees the player.
 *
 * ============================================================================
 * How to Use
 * ============================================================================
 *
 * Insert these lines into the script call window within the Movement Route
 * event to give an event the chase or flee flag.
 *
 * Note: This doesn’t work with players.
 *
 * Script Call lines
 *  this._chaseRange = x       Event will chase player if reaching x range.
 *  this._fleeRange = x        Event will flee from player if reaching x range.
 *  this._chaseSpeed = x       Event's movement speed when chasing.
 *  this._fleeSpeed = x        Event's movement speed when fleeing.
 *  this._sightLock = x        Event will flee/chase player for x frames.
 *  this._seePlayer = true     Requires the event to be able to see player.
 *  this._seePlayer = false    Doesn't require event to be able to see player.
 *  this._alertBalloon = x     This balloon will play when player is seen.
 *  this._alertSound = x       This sound will play when player is seen.
 *  this._alertSoundVol = x    The volume used by the alert sound.
 *  this._alertSoundPitch = x  The pitch used by the alert sound.
 *  this._alertSoundPan = x    The pan used by the alert sound.
 *  this._alertCommonEvent = x This event will play when player is seen.
 *  this._eventID = x   How long event waits after finishing chase/flee.
 *  this._setvariablesID = x   How long event waits after finishing chase/flee.
 *  this._partivleName = X     aaaaa
 *  this._returnAfter = true   Returns the event back to its original spot.
 *  this._returnAfter = false  Event stays where it is when finished chasing.
 *  this._returnWait = x       How long event waits after finishing chase/flee.
 *
 * It is best to play this inside of a custom move route for the event at a
 * high frequency rate. Keep in mind these effects only occur after the setting
 * is made and ran, which means upon loading a map, if the event with a low
 * frequency hasn't loaded up 'this._chaseRange = x' in its movement queue yet,
 * the event will not chase the player just yet.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.07:
 * - Added a background mechanic to stagger an event if they're chasing the
 * player and get caught behind an object. This will prevent the event from
 * continuously chasing the player and dropping the FPS rate.
 *
 * Version 1.06:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.05:
 * - Optimization update.
 *
 * Version 1.04:
 * - Fixed a bug with this._seePlayer causing them to see stealthed players.
 *
 * Version 1.03:
 * - Improved pathfinding for chasing events. They will get stuck less by walls
 * and/or events that may be blocking the event.
 * - Added random factor for fleeing events. Fleeing events won't simply just
 * run away 180 degrees away from the player. They will sometimes move in a
 * random direction.
 *
 * Version 1.02:
 * - Added 'Return After' parameter where events will return to their original
 * spot after chasing/fleeing from a player.
 * - Added 'Return Wait' parameter to determine how long an event will wait in
 * place before returning after a finished chase/flee.
 * - Added 'this._returnAfter' and 'this._returnWait' to the list of available
 * movement route script calls.
 *
 * Version 1.01:
 * - Added 'this._alertSoundPitch' 'this._alertSoundVol' 'this._alertSoundPan'
 * to the settings you can alter to adjust the alert sound.
 *
 * Version 1.00:
 * - Finished Plugin!
 */

/*:ja
 * @plugindesc v1.07 プレイヤーが近づくと、プレイヤーを追いかけたり、逃げるイベントを作成できます。
 * @author Yanfly Engine Plugins
 *
 * @param Sight Lock
 * @text 追跡時間
 * @type number
 * @max 9007
 * @desc 'SeePlayer'がtrueの時、イベントがプレイヤーを追いかける時間(フレーム単位)
 * @default 300
 *
 * @param See Player
 * @text プレイヤー認識有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc イベントのプレイヤー認識を有効化
 * 無効:false / 有効:true
 * @default true
 *
 * @param Alert Timer
 * @text 認識フキダシ表示時間
 * @type number
 * @max 9007
 * @desc イベントにフキダシ表示されるまでにかかるフレーム数
 * @default 120
 *
 * @param Alert Balloon
 * @text 表示フキダシ
 * @type select
 * @option 無効
 * @value 0
 * @option びっくり
 * @value 1
 * @option はてな
 * @value 2
 * @option 音符
 * @value 3
 * @option ハート
 * @value 4
 * @option 怒り
 * @value 5
 * @option 汗
 * @value 6
 * @option くしゃくしゃ
 * @value 7
 * @option 沈黙
 * @value 8
 * @option 電球
 * @value 9
 * @option Zzz
 * @value 10
 * @option ユーザ定義1
 * @value 11
 * @option ユーザ定義2
 * @value 12
 * @option ユーザ定義3
 * @value 13
 * @option ユーザ定義4
 * @value 14
 * @option ユーザ定義5
 * @value 15
 * @desc プレイヤー認識時に表示するフキダシを指定(フキダシID)利用しない場合、0
 * @default 1
 *
 * @param Alert Sound
 * @text 認識音
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc プレイヤー認識時に再生するSE
 * @default Attack1
 *
 * @param Alert Common Event
 * @text 認識コモンイベント
 * @type common_event
 * @desc 認識時に実行するコモンイベント。利用しない場合、0
 * @default 0
 *
 * @param End Common Event
 * @text 追跡終了コモンイベント
 * @type common_event
 * @desc 追跡終了時に実行するコモンイベント。利用しない場合、0
 * @default 0
 *
 * @param Set Variables ID
 * @text イベントIDを格納する変数番号
 * @type number
 * @max 1000
 * @desc イベントIDを指定するための変数
 * @default 0
 *
 * @param Event ID
 * @text イベントID指定用変数
 * @type number
 * @max 1000
 * @desc イベントIDを指定するための変数
 * @default 0
 *
 * @param particle Name
 * @text パーティクル名前
 * @desc Text item used in the option menu (change for different language)
 * Default: chaserEff
 * @default chaserEff
 *
 * @param Return After
 * @text 追跡終了後動作
 * @type boolean
 * @on 戻す
 * @off 終了時位置
 * @desc 追跡/逃走後、イベントを元の位置に戻すか。終了時位置:false / 戻す:true
 * @default true
 *
 * @param Return Wait
 * @text 追跡終了後時間
 * @type number
 * @max 9007
 * @desc 追跡/逃走後、次の動作までのフレーム数
 * @default 180
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * 導入
 * ===========================================================================
 *
 * このプラグインは、プレイヤーを追いかけるイベント、
 * プレイヤーから逃げるイベントを作成することができます。
 * プレイヤーがイベントから一定の距離範囲内に入った時や
 * イベントがプレイヤーを認識した際に発動させることができます。
 *
 * ===========================================================================
 * 使用方法
 * ===========================================================================
 *
 * イベントの自律移動タイプを「カスタム」にし、
 * 「ルート…」内の「スクリプト…」内に次のコードを入れることで、
 * そのイベントに追跡/逃走の指定ができます。
 *
 * 注*プレイヤーに対しては無効です。
 *
 * スクリプトの説明
 *  this._chaseRange = x
 *              →x の距離内に入った時、イベントがプレイヤーを追いかけます
 *  this._fleeRange = x
 *              →x の距離内に入った時、イベントはプレイヤーから逃げます
 *  this._chaseSpeed = x
 *              →追いかける時のイベントの速度 x を指定します
 *  this._fleeSpeed = x
 *              →逃げる時のイベントの速度 x を指定します
 *  this._sightLock = x
 *              →イベントは、フレーム数 x だけ追跡/逃走を行います
 *  this._seePlayer = true
 *              →イベントはプレイヤーを認識します
 *  this._seePlayer = false
 *              →イベントはプレイヤーを認識しません
 *  this._alertBalloon = x
 *              →プレイヤー認識時、フキダシID x を表示します
 *  this._alertSound = x
 *              →プレイヤー認識時、SE x を再生します
 *  this._alertSoundVol = x
 *              →プレイヤー認識時SEの音量を指定します
 *  this._alertSoundPitch = x
 *              →プレイヤー認識時SEのピッチを指定します
 *  this._alertSoundPan = x
 *              →プレイヤー認識時SEのパンを指定します
 *  this._alertCommonEvent = x
 *              →プレイヤー認識時、コモンイベントID x を実行します
 *  this._endCommonEvent = x
 *              →プレイヤー認識時、コモンイベントID x を実行します
 *  this.setVariablesID = x
 *              →イベントID格納用変数番号
 *  this._eventID = x
 *              →イベントID指定用
 *  this._particleName = x
 *              →パーティクル名
 *  this._returnAfter = true
 *              →イベントを元の位置に戻します
 *  this._returnAfter = false
 *              →追跡/逃走が終わってもイベントはそこに留まります
 *  this._returnWait = x
 *              →追跡/逃走が終わった後 x の間待機します
 *
 * カスタム移動ルート内でイベントを実行させる場合、
 * 移動頻度はなるべく高く設定するようにしてください。
 * 設定が完了し有効になるまでは、これらの効果は動作しません。
 * 移動頻度の低いイベントの場合、
 * マップロード中に'this._chaseRange = x'の読み込みを完了できず、
 * プレイヤーを追いかけなくなってしまう可能性があります。
 *
 * ===========================================================================
 * Changelog
 * ===========================================================================
 *
 * Version 1.07:
 * - Added a background mechanic to stagger an event if they're chasing the
 * player and get caught behind an object. This will prevent the event from
 * continuously chasing the player and dropping the FPS rate.
 *
 * Version 1.06:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.05:
 * - Optimization update.
 *
 * Version 1.04:
 * - Fixed a bug with this._seePlayer causing them to see stealthed players.
 *
 * Version 1.03:
 * - Improved pathfinding for chasing events. They will get stuck less by
 * walls and/or events that may be blocking the event.
 * - Added random factor for fleeing events. Fleeing events won't simply just
 * run away 180 degrees away from the player. They will sometimes move in a
 * random direction.
 *
 * Version 1.02:
 * - Added 'Return After' parameter where events will return to their original
 * spot after chasing/fleeing from a player.
 * - Added 'Return Wait' parameter to determine how long an event will wait in
 * place before returning after a finished chase/flee.
 * - Added 'this._returnAfter' and 'this._returnWait' to the list of available
 * movement route script calls.
 *
 * Version 1.01:
 * - Added 'this._alertSoundPitch' 'this._alertSoundVol' 'this._alertSoundPan'
 * to the settings you can alter to adjust the alert sound.
 *
 * Version 1.00:
 * - Finished Plugin!
 */

//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters("YEP_EventChasePlayer");
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.ECPSightLock = Number(Yanfly.Parameters["Sight Lock"]);
Yanfly.Param.ECPSeePlayer = String(Yanfly.Parameters["See Player"]);
Yanfly.Param.ECPSeePlayer = eval(Yanfly.Param.ECPSeePlayer);
Yanfly.Param.ECPAlertTimer = Number(Yanfly.Parameters["Alert Timer"]);
Yanfly.Param.ECPAlertBalloon = Number(Yanfly.Parameters["Alert Balloon"]);
Yanfly.Param.ECPAlertSound = String(Yanfly.Parameters["Alert Sound"]);
Yanfly.Param.ECPAlertEvent = Number(Yanfly.Parameters["Alert Common Event"]);
Yanfly.Param.ECPEndEvent = Number(Yanfly.Parameters["End Common Event"]);
Yanfly.Param.ECPSetVariablesID = Number(Yanfly.Parameters["Set Variables ID"]);
Yanfly.Param.ECPEventID = Number(Yanfly.Parameters["Event ID"]);
Yanfly.Param.ECPParticleName = String(Yanfly.Parameters["Particle Name"]);
Yanfly.Param.ECPReturn = eval(String(Yanfly.Parameters["Return After"]));
Yanfly.Param.ECPReturnWait = Number(Yanfly.Parameters["Return Wait"]);

//=============================================================================
// Main Code
//=============================================================================

Yanfly.ECP.Game_Event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function () {
  Yanfly.ECP.Game_Event_setupPage.call(this);
  this.clearChaseSettings();
};

Game_Event.prototype.clearChaseSettings = function () {
  this._alertBalloon = Yanfly.Param.ECPAlertBalloon;
  this._alertCommonEvent = Yanfly.Param.ECPAlertEvent;
  this._endCommonEvent = Yanfly.Param.ECPEndEvent;
  this._setVariablesID = Yanfly.Param.ECPSetVariablesID;
  this._particleName = Yanfly.Param.ECPParticleName;
  this._alertLock = 0;
  this._alertPlayer = false;
  this._alertSound = Yanfly.Param.ECPAlertSound;
  this._alertSoundVol = 100;
  this._alertSoundPitch = 100;
  this._alertSoundPan = 0;
  this._alertTimer = 0;
  this._chasePlayer = false;
  this._chaseRange = 0;
  this._chaseSpeed = this._moveSpeed;
  this._defaultSpeed = this._moveSpeed;
  this._fleePlayer = false;
  this._fleeRange = 0;
  this._fleeSpeed = this._moveSpeed;
  this._seePlayer = Yanfly.Param.ECPSeePlayer;
  this._sightLock = Yanfly.Param.ECPSightLock;
  this._returnAfter = Yanfly.Param.ECPReturn;
  this._returnWait = Yanfly.Param.ECPReturnWait;
  this._returnPhase = false;
  this._returnFrames = 0;
  this._staggerCount = 0;
  this._startLocationX = this.x;
  this._startLocationY = this.y;
  this._startLocationDir = this._direction;
};

Yanfly.ECP.Game_Event_updateSelfMovement =
  Game_Event.prototype.updateSelfMovement;
Game_Event.prototype.updateSelfMovement = function () {
  if (Imported.YEP_StopAllMove && $gameSystem.isEventMoveStopped()) return;
  this.updateChaseDistance();
  this.updateFleeDistance();
  this.updateChaseMovement();
};

Yanfly.ECP.Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function () {
  Yanfly.ECP.Game_Event_update.call(this);
  this.updateAlert();
  this.updateReturnPhase();
};

Game_Event.prototype.canSeePlayer = function () {
  if (!this._seePlayer) return false;
  var sx = this.deltaXFrom($gamePlayer.x);
  var sy = this.deltaYFrom($gamePlayer.y);
  if (Math.abs(sx) > Math.abs(sy)) {
    var direction = sx > 0 ? 4 : 6;
  } else {
    var direction = sy > 0 ? 8 : 2;
  }
  if (direction === this.direction()) {
    this._alertLock = this._sightLock;
    return true;
  }
  return false;
};

Game_Event.prototype.updateChaseDistance = function () {
  if (this._erased) return;
  if (this._chaseRange <= 0) return;
  var dis = Math.abs(this.deltaXFrom($gamePlayer.x));
  dis += Math.abs(this.deltaYFrom($gamePlayer.y));
  if (this.chaseConditions(dis)) {
    this.startEventChase();
  } else if (this._chasePlayer) {
    this.endEventChase();
  }
};

Game_Event.prototype.chaseConditions = function (dis) {
  if (dis <= this._chaseRange && this.nonSeePlayer()) {
    this._alertLock = this._sightLock;
    return true;
  }
  if (this._alertLock > 0) return true;
  if (dis <= this._chaseRange && this.canSeePlayer()) return true;
  return false;
};

Game_Event.prototype.nonSeePlayer = function () {
  if (Imported.YEP_X_EventChaseStealth) {
    if (this.meetStealthModeConditions()) {
      this.stealthClearChaseSettings();
      this._stopCount = 0;
      return false;
    }
  }
  return !this._seePlayer;
};

Game_Event.prototype.startEventChase = function () {
  this._chasePlayer = true;
  this.setMoveSpeed(this._chaseSpeed);
};

Game_Event.prototype.endEventChase = function () {
  this._chasePlayer = false;
  this.setMoveSpeed(this._defaultSpeed);
  if (this._alertTimer <= 0) this._alertPlayer = false;
  this.startReturnPhase();
};

Game_Event.prototype.updateFleeDistance = function () {
  if (this._erased) return;
  if (this._fleeRange <= 0) return;
  var dis = Math.abs(this.deltaXFrom($gamePlayer.x));
  dis += Math.abs(this.deltaYFrom($gamePlayer.y));
  if (this.fleeConditions(dis)) {
    this.startEventFlee();
  } else if (this._fleePlayer) {
    this.endEventFlee();
  }
};

Game_Event.prototype.fleeConditions = function (dis) {
  if (this._alertLock > 0) return true;
  if (dis <= this._fleeRange && this.canSeePlayer()) return true;
  if (dis <= this._fleeRange && !this._seePlayer) {
    this._alertLock = this._sightLock;
    return true;
  }
  return false;
};

Game_Event.prototype.startEventFlee = function () {
  this._fleePlayer = true;
  this.setMoveSpeed(this._fleeSpeed);
};

Game_Event.prototype.endEventFlee = function () {
  this._fleePlayer = false;
  this.setMoveSpeed(this._defaultSpeed);
  if (this._alertTimer <= 0) this._alertPlayer = false;
  this.playEndCommonEvent();
  this.startReturnPhase();
};

Game_Event.prototype.updateChaseMovement = function () {
  if (this._staggerCount > 0) {
    return this._staggerCount--;
  }
  if (this._stopCount > 0 && this._chasePlayer) {
    var direction = this.findDirectionTo($gamePlayer.x, $gamePlayer.y);
    if (direction > 0) {
      var x = this._x;
      var y = this._y;
      this.moveStraight(direction);
      if (x === this._x && y === this._y) this._staggerCount = 20;
    }
  } else if (this._stopCount > 0 && this._fleePlayer) {
    this.updateFleeMovement();
  } else if (this._returnPhase) {
    this.updateMoveReturnAfter();
  } else {
    Yanfly.ECP.Game_Event_updateSelfMovement.call(this);
  }
};

Game_Event.prototype.updateFleeMovement = function () {
  switch (Math.randomInt(6)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      this.moveAwayFromPlayer();
      break;
    case 5:
      this.moveRandom();
      break;
  }
};

Game_Event.prototype.updateAlert = function () {
  if (this._erased) return;
  this._alertLock--;
  if (this.alertConditions()) this.activateAlert();
  if (this._alertPlayer) this._alertTimer--;
};

Game_Event.prototype.alertConditions = function () {
  return (this._chasePlayer || this._fleePlayer) && !this._alertPlayer;
};

Game_Event.prototype.activateAlert = function () {
  if (this._alertBalloon >= 0) this.requestBalloon(this._alertBalloon);
  this._alertPlayer = true;
  this._alertTimer = Yanfly.Param.ECPAlertTimer;
  this.playAlertSound();
  this.playAlertCommonEvent();
};

Game_Event.prototype.playAlertSound = function () {
  if (this._alertSound === "") return;
  var sound = {
    name: this._alertSound,
    volume: this._alertSoundVol,
    pitch: this._alertSoundPitch,
    pan: this._alertSoundPan,
  };
  AudioManager.playSe(sound);
};

Game_Event.prototype.playAlertCommonEvent = function () {
  if (this._alertCommonEvent <= 0) return;
  this.setEventID();
  $gameVariables.setValue(33, this._particleName);
  $gameTemp.reserveCommonEvent(this._alertCommonEvent);
};

Game_Event.prototype.playEndCommonEvent = function () {
  if (this._endCommonEvent <= 0) return;
  $gameTemp.reserveCommonEvent(this._endCommonEvent);
};

Game_Event.prototype.setEventID = function () {
  if (this._eventID <= 0) return;
  $gameVariables.setValue(this._setVariablesID, this._eventID);
};

Game_Event.prototype.startReturnPhase = function () {
  if (!this._returnAfter) {
    return;
  }
  this._returnPhase = true;
  this.setEventID();
  $gameVariables.setValue(33, this._particleName);
  $gameTemp.reserveCommonEvent(this._endCommonEvent);
  this._returnFrames = this._returnWait;
};

Game_Event.prototype.updateReturnPhase = function () {
  if (this._returnPhase) this._returnFrames--;
};

Game_Event.prototype.updateMoveReturnAfter = function () {
  if (this._returnFrames > 0) {
    return;
  }
  var sx = this.deltaXFrom(this._startLocationX);
  var sy = this.deltaYFrom(this._startLocationY);
  if (Math.abs(sx) > Math.abs(sy)) {
    if (Math.randomInt(6) <= 4) {
      this.moveStraight(sx > 0 ? 4 : 6);
      if (!this.isMovementSucceeded() && sy !== 0) {
        this.moveStraight(sy > 0 ? 8 : 2);
      }
    } else {
      this.moveRandom();
    }
  } else if (sy !== 0) {
    if (Math.randomInt(6) <= 4) {
      this.moveStraight(sy > 0 ? 8 : 2);
      if (!this.isMovementSucceeded() && sx !== 0) {
        this.moveStraight(sx > 0 ? 4 : 6);
      }
    } else {
      this.moveRandom();
    }
  }
  if (sx === 0 && sy === 0) {
    this._returnPhase = false;
    this._returnFrames = 0;
    this._direction = this._startLocationDir;
  }
};

//=============================================================================
// End of File
//=============================================================================
