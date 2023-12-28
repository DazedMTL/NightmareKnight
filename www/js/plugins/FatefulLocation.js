//=============================================================================
// FatefulLocation.js
//=============================================================================

/*:ja
 * @plugindesc ver1.00 場所移動時の自動演奏の制御等
 * @author まっつＵＰ
 *
 * @param bgmSwitch
 * @desc オンにしていると場所移動時設定したBGMを自動演奏しません。
 * @default 10
 *
 * @param bgsSwitch
 * @desc オンにしていると場所移動時設定したBGSを自動演奏しません。
 * @default 11
 *
 * @param atpVariable
 * @desc このIDの変数はスイッチや処理の制御に使います。
 * @default 19
 *
 * @param defVariable
 * @desc 処理の終わりにこのIDの変数の値をatpVariableに代入します。
 * @default 20
 *
 * @help
 *
 * RPGで笑顔を・・・
 *
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 *
 * bgmSwitchは任意のスイッチのIDを設定します。
 * このスイッチをオンにすると場所移動後のマップの自動演奏が設定されていても
 * そのBGMの自動演奏を行われません。
 * bgsSwitchは上のbgmの部分をbgsに置き換えてお察しください。
 *
 * atpVariableは任意の変数のIDを設定します。
 * この変数に10以上の値が入っている場合、
 * 自動演奏の処理はパラメータのスイッチのオンオフに関わらず行いません。
 * この変数に入っている値で自動演奏の処理の後、
 * 下記の処理を加えることができます。
 *
 * 0:追加の処理はありません。
 * 1:bgmスイッチのみオフにする。
 * 2:bgsスイッチのみオフにする。
 * 3:両方のスイッチをオフにする。
 * 7:隊員を全回復させる。
 * 8:隊員を全回復させた上で両方のスイッチをオフにする。
 * ---
 * 10:場所移動前のBGMを2秒間かけてフェードアウト。
 * 11:場所移動前のBGSを2秒間かけてフェードアウト。
 * 12:BGMBGSともに1秒間かけてフェードアウト。
 * 13:場所移動前のBGMを保存してから1秒間かけてBGMをフェードアウト。
 * 14:保存されているBGMを再生する、さらに両方のスイッチをオフにする。
 * それ以外の場合:追加の処理はありません。
 *
 * defVariableは任意の変数のIDを設定します。
 * 上までの処理を行った後、このIDの変数の値をatpVariableに代入します。
 * ただし、このIDの変数の値が0に満たない場合代入は行いません。
 *
 * スイッチオンにより自動演奏をさせないようにしたいだけなど
 * 変数を使わないなら両方のIDの変数の値を0に保っておけば大丈夫です。
 * Game_Map.prototype.autoplay
 * Scene_Load.prototype.reloadMapIfUpdatedを全て書き換えています。
 * ニューゲーム直後の開始マップの自動演奏の制御はできないので留意してください。
 * （あくまでニューゲーム直後のことで自動実行などでスイッチや変数の操作をすれば
 * 　その後は自動演奏の制御はできるようになっています。）
 * コンティニュー時にはマップの変更などによる更新があってもautoplayの処理は
 * 行われないようにしました。
 *
 * （10以上の時の使用例）
 * 13を指定して、移動先で迫真のイベントを終えた後
 * 14を指定して移動することで元のBGMを再び再生しながら
 * スイッチを両方オフにして原状復帰することができる。
 *
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 *
 */

