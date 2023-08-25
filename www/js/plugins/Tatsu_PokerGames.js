//=============================================================================
// Tatsu_PokerGames.js
// 内容：ポーカーをプレイするためのプラグインです。
// 製作者：タツノコ
// バージョン：Ver1.1.0
//=============================================================================
/*:
 * @target MZ
 * @plugindesc ポーカーのプラグイン
 * @author タツノコ
 * 
 * @help Tatsu_PokerGames.js
 * @command start
 * @text ポーカーの開始
 * @desc ポーカーを開始します。
 * 
 * @param coinVariable
 * @text コイン枚数保持用変数番号
 * @desc コイン枚数保持用変数番号
 * @type variable
 * 
 * @param reapeatMode
 * @text リピートモード有効化スイッチ
 * @desc 最初に選択したBET枚数を続けて再度BETしたいモードで起動するスイッチ
 * @type switch
 * @default 0
 * 
 * @param rsfPercentageSwitch
 * @text ロイヤルストレートフラッシュ確率変動スイッチ
 * @desc ロイヤルストレートフラッシュの確率変化を有効にするかのスイッチ
 * @type @type switch
 * @default 0
 * 
 * @param rsfPercentage
 * @text ロイヤルストレートフラッシュの確率格納変数
 * @desc ロイヤルストレートフラッシュの確率を格納する変数
 * @type variable
 * @default 0
 * 
 * @param rsfCnt
 * @text ロイヤルストレートフラッシュの確率変動有効回数
 * @desc ロイヤルストレートフラッシュの確率変動の有効化回数
 * @type variable
 * @default 0
 * 
 * @param betCoinList
 * @text BETする際に選択ができるコインの枚数
 * @desc BETする際に選択ができるコインの枚数(最大3行)
 * @type Number[]
 * @default ["1","10","100"]
 * 
 * @param useBGM
 * @text ゲームBGM鳴動設定
 * @desc ゲームプレイ中に設定した専用のBGMを流すかを設定することができます。
 * @type boolean
 * @on 専用BGMを流す
 * @off 専用BGMを流さない
 * @default false
 * 
 * @param backBGM
 * @text ゲームBGM設定
 * @desc ゲームプレイ中に流したい専用のBGMのファイル名を入力してください。
 * @type String
 * @default bgm_kajino
 * 
 * @param winSe
 * @text 役を上がったときのSE音
 * @desc 役を上がったときに流したいSEのファイル名を入力してください。
 * @type String
 * @default seWin
 * 
 * @param loseSe
 * @text 役が揃わなかったときのSE音
 * @desc 役が揃わなかった時に流したいSEのファイル名を入力してください。
 * @type String
 * @default seLose
 * 
 * @param royalstraightFlushSe
 * @text ロイヤルストレートフラッシュを上がった時に流したいSE音
 * @desc ロイヤルストレートフラッシュを上がった時に流したいSEのファイル名を入力してください。
 * @type String
 * @default seRoyalStraightFlush
 * 
 * @param backgroundImage
 * @text 背景画像ファイル設定
 * @desc 利用したい背景画像を設定してください。
 * @type String
 * @default background
 * 
 * @param windowPosition
 * @text -> 各種ウィンドウの位置情報 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param startButonFrameXPos
 * @text カード交換ボタン(STARTボタン)の選択フレームのX座標
 * @desc カード交換ボタン(STARTボタン)の選択フレームのX座標
 * @type number
 * @default 288
 * @parent windowPosition
 * 
 * @param startButonFrameYPos
 * @text カード交換ボタン(STARTボタン)の選択フレームのY座標
 * @desc カード交換ボタン(STARTボタン)の選択フレームのY座標
 * @type number
 * @default 539
 * @parent windowPosition
 * 
 * @param nowCoinPosX
 * @text 手持ちコインの表示ウィンドウのX座標
 * @desc 手持ちコインの表示ウィンドウのX座標
 * @type number
 * @default 23
 * @parent windowPosition
 * 
 * @param nowCoinPosY
 * @text 手持ちコインの表示ウィンドウのY座標
 * @desc 手持ちコインの表示ウィンドウのY座標
 * @type number
 * @default 542
 * @parent windowPosition
 * 
 * @param nowCoinWindowWidth
 * @text 手持ちコインの表示ウィンドウの幅
 * @desc 手持ちコインの表示ウィンドウの幅
 * @type number
 * @default 235
 * @parent windowPosition
 * 
 * @param nowCoinPosHeight
 * @text 手持ちコインの表示ウィンドウの高さ
 * @desc 手持ちコインの表示ウィンドウの高さ
 * @type number
 * @default 70
 * @parent windowPosition
 * 
 * @param betCoinPosX
 * @text BETコインの表示ウィンドウのX座標
 * @desc BETコインの表示ウィンドウのX座標
 * @type number
 * @default 565
 * @parent windowPosition
 * 
 * @param betCoinPosY
 * @text BETコインの表示ウィンドウのY座標
 * @desc BETコインの表示ウィンドウのY座標
 * @type number
 * @default 542
 * @parent windowPosition
 * 
 * @param betCoinWindowWidth
 * @text BETコインの表示ウィンドウの幅
 * @desc BETコインの表示ウィンドウの幅
 * @type number
 * @default 235
 * @parent windowPosition
 * 
 * @param betCoinPosHeight
 * @text BETコインの表示ウィンドウの高さ
 * @desc BETコインの表示ウィンドウの高さ
 * @type number
 * @default 100
 * @parent windowPosition
 * 
 * @param betCoinListWindowWidth
 * @text BETコイン枚数選択ウィンドウの幅
 * @desc BETコイン枚数選択ウィンドウの幅
 * @type number
 * @default 100
 * @parent windowPosition
 * 
 * @param betCoinListWindowHeight
 * @text BETコイン枚数選択ウィンドウの高さ
 * @desc BETコイン枚数選択ウィンドウの高さ
 * @type number
 * @default 145
 * @parent windowPosition
 * 
 * @param yesNoWindowWidth
 * @text はい/いいえ選択ウィンドウの幅
 * @desc はい/いいえ選択ウィンドウの幅
 * @type number
 * @default 120
 * @parent windowPosition
 * 
 * @param yesNoWindowHeight
 * @text はい/いいえ選択ウィンドウの高さ
 * @desc はい/いいえ選択ウィンドウの高さ
 * @type number
 * @default 110
 * @parent windowPosition
 * 
 * @param languageInfo
 * @text -> メッセージ関連の情報（他言語化向け） <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param roleStruct
 * @text 役の情報
 * @desc 役の情報（他言語化や役の倍率を変更したい時にご使用ください）
 * @type struct<RoleInfo>[]
 * @default ["{\"strength\":\"1\",\"role\":\"ロイヤルストレートフラッシュ\",\"magni\":\"1000\"}","{\"strength\":\"2\",\"role\":\"ファイブカード\",\"magni\":\"500\"}","{\"strength\":\"3\",\"role\":\"ストレートフラッシュ\",\"magni\":\"300\"}","{\"strength\":\"4\",\"role\":\"フォーカード\",\"magni\":\"100\"}","{\"strength\":\"5\",\"role\":\"フルハウス\",\"magni\":\"50\"}","{\"strength\":\"6\",\"role\":\"フラッシュ\",\"magni\":\"40\"}","{\"strength\":\"7\",\"role\":\"ストレート\",\"magni\":\"30\"}","{\"strength\":\"8\",\"role\":\"スリーカード\",\"magni\":\"5\"}","{\"strength\":\"9\",\"role\":\"ツーペア\",\"magni\":\"2\"}","{\"strength\":\"10\",\"role\":\"ワンペア\",\"magni\":\"1\"}"]
 * @parent languageInfo
 * 
 * @param betInfoStr
 * @text BET時の説明文
 * @desc BET時の説明文
 * @type String
 * @default BET枚数を選んでください
 * @parent languageInfo
 * 
 * @param winMessage1
 * @text 勝利時メッセージ1
 * @desc 勝利時に1行目に表示するメッセージです。
 * 役名は%sを固定で入力してください。
 * @type String
 * @default YOU WIN!! %sです!!
 * @parent languageInfo
 * 
 * @param winMessage2
 * @text 勝利時メッセージ2
 * @desc 勝利時に2行目に表示するメッセージです。
 * コイン枚数は%dを固定で入力してください。
 * @type String
 * @default コイン%d枚獲得です!!
 * @parent languageInfo
 * 
 * @param notCoinMessage
 * @text コインが足りない時用のメッセージ
 * @desc コインが足りない時用のメッセージです。
 * @type String
 * @default コインが足りません
 * @parent languageInfo
 * 
 * @param loseMessage1
 * @text 敗北時に表示するメッセージ1行目
 * @desc 敗北時に1行目に表示するメッセージ
 * @type String
 * @default YOU LOSE
 * @parent languageInfo
 * 
 * @param loseMessage2
 * @text 勝利時・敗北時次プレイを確認するときの共通メッセージ
 * @desc 勝利時に1行目、敗北時に2行目に表示するメッセージ
 * @type String
 * @default 続けてポーカーを行いますか？
 * @parent languageInfo
 * 
 * @param yesLanguage
 * @text はい/いいえ選択肢の「はい」の文言
 * @desc はい/いいえ選択肢の「はい」の文言
 * @type String
 * @default はい
 * @parent languageInfo
 * 
 * @param noLanguage
 * @text はい/いいえ選択肢の「いいえ」の文言
 * @desc はい/いいえ選択肢の「いいえ」の文言
 * @type String
 * @default いいえ
 * @parent languageInfo
 * 
 * @help
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * 本プラグインは、ゲーム内にてポーカーゲームを実装するプラグインです。
 * 
 * 【プラグインインストール方法】
 *   1.解凍後、出来上がった以下のフォルダを所定の位置に配置してください
 *     1-1.audio/bgm/bgm_kajino.ogg
 *     配置場所※1：RPGツクールのプロジェクト/audio/bgm/
 *
 *     1-2.audio/se/seWin.ogg
 *         audio/se/seLose.ogg
 *         audio/se/seRoyalStraightFlush.ogg
 *         audio/se/slide.ogg
 *     配置場所※1：RPGツクールのプロジェクト/audio/se/
 *
 *     1-3.jsファイルの配置場所
 *     配置場所：js/plugins
 *
 *     1-4.画像ファイルの配置場所
 *     配置場所：img/tPoker
 *     配置場所※1：RPGツクールのプロジェクト/img/の直下に「tPoker」フォルダごと配置してください
 * 
 * 【プラグイン設定方法】
 *    1.RPGツクールMV(RPGツクールMZ)を起動
 *    2.メニュー画面より、「プラグイン管理」を選択
 *    3.プラグイン管理画面にて「Tatsu_PokerGames」を追加後、「有効」に設定
 *    4.プラグインパラメータのコイン枚数保持用変数の設定をしてください
 * 
 * 【プラグイン呼び出し方法】
 *    ・イベントの「プラグインコマンド」に以下を入力
 *      RPGツクールMVの場合
 *        Tatsu_PokerGames start
 *
 *      RPGツクールMZの場合
 *        プラグイン名：Tatsu_PokerGames
 *        コマンド名：ポーカーの開始
 *
 *
 * 【プラグインパラメータの説明】
 *   1.コイン枚数保持用変数番号
 *     所持コインを保持する変数
 *     必ず設定をしてください
 * 
 *   2.リピートモード有効化スイッチ
 *     対象スイッチをONにした場合、
 *     最初に選択したBETを再ゲーム時に自動でBETができるようになるスイッチです
 *     ゲーム終了時に自動でOFFにならないのでイベント処理内でOFFにしてください
 * 
 *   3.ロイヤルストレートフラッシュ確率変動スイッチ
 *     ロイヤルストレートフラッシュの確率変動を有効化するためのスイッチです
 *     このスイッチがONの間は「2.ロイヤルストレートフラッシュの確率格納変数」に
 *     「設定した値%」の確率でロイヤルストレートフラッシュが手札に配られます
 *     特殊な動作をしたいときにお使いください
 * 
 *   4.ロイヤルストレートフラッシュの確率格納変数
 *     ロイヤルストレートフラッシュ確率変動スイッチがONの時
 *     この変数に設定されている値の確率でロイヤルストレートフラッシュが
 *     手札に配られます。特殊な動作をしたいときにお使いください
 *     注意：手札交換時ではなく、BET直後の手札を配られる時タイミングになります
 *     設定例：変数番号001に「10」と値を代入ー＞10%の確率でロイヤルストレートフラッシュが
 *            手札に配られます
 * 
 *   5.ロイヤルストレートフラッシュの確率変動有効回数
 *     「1.」と「2.」が有効な時のみ、ここで指定した回数ロイヤルストレートフラッシュを上がったら
 *      自動的に、「1.」の確率変動スイッチをOFFにします。
 *      数字が0の場合は、ずっと出続けます
 *      特殊な動作をしたいときにお使いください
 * 
 *   6.BETする際に選択ができるコインの枚数
 *     BETできるコインの枚数
 *     必ず設定をしてください
 *     3種類まで設定できます
 * 
 *   7.ポーカーを強制終了するシステムを有効化するスイッチ
 *     所持枚数と獲得枚数が指定の数を超えたら、ゲームを強制終了するシステムを有効化するスイッチです
 *     利用する場合は、ポーカー開始前にスイッチをONにしてください
 *
 *   8.終了条件を満たしていることを判別するためのスイッチ
 *     ポーカー終了時に、強制終了をしたかどうかを判定するためのスイッチです
 *     ポーカーが強制終了した場合は、このスイッチがONになります
 *     ポーカー開始前及び、強制終了の条件を満たさずに終了をした場合に強制的にOFFになります
 *
 *   9.強制終了にしたいコインの条件枚数を保持する変数
 *     強制終了にしたい条件のコインの枚数を保持する変数
 *     ポーカー開始前に、強制終了の条件にしたい枚数をこの変数に設定してください
 *     ポーカー開始前及び、強制終了の条件を満たさずに終了をした場合に強制的に0になります
 *
 *   10.ゲームBGM鳴動設定
 *     ゲームプレイ中に設定した専用のBGMを流すかを設定することができます
 *     true : 専用BGMを流す
 *     false: 専用BGMを流さない
 *
 *   11.ゲームBGM設定
 *     ゲームプレイ中に流したい専用のBGMのファイル名を入力してください
 *     ※専用BGMを使わない場合は、空で大丈夫です
 *
 *   12.役を上がったときのSE音
 *     役を上がったときに流したいSEのファイル名を入力してください
 *
 *   13.役が揃わなかった時のSE音
 *     役が揃わなかった時に流したいSEのファイル名を入力してください
 *
 *   14.ロイヤルストレートフラッシュを上がった時に流したいSE音
 *     ロイヤルストレートフラッシュを上がった時に流したいSEのファイル名を入力してください
 *
 *   15.背景画像ファイル設定
 *     利用したい背景画像のファイル名を入力してください
 * 
 *   ----ここから下はゲーム画面サイズを変更した場合の設定です----
 *   16.カード交換ボタン(STARTボタン)の選択フレームのX座標
 *     STARTボタンを選択するフレームの位置のX座標
 *     
 *   17.カード交換ボタン(STARTボタン)の選択フレームのY座標
 *     STARTボタンを選択するフレームの位置のY座標
 * 
 *   18.手持ちコインの表示ウィンドウのX座標
 *     左下に表示される手持ちコインのウィンドウのX座標
 * 
 *   19.手持ちコインの表示ウィンドウのY座標
 *     左下に表示される手持ちコインのウィンドウのY座標
 * 
 *   20.手持ちコインの表示ウィンドウの幅
 *     左下に表示される手持ちコインのウィンドウの幅
 * 
 *   21.手持ちコインの表示ウィンドウの高さ
 *     左下に表示される手持ちコインのウィンドウの高さ
 * 
 *   22.BETコインの表示ウィンドウのX座標
 *     右下に表示されるBETコインのウィンドウのX座標
 * 
 *   23.BETコインの表示ウィンドウのY座標
 *     右下に表示されるBETコインのウィンドウのY座標
 * 
 *   24.BETコインの表示ウィンドウの幅
 *     右下に表示されるBETコインのウィンドウの幅
 * 
 *   25.BETコインの表示ウィンドウの高さ
 *     右下に表示されるBETコインのウィンドウの高さ
 * 
 *   26.BETコイン枚数選択ウィンドウの幅
 *    コインをBETする時に表示される選択肢ウィンドウの幅
 * 
 *   27.BETコイン枚数選択ウィンドウの高さ
 *    コインをBETする時に表示される選択肢ウィンドウの高さ
 * 
 *   28.はい/いいえ選択ウィンドウの幅
 *     はい/いいえ選択を表示しているウィンドウの幅
 * 
 *   29.はい/いいえ選択ウィンドウの高さ
 *     はい/いいえ選択を表示しているウィンドウの高さ
 * 
 * ----ここからは言語関連+αの設定になります。表示されている言語を別言語にしたい場合にご利用してください----
 *   30.役の情報
 *     役の情報を変更したい場合、内容の情報を修正してください
 *     変更できる情報
 *     役の強さ、役の名前、役の倍率
 *     ※1が一番強く、10が一番弱いです
 *     ※倍率を変えたい場合や、役の名前を英語表記にしたい場合などにご利用ください
 * 
 *   31.BET時の説明文
 *     ※別添えの添付画像(1番の項目)にて該当箇所を説明
 * 
 *   32.勝利時メッセージ1
 *     ※別添えの添付画像(2番の項目)にて該当箇所を説明
 * 
 *   33.勝利時メッセージ2
 *     ※別添えの添付画像(3番の項目)にて該当箇所を説明
 * 
 *   34.コインが足りない時用のメッセージ
 *     ※別添えの添付画像(4番の項目)にて該当箇所を説明
 * 
 *   35.敗北時に表示するメッセージ1行目
 *     ※別添えの添付画像(5番の項目)にて該当箇所を説明
 * 
 *   36.勝利時・敗北時次プレイを確認するときの共通メッセージ
 *     ※別添えの添付画像(6番の項目)にて該当箇所を説明
 * 
 *   37.はい/いいえ選択肢の「はい」の文言
 *     はい/いいえの選択肢が表示されている時の「はい」の文言
 * 
 *   38.はい/いいえ選択肢の「いいえ」の文言
 *     はい/いいえの選択肢が表示されている時の「いいえ」の文言
 * 
 * 【ルール】
 *   ・ポーカー
 *    1.BET枚数を選択してください
 *    2.手札にカードが配られます
 *    3.いらないカードを選択してください（選択するとカードが裏返ります
 *    4.いらないカードを選択し終わったら、STARTボタンを押してください
 *    5.カードの交換が終わり、役が揃っていた場合、役に応じた配当コインがもらえます
 *    6.リピートモードをONにしている時は、再度ゲームを行う際に、同じ額のコインが自動でBETされます
 *
 * 【操作方法】
 *    ・十字キーを使う場合（ポーカー）
 *      ↑キー : STARTにカーソルがあっている場合、カードにカーソルをあてます
 *      ↓キー : カードにカーソルがあっている場合、STARTにカーソルをあてます
 *      ←キー : カーソルの移動
 *      →キー : カーソルの移動
 *      決定キー : カードにカーソルが当たっている場合
 *                 ・表になっている場合 : 裏返しにして、交換対象にします。
 *                 ・裏になっている場合 : 表にして、交換しないようにします
 *                STARTにカーソルが当たっている場合
 *                  カードを交換します
 * 
 *    ・マウスを使う場合
 *      カードをクリック : 選択したカードが表の場合、裏返しにして交換対象にします
 *                      選択したカードが裏の場合、表にして交換しないようにします
 * 
 *      STARTをクリック : カードを交換します
 *【注意点】
 *   ・ゲーム終了時にリピートモードをOFFにしてください。（自動でリピートモードはOFFになりません）
 *-----------------------------------------------------------------------------
 * 変更履歴
 *-----------------------------------------------------------------------------
 * 
 * Ver 1.0.0 初版
 * Ver 1.0.1 BGMの音量を調整
 *           コインが足りない時、クリックで戻れない問題を対応
 *           BETコインの枚数をプラグインパラメータで管理できるように対応
 *           コイン加算のタイミングを変更
 * Ver 1.0.2 ジョーカーを含むストレートフラッシュ/ストレートにて
 *           一部の揃い方では成立しない問題の対応
 *           プラグインパラメータに「はい/いいえ」の「ウィンドウ高さ」を追加
 * 
 * Ver 1.0.3 ジョーカーを含むストレートフラッシュ/ストレートにて
 *           一部の揃い方では成立しない問題の対応
 * 
 * Ver 1.0.4 ロイヤルストレートフラッシュ確率変動処理の導入
 * 
 * Ver 1.0.5 画面サイズと、画面UIサイズが異なる場合に、レイアウトが崩れてしまう問題を対応
 * 
 * Ver 1.1.0 リピートモードを搭載
 *           コインが足りない場合もBETできてしまう問題も修正
 *           
 *-----------------------------------------------------------------------------
 *-----------------------------------------------------------------------------
 * 素材著作権
 *-----------------------------------------------------------------------------
 * 
 * 【デフォルトで使用している音楽、および効果音】
 * 　->魔王魂樣
 * 【URL】
 * 　->https://maoudamashii.jokersounds.com/
 * 
 *
 * 【ロイヤルストレートフラッシュの演出用画像/JOKERのイラスト】
 * 　->ぴぽや様
 * 【URL】
 * 　-> https://pipoya.net/
 * 
 * 【JOKER以外のトランプ素材/背景画像】
 * 　->タツノコ
 * 【URL】
 * 　-> https://layerprogram.com/
 * 
 *-----------------------------------------------------------------------------
 * その他利用規約
 *-----------------------------------------------------------------------------
 * その他利用規約については添付の「readme.txt」「必ずお読みください.txt」をご覧ください。
 *
 */
