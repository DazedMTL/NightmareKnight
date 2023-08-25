/*: @target MZ
 * @base TRP_ParticleMZ
 * @plugindesc 自作パーティクル設定の一覧
 * @help
 * StandEffect_love01 <screen> ＠2022/7/8
 * above <character> ＠2022/2/10
 * break01 <character> ＠2022/2/11
 * break02 <character> ＠2022/8/12
 * breakCloth <character> ＠2022/2/16
 * chaseHeart <character> ＠2022/2/11
 * damageCloth <character> ＠2022/2/16
 * desireEffect01 <character> ＠2022/5/20
 * desireEffect02 <character> ＠2023/8/8
 * dungeon01 <screen> ＠2022/2/5
 * dungeonPar <screen> ＠2022/2/5
 * enemyAngry <character> ＠2022/7/11
 * enemyLost01 <character> ＠2022/2/10
 * enemyLost01_2 <character> ＠2022/2/10
 * enemyLostBig01 <character> ＠2022/3/22
 * enemyLostBig01_2 <character> ＠2022/3/22
 * fireworks_c <character> ＠2022/1/30
 * fireworks_dragon_c <screen> ＠2022/2/5
 * garbage <character> ＠2022/8/24
 * highlowEne <screen> ＠2023/4/26
 * highlowLay <screen> ＠2023/4/26
 * highlowLayn <screen> ＠2023/4/26
 * kokoro_desire <screen> ＠2022/2/5
 * kokoro_reason <screen> ＠2022/2/5
 * loveMagicMachine01 <character> ＠2022/4/20
 * loveMagicMachine02 <character> ＠2022/4/20
 * qteSuccess <screen> ＠2022/10/10
 * sexualMode1 <screen> ＠2022/10/17
 * sexualMode2 <screen> ＠2022/10/21
 * sexualMode2Battle <screen> ＠2023/5/28
 * sexualMode2Battle_2 <screen> ＠2023/5/28
 * sexualMode2_2 <screen> ＠2022/10/21
 * springSteam1 <character> ＠2022/4/17
 * springSteamInRoom1 <character> ＠2022/4/18
 * springSteamInRoom2 <character> ＠2022/4/18
 * yokubouUnlock <character> ＠2022/2/12
 * yokubouUnlock2 <screen> ＠2022/10/29
 * yokubouUnlock3 <character> ＠2023/8/24
 *
 * @command set_character
 * @text set/表示 > キャラ対象(9)
 * @desc パーティクル表示
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default weather
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option chaseHeart <character> ＠2022/2/11
 * @value chaseHeart
 * @option desireEffect02 <character> ＠2023/8/8
 * @value desireEffect02
 * @option enemyAngry <character> ＠2022/7/11
 * @value enemyAngry
 * @option garbage <character> ＠2022/8/24
 * @value garbage
 * @option loveMagicMachine01 <character> ＠2022/4/20
 * @value loveMagicMachine01
 * @option loveMagicMachine02 <character> ＠2022/4/20
 * @value loveMagicMachine02
 * @option springSteam1 <character> ＠2022/4/17
 * @value springSteam1
 * @option springSteamInRoom1 <character> ＠2022/4/18
 * @value springSteamInRoom1
 * @option springSteamInRoom2 <character> ＠2022/4/18
 * @value springSteamInRoom2
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 * @command set_screen
 * @text set/表示 > スクリーン/天候/リージョン(3)
 * @desc パーティクル表示
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default this
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option StandEffect_love01 <screen> ＠2022/7/8
 * @value StandEffect_love01
 * @option dungeon01 <screen> ＠2022/2/5
 * @value dungeon01
 * @option dungeonPar <screen> ＠2022/2/5
 * @value dungeonPar
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 * @command play_character
 * @text play/１回再生 > キャラ対象(13)
 * @desc パーティクルを１回だけ再生
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default weather
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option above <character> ＠2022/2/10
 * @value above
 * @option break01 <character> ＠2022/2/11
 * @value break01
 * @option break02 <character> ＠2022/8/12
 * @value break02
 * @option breakCloth <character> ＠2022/2/16
 * @value breakCloth
 * @option damageCloth <character> ＠2022/2/16
 * @value damageCloth
 * @option desireEffect01 <character> ＠2022/5/20
 * @value desireEffect01
 * @option enemyLost01 <character> ＠2022/2/10
 * @value enemyLost01
 * @option enemyLost01_2 <character> ＠2022/2/10
 * @value enemyLost01_2
 * @option enemyLostBig01 <character> ＠2022/3/22
 * @value enemyLostBig01
 * @option enemyLostBig01_2 <character> ＠2022/3/22
 * @value enemyLostBig01_2
 * @option fireworks_c <character> ＠2022/1/30
 * @value fireworks_c
 * @option yokubouUnlock <character> ＠2022/2/12
 * @value yokubouUnlock
 * @option yokubouUnlock3 <character> ＠2023/8/24
 * @value yokubouUnlock3
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 * @command play_screen
 * @text play/１回再生 > スクリーン/天候/リージョン(13)
 * @desc パーティクルを１回だけ再生
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default this
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option fireworks_dragon_c <screen> ＠2022/2/5
 * @value fireworks_dragon_c
 * @option highlowEne <screen> ＠2023/4/26
 * @value highlowEne
 * @option highlowLay <screen> ＠2023/4/26
 * @value highlowLay
 * @option highlowLayn <screen> ＠2023/4/26
 * @value highlowLayn
 * @option kokoro_desire <screen> ＠2022/2/5
 * @value kokoro_desire
 * @option kokoro_reason <screen> ＠2022/2/5
 * @value kokoro_reason
 * @option qteSuccess <screen> ＠2022/10/10
 * @value qteSuccess
 * @option sexualMode1 <screen> ＠2022/10/17
 * @value sexualMode1
 * @option sexualMode2 <screen> ＠2022/10/21
 * @value sexualMode2
 * @option sexualMode2Battle <screen> ＠2023/5/28
 * @value sexualMode2Battle
 * @option sexualMode2Battle_2 <screen> ＠2023/5/28
 * @value sexualMode2Battle_2
 * @option sexualMode2_2 <screen> ＠2022/10/21
 * @value sexualMode2_2
 * @option yokubouUnlock2 <screen> ＠2022/10/29
 * @value yokubouUnlock2
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 *
 * @requiredAssets img/particles/heart1g
 * @requiredAssets img/particles/flare
 * @requiredAssets img/particles/triangle1
 * @requiredAssets img/particles/triangle1g
 * @requiredAssets img/particles/triangle4
 * @requiredAssets img/particles/triangle3
 * @requiredAssets img/particles/triangle2
 * @requiredAssets img/particles/heart4g
 * @requiredAssets img/particles/particle7
 * @requiredAssets img/particles/particle8
 * @requiredAssets img/particles/particle5
 * @requiredAssets img/particles/particle9
 * @requiredAssets img/particles/smog2
 * @requiredAssets img/particles/smoke2
 * @requiredAssets img/particles/smoke1
 * @requiredAssets img/particles/heart1
 * @requiredAssets img/particles/shine_thin1
 * @requiredAssets img/particles/shine1
 * @requiredAssets img/particles/smog1
 * @requiredAssets img/particles/star_thin1
 * @requiredAssets img/particles/star_thin1g
 * @requiredAssets img/particles/shine3
 * @requiredAssets img/particles/circle3
 * @requiredAssets img/particles/circle2
 */