(function () {
  var parameters = PluginManager.parameters("FatefulLocation");
  var APbgmSwitch = Number(parameters["bgmSwitch"] || 10);
  var APbgsSwitch = Number(parameters["bgsSwitch"] || 11);
  var APatpVariable = Number(parameters["atpVariable"] || 19);
  var APdefVariable = Number(parameters["defVariable"] || 20);
  var requestno;

  //このメソッドを全て書き換えている。
  Game_Map.prototype.autoplay = function () {
    //コンティニュー時直後のautoplayは実行されない。
    if (requestno !== 5) {
      var apa = $gameVariables._data[APatpVariable];

      if (apa === undefined) apa = 0;
      if (apa < 10) {
        //スイッチのオンオフにかかわらずapaが10以上の場合はそれぞれ自動演奏されない。
        if ($dataMap.autoplayBgm && !$gameSwitches.value(APbgmSwitch)) {
          AudioManager.playBgm($dataMap.bgm);
        }
        if ($dataMap.autoplayBgs && !$gameSwitches.value(APbgsSwitch)) {
          AudioManager.playBgs($dataMap.bgs);
        }
      }

      switch (apa) {
        case 0:
          //0の時は処理なし。
          break;
        case 1:
          //bgmスイッチのみオフにする。
          this.OFFautoplaybgmSwitch();
          break;
        case 2:
          //bgsスイッチのみオフにする。
          this.OFFautoplaybgsSwitch();
          break;
        case 3:
          //両方のスイッチをオフにする。
          this.OFFautoplaybgmSwitch();
          this.OFFautoplaybgsSwitch();
          break;
        case 7:
          //全回復させる。
          for (i = 1; i <= $gameParty.size(); i++) {
            $gameActors.actor(i).recoverAll();
          }
          break;
        case 8:
          //全回復させたうえで両方のスイッチをオフにする。
          for (i = 1; i <= $gameParty.size(); i++) {
            $gameActors.actor(i).recoverAll();
          }
          this.OFFautoplaybgmSwitch();
          this.OFFautoplaybgsSwitch();
          break;
        case 10:
          //場所移動前のBGMを()内の秒数かけてフェードアウト、自動演奏は無効になっている。
          AudioManager.fadeOutBgm(2);
          break;
        case 11:
          //場所移動前のBGSを()内の秒数かけてフェードアウト、自動演奏は無効になっている。
          AudioManager.fadeOutBgs(2);
          break;
        case 12:
          //BGMBGSともに()内の秒数かけてフェードアウト、自動演奏は無効になっている。
          AudioManager.fadeOutBgm(1);
          AudioManager.fadeOutBgs(1);
          break;
        case 13:
          //場所移動前のBGMを保存してから()内の秒数かけてフェードアウト、自動演奏は無効になっている。
          $gameSystem.saveBgm();
          AudioManager.fadeOutBgm(1);
          break;
        case 14:
          //保存されているBGMを再生する、さらに両方のスイッチをオフ、自動演奏は無効になっている。
          $gameSystem.replayBgm();
          this.OFFautoplaybgmSwitch();
          this.OFFautoplaybgsSwitch();
          break;
        default:
          //それ以外の場合は何もなし。
          break;
      }
      this.ANOautoplaybgmVal();
    } else {
      requestno = 0;
    }
  };

  //以下各種の処理
  Game_Map.prototype.OFFautoplaybgmSwitch = function () {
    $gameSwitches._data[APbgmSwitch] = false;
  };

  Game_Map.prototype.OFFautoplaybgsSwitch = function () {
    $gameSwitches._data[APbgsSwitch] = false;
  };

  Game_Map.prototype.ANOautoplaybgmVal = function () {
    var apd = $gameVariables._data[APdefVariable];
    if (apd === undefined) apd = 0;
    if (apd >= 0) {
      //defVariableが0未満の時は代入しない。
      $gameVariables._data[APatpVariable] = apd;
    }
  };

  //コンティニュー時の自動演奏の処理の中止のための記述
  Scene_Load.prototype.reloadMapIfUpdated = function () {
    if ($gameSystem.versionId() !== $dataSystem.versionId) {
      requestno = 5;
      $gamePlayer.reserveTransfer(
        $gameMap.mapId(),
        $gamePlayer.x,
        $gamePlayer.y
      );
      $gamePlayer.requestMapReload();
    }
  };
})();