/*~struct~RoleInfo:
 * @param strength
 * @text 強さ
 * @desc 何番目に強いか
 * @type Number
 * 
 * @param role
 * @text 役
 * @desc 役
 * @type string
 * 
 * @param magni
 * @text 倍率
 * @desc 倍率
 * @type number
*/
//=============================================================================
(function () {

    'use strict';

    // ==CONST周り-start==================================================
    const TATSU_POKER_PLUGIN_NAME = 'Tatsu_PokerGames';

    const ROLE_AND_MAGNIFICATION = {
        1: ["ロイヤルストレートフラッシュ", 1000],
        2: ["ファイブカード", 500],
        3: ["ストレートフラッシュ", 300],
        4: ["フォーカード", 100],
        5: ["フルハウス", 50],
        6: ["フラッシュ", 40],
        7: ["ストレート", 30],
        8: ["スリーカード", 5],
        9: ["ツーペア", 2],
        10: ["ワンペア", 1]
    };
    const ROLE_INDEX = 0;
    const MAGNIFICATION_INDEX = 1;

    const ROLE_ROYALSTRAIGHTFLASH = 1;
    const ROLE_FIVECARD = 2;
    const ROLE_STRAIGHTFLASH = 3;
    const ROLE_FOURCARD = 4;
    const ROLE_FULLHOUSE = 5;
    const ROLE_FLASH = 6;
    const ROLE_STRAIGHT = 7;
    const ROLE_THREECARD = 8;
    const ROLE_TWOPAIR = 9;
    const ROLE_ONEPAIR = 10;
    const ROLE_HIGHCARD = 11;

    const TATSU_POKER_MSG_KAKEKINWO = "BET枚数を選んでください"
    const TATSU_POKER_MSG_WINMESSA1 = "YOU WIN!! %sです!!"
    const TATSU_POKER_MSG_WINMESSA2 = "コイン%d枚獲得です!!"
    const TATSU_POKER_MSG_NOTCOIN = "コインが足りません"

    const TATSU_POKER_MSG_LOSE_MESSAGE1 = "YOU LOSE"
    const TATSU_POKER_MSG_LOSE_MESSAGE2 = "続けてポーカーを行いますか？"
    const TATSU_POKER_MSG_WINCONFIRM_MESSAGE1 = "YOU WIN"
    const TATSU_POKER_MSG_WINCONFIRM_MESSAGE2 = "続けてポーカーを行いますか？"

    const MODE_POKER = "poker";

    const TURN_FADEIN = "fadein";
    const TURN_SELECTBET = "selectBet";
    const TURN_DISTRIBUTE = "distribute";
    const TURN_INIT = "init";
    const TURN_START = "start";
    const TURN_CARDCHANGE = "cardChange";
    const TURN_ROLE_CHECK = "roleCheck";
    const TURN_ROYALSTRAIGHTFLUSHANIMATION = "ROYALSTRAIGHTFLUSHANIMATION";
    const TURN_ROLE_COMMITANIMATION = "roleCommit";
    const TURN_NEXT_CONFIRM = "nextConfirm";
    const TURN_NOTCOIN = "notCoin";

    const CARD_INIT_POS_Y = 30;
    const CARD_STATUS_OPEN_Y = 1920;
    const CARD_STATUS_OPEN_X = 0;
    const CARD_STATUS_CLOSE_Y = 0;

    const CARD_IMG_WIDTH = 200;
    const CARD_IMG_HEIGHT = 320;
    const ROYALSTRAIGHTFLUSHCOINSPRITE_WIDTH = 640;
    const ROYALSTRAIGHTFLUSHCOINSPRITE_HEIGHT = 240;
    const STRAIGHT_PATTERN =
        [
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6],
            [4, 5, 6, 7],
            [5, 6, 7, 8],
            [6, 7, 8, 9],
            [7, 8, 9, 10],
            [8, 9, 10, 11],
            [9, 10, 11, 12],
            [10, 11, 12, 13],
            [1, 3, 4, 5],
            [1, 2, 4, 5],
            [1, 2, 3, 5],
            [2, 4, 5, 6],
            [2, 3, 5, 6],
            [2, 3, 4, 6],
            [3, 5, 6, 7],
            [3, 4, 6, 7],
            [3, 4, 5, 7],
            [4, 6, 7, 8],
            [4, 5, 7, 8],
            [4, 5, 6, 8],
            [5, 7, 8, 9],
            [5, 6, 8, 9],
            [5, 6, 7, 9],
            [6, 8, 9, 10],
            [6, 7, 9, 10],
            [6, 7, 8, 10],
            [7, 9, 10, 11],
            [7, 8, 10, 11],
            [7, 8, 9, 11],
            [8, 10, 11, 12],
            [8, 9, 11, 12],
            [8, 9, 10, 12],
            [9, 11, 12, 13],
            [9, 10, 12, 13],
            [9, 10, 11, 13]
        ];

    // ==CONST周り-end==================================================

    // ==プラグインパラメータ周り-start==================================================
    let getArgJson = function (arg, defaultValue) {
        try {
            arg = JSON.parse(arg || null);
            if (arg === null) {
                arg = defaultValue;
            }
        } catch (e) {
            alert(`!!!Plugin param is wrong.!!!\nPlugin:${TATSU_POKER_PLUGIN_NAME}.js\nValue:${arg}`);
            arg = defaultValue;
        }
        return arg;
    };

    let listObjectGetJson = function (parameter) {
        if (parameter == undefined || parameter == null) {
            return null;
        }

        var paramReplacer = function (key, value) {
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        };
        let parse1 = JSON.parse(parameter);
        let parse2 = JSON.stringify(parse1, paramReplacer);
        let parse3 = JSON.parse(parse2);
        return parse3;
    };

    var TatsuPokerGameP = TatsuPokerGameP || {};

    let isRpgMakerMV = function () {
        return (Utils.RPGMAKER_NAME == "MV");
    };

    var parameterNotNull = function () {
        var para = null;
        if (isRpgMakerMV()) {
            para = PluginManager.parameters(TATSU_POKER_PLUGIN_NAME);
        } else {
            var para = PluginManager.parameters(decodeURIComponent(document.currentScript.src).match(/^.*\/js\/plugins\/(.+)\.js$/)[1]);
            if (!para["startButonFrameXPos"]) {
                para = PluginManager.parameters(TATSU_POKER_PLUGIN_NAME);
            }
        }
        return para;
    };

    var parameters = parameterNotNull();
    TatsuPokerGameP.coinVariable = Number(parameters['coinVariable'] || 0);
    TatsuPokerGameP.betInfoStr = String(parameters['betInfoStr'] || TATSU_POKER_MSG_KAKEKINWO);
    TatsuPokerGameP.winMessage1 = String(parameters['winMessage1'] || TATSU_POKER_MSG_WINMESSA1);
    TatsuPokerGameP.winMessage2 = String(parameters['winMessage2'] || TATSU_POKER_MSG_WINMESSA2);

    TatsuPokerGameP.loseMessage1 = String(parameters['loseMessage1'] || TATSU_POKER_MSG_LOSE_MESSAGE1);
    TatsuPokerGameP.loseMessage2 = String(parameters['loseMessage2'] || TATSU_POKER_MSG_LOSE_MESSAGE2);

    TatsuPokerGameP.notCoinMessage = String(parameters['notCoinMessage'] || TATSU_POKER_MSG_NOTCOIN);
    TatsuPokerGameP.backgroundImage = String(parameters['backgroundImage'] || null);
    TatsuPokerGameP.startButonFrameXPos = Number(parameters['startButonFrameXPos'] || 288);
    TatsuPokerGameP.startButonFrameYPos = Number(parameters['startButonFrameYPos'] || 539);
    TatsuPokerGameP.betCoinList = getArgJson(parameters['betCoinList'] || [1, 10, 100]);
    TatsuPokerGameP.betCoinListWindowWidth = Number(parameters['betCoinListWindowWidth'] || 100);
    TatsuPokerGameP.betCoinListWindowHeight = Number(parameters['betCoinListWindowHeight'] || 150);

    TatsuPokerGameP.nowCoinPosX = Number(parameters['nowCoinPosX'] || 23);
    TatsuPokerGameP.nowCoinPosY = Number(parameters['nowCoinPosY'] || 542);
    TatsuPokerGameP.nowCoinWindowWidth = Number(parameters['nowCoinWindowWidth'] || 235);
    TatsuPokerGameP.nowCoinPosHeight = Number(parameters['nowCoinPosHeight'] || 70);

    TatsuPokerGameP.betCoinPosX = Number(parameters['betCoinPosX'] || 565);
    TatsuPokerGameP.betCoinPosY = Number(parameters['betCoinPosY'] || 542);
    TatsuPokerGameP.betCoinWindowWidth = Number(parameters['betCoinWindowWidth'] || 235);
    TatsuPokerGameP.betCoinPosHeight = Number(parameters['betCoinPosHeight'] || 70);

    TatsuPokerGameP.yesLanguage = String(parameters['yesLanguage'] || "はい");
    TatsuPokerGameP.noLanguage = String(parameters['noLanguage'] || "いいえ");
    TatsuPokerGameP.roleStruct = listObjectGetJson(parameters['roleStruct']);

    TatsuPokerGameP.yesNoWindowWidth = Number(parameters['yesNoWindowWidth'] || 120);
    TatsuPokerGameP.yesNoWindowHeight = Number(parameters['yesNoWindowHeight'] || 120);

    TatsuPokerGameP.rsfPercentageSwitch = Number(parameters['rsfPercentageSwitch'] || 0);
    TatsuPokerGameP.rsfPercentage = Number(parameters['rsfPercentage'] || 0);
    TatsuPokerGameP.rsfCnt = Number(parameters['rsfCnt'] || 0);

    // BGM
    TatsuPokerGameP.useBGMStr = String(parameters['useBGM'] || 'false');
    TatsuPokerGameP.backBGM = String(parameters['backBGM'] || null);
    TatsuPokerGameP.winSe = String(parameters['winSe'] || null);
    TatsuPokerGameP.loseSe = String(parameters['loseSe'] || null);
    TatsuPokerGameP.royalstraightFlushSe = String(parameters['royalstraightFlushSe'] || null);

    TatsuPokerGameP.reapeatMode = Number(parameters['reapeatMode'] || 0);
    // ==プラグインパラメータ周り-end==================================================

    // 固定function周り -- start
    function loadBitmapByTPokerPluginFolder(fileName) {
        return ImageManager.loadBitmap('img/tPoker/', fileName);
    };

    function getWindowMessage() {
        let wm = null;
        if (isRpgMakerMV()) {
            // VerMV
            wm = new Window_Message();
        } else {
            // VerMZ
            wm = new Window_Message(getWindowMessageRect());
            wm.setGoldWindow(new Window_Gold(getdummyWindowRect()));
            wm.setNameBoxWindow(new Window_NameBox());
            wm.setChoiceListWindow(new Window_ChoiceList());
            wm.setNumberInputWindow(new Window_NumberInput());
            wm.setEventItemWindow(new Window_EventItem(getdummyWindowRect()));
        }

        return wm;
    };

    function getWindowMessageRect() {
        var rect = new Rectangle();
        var width = Graphics.boxWidth;
        var height = 4 * 36 + 18;
        var x = (Graphics.boxWidth - width) / 2;
        rect.x = x;
        rect.y = Graphics.boxHeight - height;
        rect.width = width;
        rect.height = height;
        return rect;
    };

    function getWindowBaseRect(x, y, width, height) {
        if (isRpgMakerMV()) {
            return new Window_Base(x, y, width, height);
        } else {
            return new Window_Base(getdummyWindowRectParameter(x, y, width, height));
        }
    };

    function getdummyWindowRectParameter(x, y, width, height) {
        var rect = new Rectangle();
        rect.x = x;
        rect.y = y;
        rect.width = width;
        rect.height = height;
        return rect;
    };

    function getdummyWindowRect() {
        var rect = new Rectangle();
        var width = 1;
        var height = 1;
        rect.x = 0;
        rect.y = 0;
        rect.width = width;
        rect.height = height;
        return rect;
    };

    function getCenterPos(arg1width, arg2width) {
        return (arg1width / 2) - (arg2width / 2)
    };

    // 固定function周り -- end

    function CardInfo() {
        this.initialize.apply(this, arguments);
    };

    CardInfo.prototype.initialize = function (sprite, num, mark, isOpen, isJoker) {
        this._sprite = sprite;
        if (isOpen) {
            this._sprite.setFrame(0, 320 * 6, 200, 320);
        } else {
            this._sprite.setFrame(0, 0, 200, 320);
        }
        this._num = num;
        this._mark = mark;
        this._isOpen = isOpen;
        this._isJoker = isJoker;
        this._isHand = false;
        this._initFinish = false;
        this._isSelected = false;
    };

    CardInfo.prototype.getSprite = function () {
        return this._sprite;
    };

    CardInfo.prototype.getImgWidth = function () {
        return this._sprite.width;
    };

    CardInfo.prototype.getImgHeight = function () {
        return this._sprite.height;
    };

    CardInfo.prototype.getMark = function () {
        return this._mark;
    };

    CardInfo.prototype.getNum = function () {
        return this._num;
    };

    CardInfo.prototype.getMarkNum = function () {
        return this._mark + this._num;
    };

    CardInfo.prototype.getIsOpen = function () {
        return this._isOpen;
    };

    CardInfo.prototype.setIsOpen = function (isOpen) {
        this._isOpen = isOpen;
    };

    CardInfo.prototype.getIsJoker = function () {
        return this._isJoker;
    };

    CardInfo.prototype.setIsHand = function (isHand) {
        return this._isHand;
    };

    CardInfo.prototype.getIsHand = function () {
        return this._isHand;
    };

    CardInfo.prototype.getInitFinish = function () {
        return this._initFinish;
    };

    CardInfo.prototype.setInitFinish = function (isFinish) {
        this._initFinish = isFinish;
    };

    CardInfo.prototype.getSelected = function () {
        return this._isSelected;
    };

    CardInfo.prototype.setSelected = function (isSelected) {
        this._isSelected = isSelected;
    };

    let pluginName = "Tatsu_PokerGames";
    if (isRpgMakerMV()) {
        let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand.call(this, command, args);
            if (command === pluginName) {
                switch (args[0]) {
                    case 'start':
                        if (TatsuPokerGameP.coinVariable == 0) {
                            alert("プラグインパラメータのコイン枚数管理用変数が\n設定されてません。");
                        } else {
                            SceneManager.push(Scene_PokerScene);
                        }
                }
            }
        };
    } else {
        PluginManager.registerCommand(pluginName, "start", args => {
            if (TatsuPokerGameP.coinVariable == 0) {
                alert("プラグインパラメータのコイン枚数管理用変数が\n設定されてません。");
            } else {
                SceneManager.push(Scene_PokerScene);
            }
        });
    }


    function Scene_PokerScene() {
        this.initialize.apply(this, arguments);
    };

    Scene_PokerScene.prototype = Object.create(Scene_Base.prototype);
    Scene_PokerScene.prototype.constructor = Scene_PokerScene;
    Scene_PokerScene.prototype.initialize = function () {
        Scene_Base.prototype.initialize.call(this);
        this.initializeRoleInfo();

        TatsuPokerGameP.useBGM = String(TatsuPokerGameP.useBGMStr) === "true" ? true : false;
        this._markList = ["s", "h", "c", "d", "j"];
        this._allCardList = new Array();
        this._turn = TURN_FADEIN;
        this._handCardList = new Array();
        this._openCardCnt = 0;
        this._changeCardCnt = 0;
        this._isSelectedCord = false;
        this._cursolAnimationCnt = 10;
        this._cardAnimationFlag = 0;
        this._cardAnimationCnt = 0;
        this._animationTargetCardInfo = null;
        this._betCoin = 0;
        this._nowSelectCardInex = 0;
        this._mode = MODE_POKER;
        this._changeTargetCardNumberList = new Array();
        this._checkRole = ROLE_HIGHCARD;
        this._roleCommitAnimationCnt = 0;
        this._winCoin = 0;
        this._royalStraightFlushAnimaitonCnt = 0;
        this._royalStraightFlushAnimaitonPosCntX = 0;
        this._royalStraightFlushAnimaitonPosCntY = 0;
        this._royalStraightFlushCnt = 0;
        this._repeatBet = 0;
        this._repeatFlag = false;
    };

    Scene_PokerScene.prototype.initializeRoleInfo = function () {
        this._roleStructInfo = null;
        if (TatsuPokerGameP.roleStruct != undefined && TatsuPokerGameP.roleStruct != null && TatsuPokerGameP.roleStruct.length > 0) {
            let rtnAr = {};
            for (let i = 0; i < TatsuPokerGameP.roleStruct.length; i++) {
                let roleStruct = TatsuPokerGameP.roleStruct[i];
                rtnAr[roleStruct.strength] = new Array();
                rtnAr[roleStruct.strength].push(roleStruct.role);
                rtnAr[roleStruct.strength].push(roleStruct.magni);
            }
            this._roleStructInfo = rtnAr;
        } else {
            this._roleStructInfo = ROLE_AND_MAGNIFICATION;
        }
    };

    Scene_PokerScene.prototype.create = function () {
        Scene_Base.prototype.create.call(this);
        this.createBackground();
        this.createImgBord();
        this.createWindowLayer();
        this.createCardImg();
        this.createRole();
        this._scoreInfoWindow = getWindowBaseRect(0, 0, 816, 250);
        this.addWindow(this._scoreInfoWindow);

        let messageWindowWidth = 1024;
        let messageCneterXPos = getCenterPos(Graphics.boxWidth, messageWindowWidth);
        this._WindowMsg = new Window_MessageInfo_Window(messageCneterXPos, 230, messageWindowWidth, 145);
        this.addWindow(this._WindowMsg);
        this._WindowMsg.drawMessage(TatsuPokerGameP.betInfoStr);
        this._WindowMsg.deactivate();
        this._WindowMsg.open();

        this._scoreInfoWindow.deactivate();
        this._selectBetWindow = new Window_coinBet_Select();
        this._selectBetWindow.setHandler('ok', this.selectBet.bind(this));
        this._selectBetWindow.deactivate();
        this._selectBetWindow.close();
        this.addWindow(this._selectBetWindow);
        this._yesNoWindow = new Window_YesNo_Window();
        this._yesNoWindow.setHandler('ok', this.selectYesNo.bind(this));
        this._yesNoWindow.deactivate();
        this._yesNoWindow.close();
        this.addWindow(this._yesNoWindow);
        this._scoreInfoWindow.opacity = 0;

        this._nowCoinWindows = new Window_coin_window(
            TatsuPokerGameP.nowCoinPosX,
            TatsuPokerGameP.nowCoinPosY,
            TatsuPokerGameP.nowCoinWindowWidth,
            TatsuPokerGameP.nowCoinPosHeight);
        this.addWindow(this._nowCoinWindows);

        this._nowCoinWindows.reDrawCoin($gameVariables.value(TatsuPokerGameP.coinVariable));
        this._nowCoinWindows.opacity = 0;

        this._betWindow = new Window_BetCoin_window(
            TatsuPokerGameP.betCoinPosX,
            TatsuPokerGameP.betCoinPosY,
            TatsuPokerGameP.betCoinWindowWidth,
            TatsuPokerGameP.betCoinPosHeight);
        this.addWindow(this._betWindow);
        this._betWindow.reDrawCoin(0);
        this._betWindow.opacity = 0;

        let roleAndMagnificationLength = Object.keys(this._roleStructInfo).length;
        let roleAndMagnificationHalfLength = Math.floor(roleAndMagnificationLength / 2);
        let xline = 0;
        let yline = 0;

        for (let i = 0; i < roleAndMagnificationLength; i++) {
            let roleAndScore = this._roleStructInfo[i + 1];
            for (let j = 0; j < roleAndScore.length; j++) {
                let str = (j == 1) ? "×" + roleAndScore[j] : roleAndScore[j];
                let align = (j == 1) ? "right" : "left";
                this._scoreInfoWindow.drawText(str, j * 120 + xline * 400, yline * 40, 250, align);
            }
            yline++;
            if ((i + 1) == roleAndMagnificationHalfLength) {
                xline++;
                yline = 0;
            }
        }
    };

    Scene_PokerScene.prototype.selectBet = function () {
        let index = this._selectBetWindow.index();
        if (this._turn == TURN_SELECTBET && index >= 0) {
            this._betCoin = this._selectBetWindow.getNowSelectIndexData();
            this._betWindow.reDrawCoin(this._betCoin);
            let zanCoin = $gameVariables.value(TatsuPokerGameP.coinVariable) - this._betCoin;
            $gameVariables.setValue(TatsuPokerGameP.coinVariable, zanCoin);
            this._nowCoinWindows.reDrawCoin($gameVariables.value(TatsuPokerGameP.coinVariable));
            this._selectBetWindow.close();
            this._selectBetWindow.deactivate();
            this._WindowMsg.close();
            if ($gameSwitches.value(TatsuPokerGameP.reapeatMode)) {
                this._repeatFlag = true;
                this._repeatBet = this._betCoin;
            }
            this._turn = TURN_DISTRIBUTE;
        } else if (this._turn == TURN_SELECTBET && index < 0) {
            this._selectBetWindow.activate();
        } else if (this._turn == TURN_FADEIN) {
            this._selectBetWindow.activate();
        }
    };

    Scene_PokerScene.prototype.selectYesNo = function () {
        if (this._yesNoWindow.index() < 0) {
            this._yesNoWindow.activate();
            return;
        }

        let isYes = this._yesNoWindow.isNowSelectYes();

        if (this._mode == MODE_POKER) {
            if (this._yesNoWindow.isOpen()) {
                if (this._turn == TURN_NEXT_CONFIRM) {
                    if (isYes) {
                        this._betWindow.reDrawCoin(0);
                        this._WindowMsg.close();
                        this._yesNoWindow.deactivate();
                        this._yesNoWindow.close();

                        if ((this._repeatFlag &&
                            TatsuPokerGameP.reapeatMode != 0 &&
                            $gameSwitches.value(TatsuPokerGameP.reapeatMode) &&
                            this._repeatBet > $gameVariables.value(TatsuPokerGameP.coinVariable))) {
                            if (!this.validCoinVariable()) {
                                this._WindowMsg.open();
                            }
                            this._repeatFlag = false;
                            this._repeatBet = 0;
                        } else {
                            this._WindowMsg.drawMessage(TatsuPokerGameP.betInfoStr);
                            this._WindowMsg.open();
                        }
                        this._turn = TURN_FADEIN;
                    } else {
                        this.popScene();
                    }
                }
            }
        }
    };

    Scene_PokerScene.prototype.createImgBord = function () {
        this._mainBaseBord = new Sprite();
        this._infoBord = new Sprite();
        this._explanationBaseBord = new Sprite();
        this._coinBord = new Sprite();
        this._cardBord = new Sprite();
        this._cursolBord = new Sprite();
        this._royalStraightFlushAnimationSprite = new Sprite(loadBitmapByTPokerPluginFolder("royalstraighflushAnimation"));
        this.addChild(this._mainBaseBord);
        this.addChild(this._explanationBaseBord);
        this._scoreInfoBord = new Sprite(loadBitmapByTPokerPluginFolder("scoreGround"));
        this._explanationBaseBord.addChild(this._scoreInfoBord);
        this._mainBaseBord.addChild(this._infoBord);
        this._mainBaseBord.addChild(this._cardBord);
        this._mainBaseBord.addChild(this._coinBord);
        this._mainBaseBord.addChild(this._cursolBord);
        this._mainBaseBord.addChild(this._royalStraightFlushAnimationSprite);
        this._royalStraightFlushAnimationSprite.setFrame(0, 0, ROYALSTRAIGHTFLUSHCOINSPRITE_WIDTH, ROYALSTRAIGHTFLUSHCOINSPRITE_HEIGHT);
        this._royalStraightFlushAnimationSprite.opacity = 0;
        this._fadeSprite = new Sprite(loadBitmapByTPokerPluginFolder("fadeSprite"));
        this._cursolSprite = new Sprite(loadBitmapByTPokerPluginFolder("cursolFrame"));
        this._cursolSprite.opacity = 0;
        this._cursolSprite.scale.x = 0.6;
        this._cursolSprite.scale.y = 0.6;
        this._cursolBord.addChild(this._cursolSprite);
        this._cursolStartPosSprite = new Sprite(loadBitmapByTPokerPluginFolder("startFrame"));
        this._cursolStartPosSprite.opacity = 0;
        this._cursolStartPosSprite.x = TatsuPokerGameP.startButonFrameXPos;
        this._cursolStartPosSprite.y = TatsuPokerGameP.startButonFrameYPos;
        this._cursolBord.addChild(this._cursolStartPosSprite);

    };

    Scene_PokerScene.prototype.createBackground = function () {
        this._backGroundImg = new Sprite(loadBitmapByTPokerPluginFolder(TatsuPokerGameP.backgroundImage));
        this.addChild(this._backGroundImg);
    };

    Scene_PokerScene.prototype.createCardImg = function () {
        for (let i = 0; i < this._markList.length; i++) {
            if (this._markList[i] != "j") {
                for (let j = 1; j < 14; j++) {
                    let cardInfo = new CardInfo(
                        new Sprite(
                            loadBitmapByTPokerPluginFolder(
                                this._markList[i] + ('00' + j).slice(-2)
                            )
                        ),
                        j,
                        this._markList[i],
                        false,
                        false
                    );
                    this._allCardList.push(cardInfo);

                }
            } else {
                let jokercardInfo = new CardInfo(
                    new Sprite(loadBitmapByTPokerPluginFolder("joker")),
                    999,
                    this._markList[i],
                    false,
                    true
                );
                this._allCardList.push(jokercardInfo);
            }
        }
    };

    Scene_PokerScene.prototype.createRole = function () {
        // ロイヤルストレートフラッシュ(固定のためここで作っちゃう)
        this._royalStraightFlushList = new Array();
        for (let j = 0; j < this._markList.length; j++) {
            let markRoleList = new Array();
            for (let i = 1; i < 14; i++) {
                switch (i) {
                    case 1:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        markRoleList.push(String(this._markList[j] + String(i)));
                        break;
                }
            }
            this._royalStraightFlushList.push(markRoleList);
        }
    };

    Scene_PokerScene.prototype.isReady = function () {
        if (!Scene_Base.prototype.isReady.call(this)) {
            return false;
        }

        if (this._scoreInfoBord) {
            let isReadedScoreInfoBord = (this._scoreInfoBord.width > 0 && this._scoreInfoBord.height > 0)
            if (!isReadedScoreInfoBord) {
                return false;
            }
        }

        if (this._royalStraightFlushAnimationSprite) {
            let isReadedRsfAns = (this._royalStraightFlushAnimationSprite.width > 0 && this._royalStraightFlushAnimationSprite.height > 0)
            if (!isReadedRsfAns) {
                return false;
            }
        }

        return this.cardImgIsReady();
    };


    Scene_PokerScene.prototype.cardImgIsReady = function () {
        for (let i = 0; i < this._allCardList.length; i++) {
            let result = (this._allCardList[i] &&
                this._allCardList[i].getSprite() &&
                this._allCardList[i].getSprite().bitmap &&
                this._allCardList[i].getImgWidth() > 0 &&
                this._allCardList[i].getImgHeight() > 0);

            if (!result) {
                return false;
            }
        }
        return true;
    };

    Scene_PokerScene.prototype.start = function () {
        Scene_Base.prototype.start.call(this);
        this._scoreInfoBord.x = getCenterPos(Graphics.boxWidth, this._scoreInfoBord.width);
        this._scoreInfoBord.y = 10;
        this._scoreInfoWindow.x = this._scoreInfoBord.x;
        this._scoreInfoWindow.y = this._scoreInfoBord.y;
        this._royalStraightFlushAnimationSprite.x = getCenterPos(Graphics.boxWidth, 640);
        this._royalStraightFlushAnimationSprite.y = (getCenterPos(Graphics.boxHeight, 240) + 50);
        if (TatsuPokerGameP.useBGM) {
            $gameSystem.saveBgm();
            AudioManager.fadeOutBgm(1);
            if (TatsuPokerGameP.backBGM != "" && TatsuPokerGameP.backBGM != null) {
                AudioManager.playBgm({ "name": TatsuPokerGameP.backBGM, "volume": 40, "pitch": 100, "pan": 0 });
            } else {
                alert("警告：BGMが設定されていません。\nBGMを使わない場合は、プラグインパラメータ「 専用BGMを使うかどうか」を「false」にしてください。");
            }
        }
    };

    // ==== UPDATE処理 ==================-start
    Scene_PokerScene.prototype.update = function () {
        let a = this._handCardList;
        Scene_Base.prototype.update.call(this);
        switch (this._mode) {
            case MODE_POKER:
                switch (this._turn) {
                    case TURN_FADEIN:
                        if (!this.validCoinVariable()) {
                            this._WindowMsg.drawMessage(TatsuPokerGameP.notCoinMessage);
                            this._turn = TURN_NOTCOIN;
                        } else {
                            if (TatsuPokerGameP.reapeatMode != 0 && $gameSwitches.value(TatsuPokerGameP.reapeatMode) &&
                                this._repeatFlag && this._repeatBet <= $gameVariables.value(TatsuPokerGameP.coinVariable)) {
                                this._betCoin = this._repeatBet;
                                this._betWindow.reDrawCoin(this._betCoin);
                                let zanCoin = $gameVariables.value(TatsuPokerGameP.coinVariable) - this._betCoin;
                                $gameVariables.setValue(TatsuPokerGameP.coinVariable, zanCoin);
                                this._nowCoinWindows.reDrawCoin($gameVariables.value(TatsuPokerGameP.coinVariable));
                                this._selectBetWindow.close();
                                this._selectBetWindow.deactivate();
                                this._WindowMsg.close();
                                this._turn = TURN_DISTRIBUTE;
                            } else {
                                this._repeatFlag = false;
                                this._selectBetWindow.selectRefresh();
                                this._selectBetWindow.activate();
                                this._selectBetWindow.open();
                                this._selectBetWindow.select(0);
                                this._animationTargetCardInfo = null;
                                this._winCoin = 0;
                                this._turn = TURN_SELECTBET;
                            }
                        }
                        break;
                    case TURN_NOTCOIN:
                        if (Input.isTriggered('ok') || Input.isRepeated('ok') || TouchInput.isTriggered()) {
                            this.popScene();
                        }
                        break;
                    case TURN_SELECTBET:
                        if (Input.isTriggered('cancel') || Input.isRepeated('cancel') || TouchInput.isCancelled()) {
                            this.popScene();
                        }
                        break;
                    case TURN_DISTRIBUTE:
                        this.distributeCard();
                        break;
                    case TURN_INIT:
                        this.initGame();
                        break;
                    case TURN_START:
                        this.selectCardUpdateCommand();
                        break;
                    case TURN_CARDCHANGE:
                        this.execCardChange();
                        break;
                    case TURN_ROLE_CHECK:
                        this.checkRole();
                        break;
                    case TURN_ROYALSTRAIGHTFLUSHANIMATION:
                        this.winAnimation();
                        break;
                    case TURN_ROLE_COMMITANIMATION:
                        this.roleCommitAnimation();
                        break;
                    case TURN_NEXT_CONFIRM:
                        this.nextConfirm();
                        break;
                }
                break;
        }
    }
    // ==== UPDATE処理 ==================-end
    Scene_PokerScene.prototype.validCoinVariable = function () {
        let zanCoin = $gameVariables.value(TatsuPokerGameP.coinVariable);
        if (zanCoin < 1) {
            return false;
        }

        let coin = Number(TatsuPokerGameP.betCoinList[0]);
        for (let i = 1; i < TatsuPokerGameP.betCoinList.length; i++) {
            let tmpBet = TatsuPokerGameP.betCoinList[i];
            if (coin > tmpBet) {
                coin = tmpBet;
            }
        }
        if (coin > zanCoin) {
            return false;
        }

        return true;
    };

    Scene_PokerScene.prototype.distributeCard = function () {
        let indexList = new Array();
        if (this._handCardList && this._handCardList.length > 0) {
            this._handCardList.length = 0;
            this._handCardList = new Array();
        }

        // 初期化
        for (let i = 0; i < this._allCardList.length; i++) {
            this._allCardList[i].setIsHand(false);
            this._allCardList[i].getSprite().opacity = 0;
            this._allCardList[i].getSprite().setFrame(0, 0, 200, 320);
            this._allCardList[i].setIsOpen(false);
            this._allCardList[i].setInitFinish(false);
            this._allCardList[i].setSelected(false);
            this._cardBord.removeChild(this._allCardList[i].getSprite());
        }

        const cardScalesWidth = 120 + 30;
        let cardPosX = (Graphics.boxWidth / 2) + 20 - ((cardScalesWidth * 5) / 2);

        let rsfAddedMark = ["s10", "s11", "s12", "s13", "s1"];
        let isRoyalStraightFlush = false;
        if (TatsuPokerGameP.rsfPercentageSwitch &&
            TatsuPokerGameP.rsfPercentageSwitch > 0 &&
            TatsuPokerGameP.rsfPercentage &&
            TatsuPokerGameP.rsfCnt &&
            TatsuPokerGameP.rsfPercentageSwitch > 0 &&
            $gameSwitches.value(TatsuPokerGameP.rsfPercentageSwitch)) {
            let rand = Math.floor(Math.random() * 100);
            if (rand <= $gameVariables.value(TatsuPokerGameP.rsfPercentage)) {
                isRoyalStraightFlush = true;
                if (TatsuPokerGameP.rsfCnt > 0 && $gameVariables.value(TatsuPokerGameP.rsfCnt) > 0) {
                    this._royalStraightFlushCnt++;
                    if ($gameVariables.value(TatsuPokerGameP.rsfCnt) <= this._royalStraightFlushCnt) {
                        $gameSwitches.setValue(TatsuPokerGameP.rsfPercentageSwitch, false);
                    }
                }
            }
        }

        for (let i = 0; i < 5; i++) {
            var index = 0;
            if (isRoyalStraightFlush) {
                index = Math.floor(Math.random() * this._allCardList.length);
                let aaa = this._allCardList[index].getMarkNum();
                while (indexList.indexOf(index) >= 0 || rsfAddedMark.indexOf(this._allCardList[index].getMarkNum()) == -1) {
                    index = Math.floor(Math.random() * this._allCardList.length);
                }
            } else {
                index = Math.floor(Math.random() * this._allCardList.length);
                while (indexList.indexOf(index) >= 0) {
                    index = Math.floor(Math.random() * this._allCardList.length);
                }
            }

            var cardInfo = this._allCardList[index];
            this._handCardList.push(cardInfo);
            cardInfo.setIsHand(true);
            cardInfo.getSprite().setFrame(0, CARD_STATUS_OPEN_Y, CARD_IMG_WIDTH, CARD_IMG_HEIGHT);
            cardInfo.getSprite().y = CARD_INIT_POS_Y;
            cardInfo.getSprite().x = cardPosX + (i * cardScalesWidth);
            cardInfo.getSprite().scale.x = 0.6;
            cardInfo.getSprite().scale.y = 0.6;
            cardInfo.setIsOpen(true);
            indexList.push(index);
            this._cardBord.addChild(cardInfo.getSprite());
        }
        this._turn = TURN_INIT;
    };

    Scene_PokerScene.prototype.initGame = function () {

        if (!this._handCardList[this._openCardCnt].getInitFinish()) {
            this.initSoloCardGame(this._openCardCnt);
        }

        if (this._handCardList[this._handCardList.length - 1].getInitFinish()) {
            this.initDefaultSelectCard();
            this._cursolStartPosSprite.opacity = 0;
            this._turn = TURN_START;
        }

        this._openCardCnt++;
        if (this._openCardCnt >= 5) {
            this._openCardCnt = 0;
        }
    };

    Scene_PokerScene.prototype.initSoloCardGame = function (idx) {
        let handCard = this._handCardList[idx];
        let opacity = handCard.getSprite().opacity;


        if (handCard.getSprite().y < 300) {
            handCard.getSprite().y += 40;
        } else {
            if (handCard.getSprite().y != 300) {
                handCard.getSprite().y = 300;
            }
        }

        if (handCard.getSprite().y < 255) {
            handCard.getSprite().opacity += 20;
        } else {
            if (handCard.getSprite().opacity != 255) {
                handCard.getSprite().opacity = 255;
            }
        }
        if (handCard.getSprite().opacity == 255 && handCard.getSprite().y == 300) {
            handCard.setInitFinish(true);
        }
    };

    Scene_PokerScene.prototype.initDefaultSelectCard = function () {
        this.setSelectCard(0);
        this.removeSelectCard(1);
        this.removeSelectCard(2);
        this.removeSelectCard(3);
        this.removeSelectCard(4);
    };

    Scene_PokerScene.prototype.setSelectCard = function (idx) {
        this._handCardList[idx].setSelected(true);
        this._cursolSprite.x = this._handCardList[idx].getSprite().x;
        this._cursolSprite.y = this._handCardList[idx].getSprite().y + 5;
        this._cursolSprite.opacity = 255;
        this._isSelectedCord = true;
    };

    Scene_PokerScene.prototype.removeSelectCard = function (idx) {
        this._handCardList[idx].setSelected(false);
    };

    Scene_PokerScene.prototype.selectCardUpdateCommand = function () {
        if (!this._cardAnimationFlag) {
            if (this._isSelectedCord) {
                if (Input.isTriggered('left') || Input.isRepeated('left')) {
                    SoundManager.playCursor();
                    this.cursolMove(-1);
                } else if (Input.isTriggered('right') || Input.isRepeated('right')) {
                    SoundManager.playCursor();
                    this.cursolMove(1);
                } else if (Input.isTriggered('down') || Input.isRepeated('down')) {
                    SoundManager.playCursor();
                    this._isSelectedCord = false;
                    this.changeSelectedCard(this._isSelectedCord);
                } else if (Input.isTriggered('ok') || Input.isRepeated('ok')) {
                    AudioManager.playSe({ "name": "slide", "volume": 80, "pitch": 100, "pan": 0 });
                    this._animationTargetCardInfo = this.getNowSelectCardInfo();
                    this._cardAnimationFlag = true;
                    this._cardAnimationCnt = 0;
                } else if (TouchInput.isTriggered()) {
                    this.touchCard(TouchInput.x, TouchInput.y);
                }
            } else {
                if (Input.isTriggered('up') || Input.isRepeated('up')) {
                    SoundManager.playCursor();
                    this._isSelectedCord = true;
                    this.changeSelectedCard(this._isSelectedCord);
                } else if (Input.isTriggered('ok') || Input.isRepeated('ok')) {
                    this.cardChange();
                    SoundManager.playOk();
                } else if (TouchInput.isTriggered()) {
                    this.touchCard(TouchInput.x, TouchInput.y);
                }
            }
        } else {
            // ポーカーカードをひっくり返す処理
            if (this._animationTargetCardInfo.getIsOpen()) {
                // 表面の場合
                let cntanimationTmp = this._cardAnimationCnt * CARD_IMG_HEIGHT;
                let framesetY = CARD_STATUS_OPEN_Y - cntanimationTmp;
                if (framesetY < CARD_STATUS_CLOSE_Y) {
                    framesetY = CARD_STATUS_CLOSE_Y;
                }
                this._animationTargetCardInfo.getSprite().setFrame(0, framesetY, CARD_IMG_WIDTH, CARD_IMG_HEIGHT);
                if (framesetY <= CARD_STATUS_CLOSE_Y) {
                    this._cardAnimationFlag = false;
                    this._animationTargetCardInfo.setIsOpen(false)
                }
            } else {
                // 表面の場合
                let cntanimationTmp = this._cardAnimationCnt * CARD_IMG_HEIGHT;
                let framesetY = cntanimationTmp;
                if (framesetY > CARD_STATUS_OPEN_Y) {
                    framesetY = CARD_STATUS_OPEN_Y;
                }
                this._animationTargetCardInfo.getSprite().setFrame(0, cntanimationTmp, CARD_IMG_WIDTH, CARD_IMG_HEIGHT);
                if (framesetY >= CARD_STATUS_OPEN_Y) {
                    this._cardAnimationFlag = false;
                    this._animationTargetCardInfo.setIsOpen(true)
                }
            }
            this._cardAnimationCnt++;
        }
    };

    Scene_PokerScene.prototype.touchCard = function (touchX, touchY) {
        for (let i = 0; i < this._handCardList.length; i++) {
            let card = this._handCardList[i];
            let cardSprite = card.getSprite();
            let cardX = cardSprite.x;
            let cardY = cardSprite.y;
            let cardWidth = cardSprite.width * 0.6;
            let cardYHeight = cardSprite.height * 0.6;
            if (touchX >= cardX && touchX <= (cardX + cardWidth) &&
                touchY >= cardY && touchY <= (cardY + cardYHeight)) {
                AudioManager.playSe({ "name": "slide", "volume": 80, "pitch": 100, "pan": 0 });
                let nowidx = this.getNowSelectCardIndex();
                this.removeSelectCard(nowidx);
                this.setSelectCard(i);
                this._animationTargetCardInfo = this.getNowSelectCardInfo();
                this._cardAnimationFlag = true;
                this._cardAnimationCnt = 0;
                this._isSelectedCord = true;
                this.changeSelectedCard(this._isSelectedCord);
                break;
            }
        }

        this.touchStart(touchX, touchY);
    };

    Scene_PokerScene.prototype.touchStart = function (touchX, touchY) {
        let spriteX = this._cursolStartPosSprite.x;
        let spriteY = this._cursolStartPosSprite.y;
        let spriteWidth = this._cursolStartPosSprite.width;
        let spriteHeight = this._cursolStartPosSprite.height;
        if (touchX >= spriteX && touchX <= (spriteX + spriteWidth) &&
            touchY >= spriteY && touchY <= (spriteY + spriteHeight)) {
            this._isSelectedCord = false;
            this.changeSelectedCard(this._isSelectedCord);
            this.cardChange();
            SoundManager.playOk();
        }
    };

    Scene_PokerScene.prototype.cursolMove = function (nextIdx) {
        let nowidx = this.getNowSelectCardIndex();
        if (nextIdx > 0) {
            if (nowidx < (this._handCardList.length - 1)) {
                this.removeSelectCard(nowidx);
                this.setSelectCard(nowidx + nextIdx);
            } else {
                this.removeSelectCard(nowidx);
                this.setSelectCard(0);
            }
        } else {
            if (nowidx < 1) {
                this.removeSelectCard(nowidx);
                this.setSelectCard(this._handCardList.length - 1);
            } else {
                this.removeSelectCard(nowidx);
                this.setSelectCard(nowidx + nextIdx);
            }
        }
    };

    Scene_PokerScene.prototype.changeSelectedCard = function (isSelectedCard) {
        if (isSelectedCard) {
            this._cursolStartPosSprite.opacity = 0;
            this._cursolSprite.opacity = 255;
        } else {
            this._cursolSprite.opacity = 0;
            this._cursolStartPosSprite.opacity = 255;
        }
    };

    Scene_PokerScene.prototype.getNowSelectCardIndex = function () {
        for (let i = 0; i < this._handCardList.length; i++) {
            if (this._handCardList[i].getSelected()) {
                return i;
            }
        }
        this.initDefaultSelectCard();
        return 0;
    };

    Scene_PokerScene.prototype.getNowSelectCardInfo = function () {
        for (let i = 0; i < this._handCardList.length; i++) {
            if (this._handCardList[i].getSelected()) {
                return this._handCardList[i];
            }
        }
        this.initDefaultSelectCard();
        return this._handCardList[0];
    };

    Scene_PokerScene.prototype.cardChange = function () {
        let changeTargetCardNumberList = new Array();
        let oldCardMarkNumberList = new Array();
        let newCardMarkNumberList = new Array();
        for (let i = 0; i < this._handCardList.length; i++) {
            if (!this._handCardList[i].getIsOpen()) {
                changeTargetCardNumberList.push(i);
            }
            oldCardMarkNumberList.push(this._handCardList[i].getMarkNum());
        }

        this._changeTargetCardNumberList = changeTargetCardNumberList;

        if (changeTargetCardNumberList.length > 0) {
            for (let i = 0; i < this._handCardList.length; i++) {
                if (changeTargetCardNumberList.indexOf(i) >= 0) {
                    // 交換対象
                    var index = Math.floor(Math.random() * this._allCardList.length);
                    while ((oldCardMarkNumberList.indexOf(this._allCardList[index].getMarkNum()) >= 0) ||
                        newCardMarkNumberList.indexOf(this._allCardList[index].getMarkNum()) >= 0) {
                        index = Math.floor(Math.random() * this._allCardList.length);
                    }

                    let changeTargetHandCard = this._handCardList[i];
                    changeTargetHandCard.setIsHand(false);
                    changeTargetHandCard.setIsOpen(false);
                    this._cardBord.removeChild(changeTargetHandCard.getSprite());
                    let cardInfo = this._allCardList[index];

                    cardInfo.setIsHand(true);
                    cardInfo.getSprite().setFrame(0, CARD_STATUS_OPEN_Y, CARD_IMG_WIDTH, CARD_IMG_HEIGHT);
                    cardInfo.getSprite().y = CARD_INIT_POS_Y;
                    cardInfo.getSprite().x = this._handCardList[i].getSprite().x;
                    cardInfo.getSprite().opacity = 0;
                    if (cardInfo.getSprite().scale.x != 0.6) {
                        cardInfo.getSprite().scale.x = 0.6;
                    }
                    if (cardInfo.getSprite().scale.y != 0.6) {
                        cardInfo.getSprite().scale.y = 0.6;
                    }

                    cardInfo.setIsOpen(true);
                    this._handCardList[i] = cardInfo;
                    newCardMarkNumberList.push(cardInfo.getMarkNum());
                    this._cardBord.addChild(cardInfo.getSprite());
                }
            }


            this._turn = TURN_CARDCHANGE;
            this._changeCardCnt = 0;
        } else {
            this._turn = TURN_ROLE_CHECK;
        }

        this._checkRole = ROLE_HIGHCARD;

    };

    Scene_PokerScene.prototype.execCardChange = function () {
        let changeCardIndex = this._changeTargetCardNumberList[this._changeCardCnt];
        if (!this._handCardList[changeCardIndex].getInitFinish()) {
            this.initSoloCardGame(changeCardIndex);
        }

        let changeCardMaxIndex = this._changeTargetCardNumberList[this._changeTargetCardNumberList.length - 1];
        if (this._handCardList[changeCardMaxIndex].getInitFinish()) {
            this.initDefaultSelectCard();
            this._turn = TURN_ROLE_CHECK;
        }
        this._changeCardCnt++;
        if (this._changeCardCnt >= this._changeTargetCardNumberList.length) {
            this._changeCardCnt = 0;
        }
    };

    // =========役関連の処理 -start ============
    Scene_PokerScene.prototype.checkRole = function () {
        let cardList = this._handCardList;
        let inJoker = this.checkJoker(cardList);
        let tmpList = new Array();
        for (let i = 0; i < cardList.length; i++) {
            tmpList.push(cardList[i]);
        }
        let success = false;
        tmpList.sort(function (first, second) {
            return first.getNum() - second.getNum();
        });

        // ロイヤルストレートフラッシュ
        if (this.checkRoyalStraightFlush(tmpList, inJoker)) {
            this._checkRole = ROLE_ROYALSTRAIGHTFLASH;
            success = true;
        }

        // ファイブカード
        if (!success && this.checkFiveCard(tmpList, inJoker)) {
            this._checkRole = ROLE_FIVECARD;
            success = true;
        }

        // ストレートフラッシュ
        if (!success && this.checkStraightFlush(tmpList, inJoker)) {
            this._checkRole = ROLE_STRAIGHTFLASH;
            success = true;
        }

        // フォーカード
        if (!success && this.checkFourCard(tmpList, inJoker)) {
            this._checkRole = ROLE_FOURCARD;
            success = true;
        }

        // フルハウス
        if (!success && this.checkFullHouse(tmpList, inJoker)) {
            this._checkRole = ROLE_FULLHOUSE;
            success = true;
        }

        // フラッシュ
        if (!success && this.checkFlush(tmpList, inJoker)) {
            this._checkRole = ROLE_FLASH;
            success = true;
        }

        // ストレート
        if (!success && this.checkStraight(tmpList, inJoker)) {
            this._checkRole = ROLE_STRAIGHT;
            success = true;
        }

        // スリーカード
        if (!success && this.checkThreeCard(tmpList, inJoker)) {
            this._checkRole = ROLE_THREECARD;
            success = true;
        }

        // ツーペア
        if (!success && this.checkTwoPear(tmpList, inJoker)) {
            this._checkRole = ROLE_TWOPAIR;
            success = true;
        }

        // ワンペア
        if (!success && this.checkOnePear(tmpList, inJoker)) {
            this._checkRole = ROLE_ONEPAIR;
            success = true;
        }
        if (!success) {

        }

        switch (this._checkRole) {
            case ROLE_HIGHCARD:
                this.playSeLoseSe();
                this._turn = TURN_ROLE_COMMITANIMATION;
                break;
            case ROLE_ROYALSTRAIGHTFLASH:
                AudioManager.playSe({ "name": TatsuPokerGameP.royalstraightFlushSe, "volume": 80, "pitch": 100, "pan": 0 });
                this._turn = TURN_ROYALSTRAIGHTFLUSHANIMATION;
                this._royalStraightFlushAnimationSprite.opacity = 255;
                break;
            default:
                this.playSeWinSe();
                this._turn = TURN_ROYALSTRAIGHTFLUSHANIMATION;
                break;
        }
    };

    // ロイヤルストレートフラッシュ
    Scene_PokerScene.prototype.checkRoyalStraightFlush = function (cardList, inJoker) {
        for (let j = 0; j < this._royalStraightFlushList.length; j++) {
            let markRoleList = this._royalStraightFlushList[j];
            let roleCnt = 0;
            for (let k = 0; k < markRoleList.length; k++) {
                for (let i = 0; i < cardList.length; i++) {
                    if (cardList[i].getMarkNum() == markRoleList[k]) {
                        roleCnt++;
                    }
                }
            }

            if (roleCnt == 5 || (roleCnt == 4 && inJoker)) {
                return true;
            }
        }
        return false;
    };

    // ファイブカード
    Scene_PokerScene.prototype.checkFiveCard = function (cardList, inJoker) {
        return this.getCardDoubleCnt(cardList, 5, inJoker, true);
    };

    // ストレートフラッシュ
    Scene_PokerScene.prototype.checkStraightFlush = function (cardList, inJoker) {

        // 昇順に並べているので、0番目からチェック
        let minCard = cardList[0];
        let cnt = 1;
        if (!inJoker) {
            for (let i = 1; i < cardList.length; i++) {
                if ((minCard.getNum() + i) == (cardList[i].getNum()) &&
                    minCard.getMark() == cardList[i].getMark()) {
                    cnt++;
                }
            }
            return (cnt == 5);
        } else {
            for (let i = 1; i < cardList.length - 1; i++) {
                if (minCard.getMark() == cardList[i].getMark()) {
                    cnt++;
                }
            }

            if (cnt == 4) {
                return this.checkStraightPattern(cardList);
            }

            return false;
        }
    };

    // フォーカード
    Scene_PokerScene.prototype.checkFourCard = function (cardList, inJoker) {
        return this.getCardDoubleCnt(cardList, 4, inJoker, false);
    };

    // フルハウス
    Scene_PokerScene.prototype.checkFullHouse = function (cardList, inJoker) {
        let fullHouseGroup = {};
        for (let i = 0; i < cardList.length; i++) {
            let checknext = cardList[i];
            // 同じ数字ごとでグルーピングする
            if (fullHouseGroup[checknext.getNum()]) {
                let cnt = fullHouseGroup[checknext.getNum()];
                cnt++;
                fullHouseGroup[checknext.getNum()] = cnt;
            } else {
                fullHouseGroup[checknext.getNum()] = 1;
            }
        }

        // グループが2（22、333など）の場合、またはグループが3(22、33、joker)の場合はフルハウス扱い
        // グループが3の場合でも「22、33、4」の場合、ジョーカーが入ってない場合はfalseにする
        let objLength = Object.keys(fullHouseGroup).length;
        return (objLength == 2 || (objLength == 3 && inJoker));
    };

    // フラッシュ
    Scene_PokerScene.prototype.checkFlush = function (cardList, inJoker) {
        // 昇順に並べているので、0番目からチェック
        let minCard = cardList[0];
        let cnt = 0;
        for (let i = 0; i < cardList.length; i++) {
            if (minCard.getMark() == cardList[i].getMark()) {
                cnt++;
            }
        }
        return (cnt == 5 || (cnt == 4 && inJoker));
    };

    // ストレート
    Scene_PokerScene.prototype.checkStraight = function (cardList, inJoker) {
        // 昇順に並べているので、0番目からチェック
        let minCard = cardList[0];
        let cnt = 1;
        if (!inJoker) {
            for (let i = 1; i < cardList.length; i++) {
                if ((minCard.getNum() + i) == (cardList[i].getNum())) {
                    cnt++;
                }
            }
            return (cnt == 5);
        } else {
            return this.checkStraightPattern(cardList);
        }
    };

    Scene_PokerScene.prototype.checkStraightPattern = function (cardList) {
        let aaa = null;
        try {
            for (let i = 0; i < STRAIGHT_PATTERN.length; i++) {
                let straightPt = STRAIGHT_PATTERN[i];
                if (straightPt[0] === cardList[0].getNum() &&
                    straightPt[1] === cardList[1].getNum() &&
                    straightPt[2] === cardList[2].getNum() &&
                    straightPt[3] === cardList[3].getNum()) {
                    return true;
                }
            }
        } catch (error) {
            alert(JSON.stringify(cardList));
            alert(JSON.stringify(aaa));
            return true
        }
        return false;
    };

    // スリーカード
    Scene_PokerScene.prototype.checkThreeCard = function (cardList, inJoker) {
        // 昇順に並べているので、0番目からチェック
        return this.getCardDoubleCnt(cardList, 3, inJoker, false);
    };

    // ツーペア
    Scene_PokerScene.prototype.checkTwoPear = function (cardList, inJoker) {
        let fullHouseGroup = this.getPear(cardList);

        // グループが2（22、333など）の場合、またはグループが3(22、33、joker)の場合はフルハウス扱い
        // グループが3の場合でも「22、33、4」の場合、ジョーカーが入ってない場合はfalseにする
        let objLength = Object.keys(fullHouseGroup).length;
        return (objLength == 3 || (objLength == 4 && inJoker));
    };

    // ワンペア
    Scene_PokerScene.prototype.checkOnePear = function (cardList, inJoker) {
        let fullHouseGroup = this.getPear(cardList);

        // グループが2（22、333など）の場合、またはグループが3(22、33、joker)の場合はフルハウス扱い
        // グループが3の場合でも「22、33、4」の場合、ジョーカーが入ってない場合はfalseにする
        let objLength = Object.keys(fullHouseGroup).length;
        return (objLength == 4 || (objLength == 5 && inJoker));
    };

    Scene_PokerScene.prototype.getPear = function (cardList) {
        let rtGroup = {};
        for (let i = 0; i < cardList.length; i++) {
            let checknext = cardList[i];
            // 同じ数字ごとでグルーピングする
            if (rtGroup[checknext.getNum()]) {
                let cnt = rtGroup[checknext.getNum()];
                cnt++;
                rtGroup[checknext.getNum()] = cnt;
            } else {
                rtGroup[checknext.getNum()] = 1;
            }
        }
        return rtGroup;
    };

    //3カード、4カード、、5カードの共通処理
    Scene_PokerScene.prototype.getCardDoubleCnt = function (cardList, num, inJoker, isFiveCard) {
        for (let i = 0; i < cardList.length; i++) {
            let checknext = cardList[i];
            let roleCnt = 0;
            for (let k = 0; k < cardList.length; k++) {
                //if (i != k) {
                if (checknext.getNum() == cardList[k].getNum()) {
                    roleCnt++;
                }
                //}
            }

            if (isFiveCard) {
                if (roleCnt == (num - 1) && inJoker) {
                    return true;
                }
            } else {
                if (roleCnt == num || (roleCnt == (num - 1) && inJoker)) {
                    return true;
                }
            }
        }

        return false;
    };

    Scene_PokerScene.prototype.checkJoker = function (cardList) {
        for (let i = 0; i < cardList.length; i++) {
            if (cardList[i].getIsJoker()) {
                return true;
            }
        }
        return false;
    };
    // =========役関連の処理 -end ============

    Scene_PokerScene.prototype.winAnimation = function () {
        this._royalStraightFlushAnimaitonCnt++;
        if (this._checkRole == ROLE_ROYALSTRAIGHTFLASH) {
            if ((this._royalStraightFlushAnimaitonCnt % 2) == 0) {
                this._royalStraightFlushAnimationSprite.setFrame(
                    this._royalStraightFlushAnimaitonPosCntX * ROYALSTRAIGHTFLUSHCOINSPRITE_WIDTH,
                    this._royalStraightFlushAnimaitonPosCntY * ROYALSTRAIGHTFLUSHCOINSPRITE_HEIGHT,
                    ROYALSTRAIGHTFLUSHCOINSPRITE_WIDTH,
                    ROYALSTRAIGHTFLUSHCOINSPRITE_HEIGHT
                );
                this._royalStraightFlushAnimaitonPosCntX++;
                if ((this._royalStraightFlushAnimaitonPosCntX % 3) == 0) {
                    this._royalStraightFlushAnimaitonPosCntX = 0;
                    this._royalStraightFlushAnimaitonPosCntY++;
                }

                if ((this._royalStraightFlushAnimaitonPosCntY % 10) == 0) {
                    this._royalStraightFlushAnimaitonPosCntY = 0;
                }
            }


            if (this._royalStraightFlushAnimaitonCnt > 300) {
                this._royalStraightFlushAnimaitonCnt = 0;
                this._royalStraightFlushAnimaitonPosCntX = 0;
                this._royalStraightFlushAnimaitonPosCntY = 0;
                this._royalStraightFlushAnimationSprite.setFrame(
                    0,
                    0,
                    ROYALSTRAIGHTFLUSHCOINSPRITE_WIDTH,
                    ROYALSTRAIGHTFLUSHCOINSPRITE_HEIGHT
                );
                this._royalStraightFlushAnimationSprite.opacity = 0;
                this.winRoleMessageAnimation();
                this._turn = TURN_ROLE_COMMITANIMATION;
            }
        } else {
            if (this._royalStraightFlushAnimaitonCnt > 60) {
                this._royalStraightFlushAnimaitonCnt = 0;
                this.winRoleMessageAnimation();
                this._turn = TURN_ROLE_COMMITANIMATION;
            }
        }
    };

    Scene_PokerScene.prototype.winRoleMessageAnimation = function () {
        let roleAndMagnification = this._roleStructInfo[this._checkRole];
        let role = roleAndMagnification[ROLE_INDEX];
        let magnifiation = roleAndMagnification[MAGNIFICATION_INDEX];
        this._winCoin = magnifiation * this._betCoin;
        let message1 = TatsuPokerGameP.winMessage1.replace("%s", role);
        let message2 = TatsuPokerGameP.winMessage2.replace("%d", this._winCoin);
        this._WindowMsg.drawMessage(message1 + "\n" + message2);
        this._WindowMsg.open();
        this._roleCommitAnimationCnt = 0;
    };

    Scene_PokerScene.prototype.roleCommitAnimation = function () {
        if (this._checkRole == ROLE_HIGHCARD) {
            this._roleCommitAnimationCnt = 0;
            this._WindowMsg.close();
            let message1 = TatsuPokerGameP.loseMessage1;
            let message2 = TatsuPokerGameP.loseMessage2;
            this._WindowMsg.drawMessage(message1 + "\n" + message2);
            this._WindowMsg.open();
            this._yesNoWindow.open();
            this._yesNoWindow.select(0);
            this._yesNoWindow.activate();
            this._yesNoWindow.twoLineMove();
            this._turn = TURN_NEXT_CONFIRM;
        } else {
            this._roleCommitAnimationCnt++;
            if (this._roleCommitAnimationCnt > 120) {
                if (this._checkRole != ROLE_HIGHCARD) {
                    let coinVal = $gameVariables.value(TatsuPokerGameP.coinVariable);
                    $gameVariables.setValue(TatsuPokerGameP.coinVariable, coinVal + this._winCoin);
                    this._nowCoinWindows.reDrawCoin($gameVariables.value(TatsuPokerGameP.coinVariable));
                }
                this._roleCommitAnimationCnt = 0;
                this._WindowMsg.close();
                let message2 = TatsuPokerGameP.loseMessage2;
                this._WindowMsg.drawMessage(message2);
                this._WindowMsg.open();
                this._yesNoWindow.open();
                this._yesNoWindow.select(0);
                this._yesNoWindow.activate();
                this._yesNoWindow.twoLineMove();
                this._turn = TURN_NEXT_CONFIRM;

            }
        }
    };

    Scene_PokerScene.prototype.nextConfirm = function () {

    };

    Scene_PokerScene.prototype.popScene = function () {
        if (TatsuPokerGameP.useBGM) {
            AudioManager.fadeOutBgm(1);
            $gameSystem.replayBgm();
        }
        Scene_Base.prototype.popScene.call(this);
    };

    Scene_PokerScene.prototype.playSeWinSe = function () {
        AudioManager.playSe({ "name": TatsuPokerGameP.winSe, "volume": 80, "pitch": 100, "pan": 0 });
    };

    Scene_PokerScene.prototype.playSeLoseSe = function () {
        AudioManager.playSe({ "name": TatsuPokerGameP.loseSe, "volume": 80, "pitch": 100, "pan": 0 });
    };

    // ===========================================
    // コインベット用selectable
    // ===========================================
    function Window_coinBet_Select() {
        this.initialize.apply(this, arguments);
    };

    Window_coinBet_Select.prototype = Object.create(Window_Selectable.prototype);
    Window_coinBet_Select.prototype.constructor = Window_coinBet_Select;

    Window_coinBet_Select.prototype.initialize = function () {
        let thisWindowWidth = TatsuPokerGameP.betCoinListWindowWidth;
        let xPos = getCenterPos(Graphics.boxWidth, thisWindowWidth);
        let yPos = 350;
        let width = thisWindowWidth;
        let height = TatsuPokerGameP.betCoinListWindowHeight;
        if (!isRpgMakerMV()) {
            height += 10;
        }
        if (isRpgMakerMV()) {
            Window_Selectable.prototype.initialize.call(this,
                xPos,
                yPos,
                width,
                height);
        } else {
            Window_Selectable.prototype.initialize.call(this,
                getdummyWindowRectParameter(xPos, yPos, width, height)
            );
        }
        this._data = new Array();
        for (let i = 0; i < TatsuPokerGameP.betCoinList.length; i++) {
            this._data.push(Number(TatsuPokerGameP.betCoinList[i]));
        }

        this.select(0);
        this.refresh();
    };

    Window_coinBet_Select.prototype.maxCols = function () {
        return 1;
    };

    Window_coinBet_Select.prototype.maxItems = function () {
        return 3;
    };

    Window_coinBet_Select.prototype.getNowSelectIndexData = function () {
        let idx = this.index();
        return this._data[idx];
    };

    Window_coinBet_Select.prototype.update = function () {
        Window_Selectable.prototype.update.call(this);
    };

    Window_coinBet_Select.prototype.drawItem = function (index) {
        if (this._data) {
            let item = this._data[index];
            let rect = this.itemRect(index);
            this.changePaintOpacity(this.isEnabled(index));
            this.drawText(item, rect.x, rect.y, this.width);
            this.changePaintOpacity(true);
        }
    };

    Window_coinBet_Select.prototype.isEnabled = function (index) {
        let item = this._data[index];
        return $gameVariables.value(TatsuPokerGameP.coinVariable) >= Number(item);
    }

    Window_coinBet_Select.prototype.selectRefresh = function () {
        this.refresh();
    };

    Window_coinBet_Select.prototype.isCurrentItemEnabled = function () {
        return this.isEnabled(this.index());
    };


    // ===========================================
    // YesNoウィンドウ用window_base
    // ===========================================
    function Window_YesNo_Window() {
        this.initialize.apply(this, arguments);
    };

    Window_YesNo_Window.prototype = Object.create(Window_Selectable.prototype);
    Window_YesNo_Window.prototype.constructor = Window_YesNo_Window;


    Window_YesNo_Window.prototype.initialize = function () {
        let thisWindowWidth = 100;
        let xPos = getCenterPos(Graphics.boxWidth, thisWindowWidth);
        let yPos = 350;
        let width = TatsuPokerGameP.yesNoWindowWidth;
        let height = TatsuPokerGameP.yesNoWindowHeight;
        if (isRpgMakerMV()) {
            Window_Selectable.prototype.initialize.call(this,
                xPos,
                yPos,
                width,
                height);
        } else {
            Window_Selectable.prototype.initialize.call(this,
                getdummyWindowRectParameter(xPos, yPos, width, height)
            );
        }
        this._initXPos = xPos;
        this._initYPos = yPos;

        this._data = new Array();
        this._data.push(TatsuPokerGameP.yesLanguage);
        this._data.push(TatsuPokerGameP.noLanguage);
        this.refresh();
    };

    Window_YesNo_Window.prototype.maxItems = function () {
        return 2;
    };

    Window_YesNo_Window.prototype.isNowSelectYes = function () {
        return (this.index() == 0);
    };

    Window_YesNo_Window.prototype.isNowSelectNo = function () {
        return (this.index() != 0);
    };

    Window_YesNo_Window.prototype.maxCols = function () {
        return 1;
    };

    Window_YesNo_Window.prototype.twoLineMove = function () {
        this.move(this._initXPos, this._initYPos, this.width, this.height);
    };

    Window_YesNo_Window.prototype.drawItem = function (index) {
        if (this._data) {
            let item = this._data[index];
            let rect = this.itemRect(index);
            this.drawText(item, rect.x, rect.y, this.width);
        }
    };

    // ===========================================
    // 所持コイン用window_base
    // ===========================================
    function Window_coin_window() {
        this.initialize.apply(this, arguments);
    };

    Window_coin_window.prototype = Object.create(Window_Base.prototype);
    Window_coin_window.prototype.constructor = Window_coin_window;

    Window_coin_window.prototype.initialize = function (x, y, width, height) {
        if (isRpgMakerMV()) {
            Window_Base.prototype.initialize.call(this,
                x,
                y,
                width,
                height);
        } else {
            Window_Base.prototype.initialize.call(this,
                getdummyWindowRectParameter(x, y, width, height)
            );
        }
    };

    Window_coin_window.prototype.reDrawCoin = function (coin) {
        if (this.contents) {
            this.contents.clear();
        }
        this.drawText(coin, 0, 0, 190, "right");
    };

    // ===========================================
    // BETコイン用window_base
    // ===========================================
    function Window_BetCoin_window() {
        this.initialize.apply(this, arguments);
    };

    Window_BetCoin_window.prototype = Object.create(Window_coin_window.prototype);
    Window_BetCoin_window.prototype.constructor = Window_BetCoin_window;

    // ===========================================
    // メッセージ用window_base
    // ===========================================
    function Window_MessageInfo_Window() {
        this.initialize.apply(this, arguments);
    };

    Window_MessageInfo_Window.prototype = Object.create(Window_Base.prototype);
    Window_MessageInfo_Window.prototype.constructor = Window_MessageInfo_Window;

    Window_MessageInfo_Window.prototype.initialize = function (x, y, width, height) {
        if (isRpgMakerMV()) {
            Window_Base.prototype.initialize.call(this, x, y, width, height + 300);
        } else {
            Window_Base.prototype.initialize.call(this,
                getdummyWindowRectParameter(x, y, width, height + 300));
        }
        this._baseHeight = height / 2;
        this._baseY = y;
    };

    Window_MessageInfo_Window.prototype.drawMessage = function (text) {
        if (this.contents) {
            this.contents.clear();
        }
        let messageList = text.split("\n");
        let messageSizeList = new Array();
        for (let i = 0; i < messageList.length; i++) {
            messageSizeList.push(this.textWidth(messageList[i]));
        }
        const arMax = function (a, b) { return Math.max(a, b) }
        let maxSize = messageSizeList.reduce(arMax);
        let tmpWindowWidth = maxSize + 50;
        let tmpWindowHeight = (messageSizeList.length == 1) ? this._baseHeight : messageSizeList.length * (this._baseHeight - 5);

        let tmpOldX = this.x;
        let tmpOldY = this._baseY;

        let tmpNewY = (messageSizeList.length == 1) ? tmpOldY : tmpOldY - (this._baseHeight - 60);
        let tmpNewX = getCenterPos(Graphics.boxWidth, tmpWindowWidth);
        let heightLine = this.fittingHeight(messageList.length);
        this.move(tmpNewX, tmpNewY, tmpWindowWidth, heightLine + 10);
        for (let i = 0; i < messageList.length; i++) {
            this.drawText(messageList[i], 0, i * 40, tmpWindowWidth - 30, "center");
        }
    };
})();