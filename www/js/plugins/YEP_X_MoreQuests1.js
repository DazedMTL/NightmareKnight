//=============================================================================
// Yanfly Engine Plugins - Quest Journal System Extension - More Quests 1
// YEP_X_MoreQuests1.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_MoreQuests1 = true;

var Yanfly = Yanfly || {};
Yanfly.MoreQuests1 = Yanfly.MoreQuests1 || {};
Yanfly.MoreQuests1.version = 1.0;

//=============================================================================
/*:
 * @plugindesc v1.00 (Requires YEP_QuestJournal.js)
 * Add quests 101 to 1000 to your game!
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_QuestJournal. Make sure this plugin is located
 * under YEP_X_MoreQuests1 in the plugin list.
 *
 * By default, the YEP_QuestJournal plugin comes with 100 quest entries that
 * you can make and insert into your game. And depending on the RPG being made,
 * 100 quest entries just might not be enough. This plugin is a part of a
 * series of extension plugins made for the Yanfly Engine Plugins Quest Journal
 * System to allow for a higher quest quantity than just 100.
 *
 * YEP_X_MoreQuests1 will add quests 101 to 1000.
 * YEP_X_MoreQuests2 will add quests 1001 to 2000.
 * YEP_X_MoreQuests3 will add quests 2001 to 3000.
 * YEP_X_MoreQuests4 will add quests 3001 to 4000.
 * YEP_X_MoreQuests5 will add quests 4001 to 5000.
 * YEP_X_MoreQuests6 will add quests 5001 to 6000.
 * YEP_X_MoreQuests7 will add quests 6001 to 7000.
 * YEP_X_MoreQuests8 will add quests 7001 to 8000.
 * YEP_X_MoreQuests9 will add quests 8001 to 9000.
 * YEP_X_MoreQuests10 will add quests 9001 to 10000.
 *
 * These extension plugins also come with a new feature: automatic batch data.
 * For every set of 100 quests, you can set a default type, difficulty, from,
 * and location data for them. Quest entries that have |-=AUTO=-| in those
 * respective fields will draw data from the batch set's default data. How you
 * wish to use this will be up to you!
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version BETA:
 * - Started Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @param ---Quests 101 to 200---
 * @default
 *
 * @param Category: 101 to 200
 * @text Auto Batch Category
 * @parent ---Quests 101 to 200---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Main Quests
 *
 * @param Difficulty: 101 to 200
 * @text Auto Batch Difficulty
 * @parent ---Quests 101 to 200---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Super Easy
 *
 * @param From: 101 to 200
 * @text Auto Batch From
 * @parent ---Quests 101 to 200---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Ralph
 *
 * @param Location: 101 to 200
 * @text Auto Batch Location
 * @parent ---Quests 101 to 200---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker Land
 *
 * @param Quest 101
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 102
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 103
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 104
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 105
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 106
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 107
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 108
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 109
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 110
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 111
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 112
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 113
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 114
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 115
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 116
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 117
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 118
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 119
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 120
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 121
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 122
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 123
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 124
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 125
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 126
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 127
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 128
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 129
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 130
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 131
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 132
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 133
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 134
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 135
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 136
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 137
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 138
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 139
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 140
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 141
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 142
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 143
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 144
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 145
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 146
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 147
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 148
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 149
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 150
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 151
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 152
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 153
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 154
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 155
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 156
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 157
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 158
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 159
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 160
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 161
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 162
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 163
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 164
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 165
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 166
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 167
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 168
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 169
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 170
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 171
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 172
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 173
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 174
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 175
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 176
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 177
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 178
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 179
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 180
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 181
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 182
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 183
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 184
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 185
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 186
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 187
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 188
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 189
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 190
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 191
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 192
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 193
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 194
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 195
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 196
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 197
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 198
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 199
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 200
 * @parent ---Quests 101 to 200---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 201 to 300---
 * @default
 *
 * @param Category: 201 to 300
 * @text Auto Batch Category
 * @parent ---Quests 201 to 300---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Side Quests
 *
 * @param Difficulty: 201 to 300
 * @text Auto Batch Difficulty
 * @parent ---Quests 201 to 300---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Kinda Easy
 *
 * @param From: 201 to 300
 * @text Auto Batch From
 * @parent ---Quests 201 to 300---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Ulrika
 *
 * @param Location: 201 to 300
 * @text Auto Batch Location
 * @parent ---Quests 201 to 300---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker World
 *
 * @param Quest 201
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 202
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 203
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 204
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 205
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 206
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 207
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 208
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 209
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 210
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 211
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 212
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 213
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 214
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 215
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 216
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 217
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 218
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 219
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 220
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 221
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 222
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 223
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 224
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 225
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 226
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 227
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 228
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 229
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 230
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 231
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 232
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 233
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 234
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 235
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 236
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 237
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 238
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 239
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 240
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 241
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 242
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 243
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 244
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 245
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 246
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 247
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 248
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 249
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 250
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 251
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 252
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 253
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 254
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 255
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 256
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 257
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 258
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 259
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 260
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 261
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 262
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 263
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 264
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 265
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 266
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 267
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 268
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 269
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 270
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 271
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 272
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 273
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 274
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 275
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 276
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 277
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 278
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 279
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 280
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 281
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 282
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 283
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 284
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 285
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 286
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 287
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 288
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 289
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 290
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 291
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 292
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 293
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 294
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 295
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 296
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 297
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 298
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 299
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 300
 * @parent ---Quests 201 to 300---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 301 to 400---
 * @default
 *
 * @param Category: 301 to 400
 * @text Auto Batch Category
 * @parent ---Quests 301 to 400---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Character Quests
 *
 * @param Difficulty: 301 to 400
 * @text Auto Batch Difficulty
 * @parent ---Quests 301 to 400---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Easy to Normal
 *
 * @param From: 301 to 400
 * @text Auto Batch From
 * @parent ---Quests 301 to 400---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Bennett
 *
 * @param Location: 301 to 400
 * @text Auto Batch Location
 * @parent ---Quests 301 to 400---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker Kart
 *
 * @param Quest 301
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 302
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 303
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 304
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 305
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 306
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 307
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 308
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 309
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 310
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 311
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 312
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 313
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 314
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 315
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 316
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 317
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 318
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 319
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 320
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 321
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 322
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 323
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 324
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 325
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 326
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 327
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 328
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 329
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 330
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 331
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 332
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 333
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 334
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 335
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 336
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 337
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 338
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 339
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 340
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 341
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 342
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 343
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 344
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 345
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 346
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 347
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 348
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 349
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 350
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 351
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 352
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 353
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 354
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 355
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 356
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 357
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 358
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 359
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 360
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 361
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 362
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 363
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 364
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 365
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 366
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 367
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 368
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 369
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 370
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 371
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 372
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 373
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 374
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 375
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 376
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 377
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 378
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 379
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 380
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 381
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 382
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 383
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 384
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 385
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 386
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 387
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 388
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 389
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 390
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 391
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 392
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 393
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 394
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 395
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 396
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 397
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 398
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 399
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 400
 * @parent ---Quests 301 to 400---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 401 to 500---
 * @default
 *
 * @param Category: 401 to 500
 * @text Auto Batch Category
 * @parent ---Quests 401 to 500---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Social Links
 *
 * @param Difficulty: 401 to 500
 * @text Auto Batch Difficulty
 * @parent ---Quests 401 to 500---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Interesting
 *
 * @param From: 401 to 500
 * @text Auto Batch From
 * @parent ---Quests 401 to 500---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Lawrence
 *
 * @param Location: 401 to 500
 * @text Auto Batch Location
 * @parent ---Quests 401 to 500---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker Sunshine
 *
 * @param Quest 401
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 402
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 403
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 404
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 405
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 406
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 407
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 408
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 409
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 410
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 411
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 412
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 413
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 414
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 415
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 416
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 417
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 418
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 419
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 420
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 421
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 422
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 423
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 424
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 425
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 426
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 427
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 428
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 429
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 430
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 431
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 432
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 433
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 434
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 435
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 436
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 437
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 438
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 439
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 440
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 441
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 442
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 443
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 444
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 445
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 446
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 447
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 448
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 449
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 450
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 451
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 452
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 453
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 454
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 455
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 456
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 457
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 458
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 459
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 460
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 461
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 462
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 463
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 464
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 465
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 466
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 467
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 468
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 469
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 470
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 471
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 472
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 473
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 474
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 475
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 476
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 477
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 478
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 479
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 480
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 481
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 482
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 483
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 484
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 485
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 486
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 487
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 488
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 489
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 490
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 491
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 492
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 493
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 494
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 495
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 496
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 497
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 498
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 499
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 500
 * @parent ---Quests 401 to 500---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 501 to 600---
 * @default
 *
 * @param Category: 501 to 600
 * @text Auto Batch Category
 * @parent ---Quests 501 to 600---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Villain Quests
 *
 * @param Difficulty: 501 to 600
 * @text Auto Batch Difficulty
 * @parent ---Quests 501 to 600---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Normalish
 *
 * @param From: 501 to 600
 * @text Auto Batch From
 * @parent ---Quests 501 to 600---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Oscar
 *
 * @param Location: 501 to 600
 * @text Auto Batch Location
 * @parent ---Quests 501 to 600---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker Party
 *
 * @param Quest 501
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 502
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 503
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 504
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 505
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 506
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 507
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 508
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 509
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 510
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 511
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 512
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 513
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 514
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 515
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 516
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 517
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 518
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 519
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 520
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 521
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 522
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 523
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 524
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 525
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 526
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 527
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 528
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 529
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 530
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 531
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 532
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 533
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 534
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 535
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 536
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 537
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 538
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 539
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 540
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 541
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 542
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 543
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 544
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 545
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 546
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 547
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 548
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 549
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 550
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 551
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 552
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 553
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 554
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 555
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 556
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 557
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 558
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 559
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 560
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 561
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 562
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 563
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 564
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 565
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 566
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 567
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 568
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 569
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 570
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 571
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 572
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 573
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 574
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 575
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 576
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 577
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 578
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 579
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 580
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 581
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 582
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 583
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 584
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 585
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 586
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 587
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 588
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 589
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 590
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 591
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 592
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 593
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 594
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 595
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 596
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 597
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 598
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 599
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 600
 * @parent ---Quests 501 to 600---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 601 to 700---
 * @default
 *
 * @param Category: 601 to 700
 * @text Auto Batch Category
 * @parent ---Quests 601 to 700---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Training Quests
 *
 * @param Difficulty: 601 to 700
 * @text Auto Batch Difficulty
 * @parent ---Quests 601 to 700---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Normal to Hard
 *
 * @param From: 601 to 700
 * @text Auto Batch From
 * @parent ---Quests 601 to 700---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Vera
 *
 * @param Location: 601 to 700
 * @text Auto Batch Location
 * @parent ---Quests 601 to 700---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Paper RPG Maker
 *
 * @param Quest 601
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 602
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 603
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 604
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 605
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 606
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 607
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 608
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 609
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 610
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 611
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 612
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 613
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 614
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 615
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 616
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 617
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 618
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 619
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 620
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 621
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 622
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 623
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 624
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 625
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 626
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 627
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 628
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 629
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 630
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 631
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 632
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 633
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 634
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 635
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 636
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 637
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 638
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 639
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 640
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 641
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 642
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 643
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 644
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 645
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 646
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 647
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 648
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 649
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 650
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 651
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 652
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 653
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 654
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 655
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 656
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 657
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 658
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 659
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 660
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 661
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 662
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 663
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 664
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 665
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 666
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 667
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 668
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 669
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 670
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 671
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 672
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 673
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 674
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 675
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 676
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 677
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 678
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 679
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 680
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 681
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 682
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 683
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 684
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 685
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 686
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 687
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 688
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 689
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 690
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 691
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 692
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 693
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 694
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 695
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 696
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 697
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 698
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 699
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 700
 * @parent ---Quests 601 to 700---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 701 to 800---
 * @default
 *
 * @param Category: 701 to 800
 * @text Auto Batch Category
 * @parent ---Quests 701 to 800---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Mastery Quests
 *
 * @param Difficulty: 701 to 800
 * @text Auto Batch Difficulty
 * @parent ---Quests 701 to 800---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Hard
 *
 * @param From: 701 to 800
 * @text Auto Batch From
 * @parent ---Quests 701 to 800---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Elmer
 *
 * @param Location: 701 to 800
 * @text Auto Batch Location
 * @parent ---Quests 701 to 800---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker Power Tennis
 *
 * @param Quest 701
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 702
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 703
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 704
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 705
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 706
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 707
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 708
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 709
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 710
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 711
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 712
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 713
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 714
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 715
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 716
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 717
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 718
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 719
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 720
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 721
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 722
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 723
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 724
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 725
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 726
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 727
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 728
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 729
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 730
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 731
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 732
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 733
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 734
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 735
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 736
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 737
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 738
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 739
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 740
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 741
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 742
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 743
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 744
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 745
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 746
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 747
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 748
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 749
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 750
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 751
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 752
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 753
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 754
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 755
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 756
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 757
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 758
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 759
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 760
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 761
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 762
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 763
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 764
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 765
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 766
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 767
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 768
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 769
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 770
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 771
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 772
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 773
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 774
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 775
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 776
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 777
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 778
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 779
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 780
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 781
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 782
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 783
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 784
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 785
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 786
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 787
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 788
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 789
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 790
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 791
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 792
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 793
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 794
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 795
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 796
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 797
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 798
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 799
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 800
 * @parent ---Quests 701 to 800---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 801 to 900---
 * @default
 *
 * @param Category: 801 to 900
 * @text Auto Batch Category
 * @parent ---Quests 801 to 900---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Extra Quests
 *
 * @param Difficulty: 801 to 900
 * @text Auto Batch Difficulty
 * @parent ---Quests 801 to 900---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Very Hard
 *
 * @param From: 801 to 900
 * @text Auto Batch From
 * @parent ---Quests 801 to 900---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Ruby
 *
 * @param Location: 801 to 900
 * @text Auto Batch Location
 * @parent ---Quests 801 to 900---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker Strikers
 *
 * @param Quest 801
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 802
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 803
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 804
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 805
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 806
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 807
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 808
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 809
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 810
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 811
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 812
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 813
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 814
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 815
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 816
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 817
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 818
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 819
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 820
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 821
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 822
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 823
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 824
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 825
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 826
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 827
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 828
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 829
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 830
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 831
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 832
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 833
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 834
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 835
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 836
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 837
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 838
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 839
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 840
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 841
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 842
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 843
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 844
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 845
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 846
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 847
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 848
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 849
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 850
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 851
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 852
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 853
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 854
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 855
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 856
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 857
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 858
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 859
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 860
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 861
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 862
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 863
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 864
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 865
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 866
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 867
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 868
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 869
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 870
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 871
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 872
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 873
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 874
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 875
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 876
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 877
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 878
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 879
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 880
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 881
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 882
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 883
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 884
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 885
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 886
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 887
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 888
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 889
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 890
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 891
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 892
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 893
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 894
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 895
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 896
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 897
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 898
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 899
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 900
 * @parent ---Quests 801 to 900---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param ---Quests 901 to 1000---
 * @default
 *
 * @param Category: 901 to 1000
 * @text Auto Batch Category
 * @parent ---Quests 901 to 1000---
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc Default 'Category' for quests with type |-=AUTO=-|
 * Reminder: add new quest types to 'Quest List Window'
 * @default Post-Game Quests
 *
 * @param Difficulty: 901 to 1000
 * @text Auto Batch Difficulty
 * @parent ---Quests 901 to 1000---
 * @desc Default 'Difficulty' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Super Hard
 *
 * @param From: 901 to 1000
 * @text Auto Batch From
 * @parent ---Quests 901 to 1000---
 * @desc Default 'From' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default Love
 *
 * @param Location: 901 to 1000
 * @text Auto Batch Location
 * @parent ---Quests 901 to 1000---
 * @desc Default 'Location' for quests with type |-=AUTO=-|
 * Text codes allowed.
 * @default RPG Maker Galaxy
 *
 * @param Quest 901
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 902
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 903
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 904
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 905
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 906
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 907
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 908
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 909
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 910
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 911
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 912
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 913
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 914
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 915
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 916
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 917
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 918
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 919
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 920
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 921
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 922
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 923
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 924
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 925
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 926
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 927
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 928
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 929
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 930
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 931
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 932
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 933
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 934
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 935
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 936
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 937
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 938
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 939
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 940
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 941
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 942
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 943
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 944
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 945
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 946
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 947
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 948
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 949
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 950
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 951
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 952
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 953
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 954
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 955
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 956
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 957
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 958
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 959
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 960
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 961
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 962
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 963
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 964
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 965
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 966
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 967
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 968
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 969
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 970
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 971
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 972
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 973
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 974
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 975
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 976
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 977
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 978
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 979
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 980
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 981
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 982
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 983
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 984
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 985
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 986
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 987
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 988
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 989
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 990
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 991
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 992
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 993
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 994
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 995
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 996
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 997
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 998
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 999
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Quest 1000
 * @parent ---Quests 901 to 1000---
 * @type struct<Quest>
 * @desc Modify the data used by this quest entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 */
/* ----------------------------------------------------------------------------
 * Quest Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~Quest:
 *
 * @param Title
 * @desc Title of the quest.
 * Text codes allowed.
 * @default \i[87]Untitled Quest
 *
 * @param Type
 * @parent Title
 * @type combo
 * @option |-=AUTO=-|
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc What type of quest is this?
 * Select |-=AUTO=-| for quest batch category default.
 * @default |-=AUTO=-|
 *
 * @param Difficulty
 * @parent Title
 * @desc Difficulty level for this quest.
 * Text codes allowed. Use |-=AUTO=-| for batch default.
 * @default |-=AUTO=-|
 *
 * @param From
 * @parent Title
 * @desc Insert the name of the NPC who issued this quest.
 * Text codes allowed. Use |-=AUTO=-| for batch default.
 * @default |-=AUTO=-|
 *
 * @param Location
 * @parent Title
 * @desc Insert the name of the NPC who issued this quest.
 * Text codes allowed. Use |-=AUTO=-| for batch default.
 * @default |-=AUTO=-|
 *
 * @param Description
 * @parent Title
 * @type note[]
 * @desc Type out the description used for this quest.
 * Text codes allowed.
 * @default ["\"This is the \\\\c[4]default\\\\c[0] quest description.\"","\"This is the \\\\c[4]default\\\\c[0] quest description.\\n\\nYou can insert multiple description entries in case you\\never want to update the quest description midway while the\\nquest is in progress.\""]
 *
 * @param Objectives List
 * @type note[]
 * @desc The objectives to be completed for this quest.
 * Text codes allowed.
 * @default ["\"\\\\c[4]First\\\\c[0] objective to be cleared.\"","\"\\\\c[4]Second\\\\c[0] objective, but it's hidden.\"","\"To make other objectives appear,\\nenable them through the \\\\c[4]'Visible\\nObjectives'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 *
 * @param Visible Objectives
 * @parent Objectives List
 * @type number[]
 * @min 1
 * @desc The objectives that are visible from the start.
 * @default ["1"]
 *
 * @param Rewards List
 * @type note[]
 * @desc The reward list for this quest.
 * Text codes allowed.
 * @default ["\"\\\\i[176]Potion x5\"","\"\\\\i[178]Ether x3\"","\"To make other rewards appear,\\nenable them through the \\\\c[4]'Visible\\nRewards'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 *
 * @param Visible Rewards
 * @parent Rewards List
 * @type number[]
 * @min 1
 * @desc The rewards that are visible from the start.
 * @default ["1"]
 *
 * @param Subtext
 * @type note[]
 * @desc Subtext to be displayed with the quest.
 * @default ["\"\"","\"This is a subtext. It is used as\\nextra text that you may want to\\nplace on your quest journal that\\ndiffers from the description.\""]
 */
//=============================================================================

if (Imported.YEP_QuestJournal) {
  //=============================================================================
  // Parameter Variables
  //=============================================================================

  /*:ja
   * @plugindesc v1.00 (要YEP_QuestJournal)クエスト101から1000を追加します。
   * @author Yanfly Engine Plugins
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
   * このプラグインはYEP_QuestJournalを必要とします。
   * プラグイン管理のYEP_QuestJournalの下に
   * このプラグインがあることを確認してください。
   *
   * YEP_QuestJournalプラグインには、
   * 作成してゲームに挿入できる100個のクエストエントリが付属しています。
   * RPGによっては、100個のクエストエントリーでは足りないかもしれません。
   * このプラグインは、
   * YEP_QuestJournal用に作られた一連の拡張プラグインの一部で、
   * 100よりも多いクエスト量を可能にします。
   *
   * YEP_X_MoreQuests 1はクエスト 101から1000を追加します。
   * YEP_X_MoreQuests 2はクエスト1001から2000を追加します。
   * YEP_X_MoreQuests 3はクエスト2001から3000を追加します。
   * YEP_X_MoreQuests 4はクエスト3001から4000を追加します。
   * YEP_X_MoreQuests 5はクエスト4001から5000を追加します。
   * YEP_X_MoreQuests 6はクエスト5001から6000を追加します。
   * YEP_X_MoreQuests 7はクエスト6001から7000を追加します。
   * YEP_X_MoreQuests 8はクエスト7001から8000を追加します。
   * YEP_X_MoreQuests 9はクエスト8001から9000を追加します。
   * YEP_X_MoreQuests10はクエスト9001から10000を追加します。
   *
   * これらの拡張プラグインには新機能、自動バッチデータもついてきます。
   * 100個のクエストのセット毎に、
   * デフォルトのタイプ、難易度、差出人、場所データを設定できます。
   * |-=AUTO=-| を持つクエストエントリのフィールドには、
   * バッチセットのデフォルトデータからデータが表示されます。
   * これをどのように使うかはあなた次第です。
   *
   * ===========================================================================
   * Changelog
   * ===========================================================================
   *
   * Version BETA:
   * - Started Plugin!
   *
   * ===========================================================================
   * End of Helpfile
   * ===========================================================================
   *
   * @param ---クエスト 101 から 200---
   * @text ---クエスト 101 から 200---
   * @default
   *
   * @param Category: 101 to 200
   * @text 種類：101から200
   * @parent ---クエスト 101 から 200---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：101 to 200
   * @text 難易度：101から200
   * @parent ---クエスト 101 から 200---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 101 to 200
   * @text 依頼者：101から200
   * @parent ---クエスト 101 から 200---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 101 to 200
   * @text 場所：101から200
   * @parent ---クエスト 101 から 200---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 101
   * @text クエスト101
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 102
   * @text クエスト102
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。@default
   *
   * @param Quest 103
   * @text クエスト103
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 104
   * @text クエスト104
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 105
   * @text クエスト105
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 106
   * @text クエスト106
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 107
   * @text クエスト107
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 108
   * @text クエスト108
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 109
   * @text クエスト109
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 110
   * @text クエスト110
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 111
   * @text クエスト111
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 112
   * @text クエスト112
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 113
   * @text クエスト113
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 114
   * @text クエスト114
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 115
   * @text クエスト115
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 116
   * @text クエスト116
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 117
   * @text クエスト117
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 118
   * @text クエスト118
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 119
   * @text クエスト119
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 120
   * @text クエスト120
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 121
   * @text クエスト121
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 122
   * @text クエスト122
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 123
   * @text クエスト123
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 124
   * @text クエスト124
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 125
   * @text クエスト125
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 126
   * @text クエスト126
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 127
   * @text クエスト127
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 128
   * @text クエスト128
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 129
   * @text クエスト129
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 130
   * @text クエスト130
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 131
   * @text クエスト131
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 132
   * @text クエスト132
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 133
   * @text クエスト133
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 134
   * @text クエスト134
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 135
   * @text クエスト135
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 136
   * @text クエスト136
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 137
   * @text クエスト137
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 138
   * @text クエスト138
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 139
   * @text クエスト139
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 140
   * @text クエスト140
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 141
   * @text クエスト141
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 142
   * @text クエスト142
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 143
   * @text クエスト143
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 144
   * @text クエスト144
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 145
   * @text クエスト145
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 146
   * @text クエスト146
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 147
   * @text クエスト147
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 148
   * @text クエスト148
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 149
   * @text クエスト149
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 150
   * @text クエスト150
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 151
   * @text クエスト151
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 152
   * @text クエスト152
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 153
   * @text クエスト153
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 154
   * @text クエスト154
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 155
   * @text クエスト155
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 156
   * @text クエスト156
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 157
   * @text クエスト157
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 158
   * @text クエスト158
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 159
   * @text クエスト159
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 160
   * @text クエスト160
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 161
   * @text クエスト161
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 162
   * @text クエスト162
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 163
   * @text クエスト163
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 164
   * @text クエスト164
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 165
   * @text クエスト165
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 166
   * @text クエスト166
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 167
   * @text クエスト167
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 168
   * @text クエスト168
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 169
   * @text クエスト169
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 170
   * @text クエスト170
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 171
   * @text クエスト171
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 172
   * @text クエスト172
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 173
   * @text クエスト173
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 174
   * @text クエスト174
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 175
   * @text クエスト175
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 176
   * @text クエスト176
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 177
   * @text クエスト177
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 178
   * @text クエスト178
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 179
   * @text クエスト179
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 180
   * @text クエスト180
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 181
   * @text クエスト181
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 182
   * @text クエスト182
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 183
   * @text クエスト183
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 184
   * @text クエスト184
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 185
   * @text クエスト185
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 186
   * @text クエスト186
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 187
   * @text クエスト187
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 188
   * @text クエスト188
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 189
   * @text クエスト189
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 190
   * @text クエスト190
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 191
   * @text クエスト191
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 192
   * @text クエスト192
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 193
   * @text クエスト193
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 194
   * @text クエスト194
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 195
   * @text クエスト195
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 196
   * @text クエスト196
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 197
   * @text クエスト197
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 198
   * @text クエスト198
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 199
   * @text クエスト199
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 200
   * @text クエスト200
   * @parent ---クエスト 101 から 200---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 201 から 300---
   * @text ---クエスト 201 から 300---
   * @default
   *
   * @param Category: 201 to 300
   * @text 種類：201から300
   * @parent ---クエスト 201 から 300---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：201 to 300
   * @text 難易度：201から300
   * @parent ---クエスト 201 から 300---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 201 to 300
   * @text 依頼者：201から300
   * @parent ---クエスト 201 から 300---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 201 to 300
   * @text 場所：201から300
   * @parent ---クエスト 201 から 300---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 201
   * @text クエスト201
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 202
   * @text クエスト202
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 203
   * @text クエスト203
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 204
   * @text クエスト204
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 205
   * @text クエスト205
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 206
   * @text クエスト206
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 207
   * @text クエスト207
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 208
   * @text クエスト208
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 209
   * @text クエスト209
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 210
   * @text クエスト210
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 211
   * @text クエスト211
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 212
   * @text クエスト212
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 213
   * @text クエスト213
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 214
   * @text クエスト214
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 215
   * @text クエスト215
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 216
   * @text クエスト216
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 217
   * @text クエスト217
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 218
   * @text クエスト218
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 219
   * @text クエスト219
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 220
   * @text クエスト220
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 221
   * @text クエスト221
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 222
   * @text クエスト222
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 223
   * @text クエスト223
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 224
   * @text クエスト224
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 225
   * @text クエスト225
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 226
   * @text クエスト226
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 227
   * @text クエスト227
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 228
   * @text クエスト228
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 229
   * @text クエスト229
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 230
   * @text クエスト230
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 231
   * @text クエスト231
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 232
   * @text クエスト232
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 233
   * @text クエスト233
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 234
   * @text クエスト234
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 235
   * @text クエスト235
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 236
   * @text クエスト236
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 237
   * @text クエスト237
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 238
   * @text クエスト238
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 239
   * @text クエスト239
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 240
   * @text クエスト240
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 241
   * @text クエスト241
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 242
   * @text クエスト242
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 243
   * @text クエスト243
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 244
   * @text クエスト244
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 245
   * @text クエスト245
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 246
   * @text クエスト246
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 247
   * @text クエスト247
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 248
   * @text クエスト248
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 249
   * @text クエスト249
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 250
   * @text クエスト250
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 251
   * @text クエスト251
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 252
   * @text クエスト252
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 253
   * @text クエスト253
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 254
   * @text クエスト254
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 255
   * @text クエスト255
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 256
   * @text クエスト256
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 257
   * @text クエスト257
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 258
   * @text クエスト258
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 259
   * @text クエスト259
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 260
   * @text クエスト260
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 261
   * @text クエスト261
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 262
   * @text クエスト262
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 263
   * @text クエスト263
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 264
   * @text クエスト264
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 265
   * @text クエスト265
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 266
   * @text クエスト266
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 267
   * @text クエスト267
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 268
   * @text クエスト268
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 269
   * @text クエスト269
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 270
   * @text クエスト270
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 271
   * @text クエスト271
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 272
   * @text クエスト272
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 273
   * @text クエスト273
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 274
   * @text クエスト274
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 275
   * @text クエスト275
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 276
   * @text クエスト276
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 277
   * @text クエスト277
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 278
   * @text クエスト278
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 279
   * @text クエスト279
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 280
   * @text クエスト280
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 281
   * @text クエスト281
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 282
   * @text クエスト282
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 283
   * @text クエスト283
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 284
   * @text クエスト284
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 285
   * @text クエスト285
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 286
   * @text クエスト286
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 287
   * @text クエスト287
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 288
   * @text クエスト288
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 289
   * @text クエスト289
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 290
   * @text クエスト290
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 291
   * @text クエスト291
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 292
   * @text クエスト292
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 293
   * @text クエスト293
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 294
   * @text クエスト294
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 295
   * @text クエスト295
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 296
   * @text クエスト296
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 297
   * @text クエスト297
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 298
   * @text クエスト298
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 299
   * @text クエスト299
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 300
   * @text クエスト300
   * @parent ---クエスト 201 から 300---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 301 から 400---
   * @text ---クエスト 301 から 400---
   * @default
   *
   * @param Category: 301 to 400
   * @text 種類：301から400
   * @parent ---クエスト 301 から 400---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：301 to 400
   * @text 難易度：301から400
   * @parent ---クエスト 301 から 400---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 301 to 400
   * @text 依頼者：301から400
   * @parent ---クエスト 301 から 400---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 301 to 400
   * @text 場所：301から400
   * @parent ---クエスト 301 から 400---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 301
   * @text クエスト301
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 302
   * @text クエスト302
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 303
   * @text クエスト303
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 304
   * @text クエスト304
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 305
   * @text クエスト305
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 306
   * @text クエスト306
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 307
   * @text クエスト307
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 308
   * @text クエスト308
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 309
   * @text クエスト309
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 310
   * @text クエスト310
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 311
   * @text クエスト311
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 312
   * @text クエスト312
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 313
   * @text クエスト313
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 314
   * @text クエスト314
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 315
   * @text クエスト315
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 316
   * @text クエスト316
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 317
   * @text クエスト317
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 318
   * @text クエスト318
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 319
   * @text クエスト319
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 320
   * @text クエスト320
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 321
   * @text クエスト321
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 322
   * @text クエスト322
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 323
   * @text クエスト323
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 324
   * @text クエスト324
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 325
   * @text クエスト325
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 326
   * @text クエスト326
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 327
   * @text クエスト327
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 328
   * @text クエスト328
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 329
   * @text クエスト329
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 330
   * @text クエスト330
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 331
   * @text クエスト331
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 332
   * @text クエスト332
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 333
   * @text クエスト333
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 334
   * @text クエスト334
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 335
   * @text クエスト335
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 336
   * @text クエスト336
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 337
   * @text クエスト337
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 338
   * @text クエスト338
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 339
   * @text クエスト339
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 340
   * @text クエスト340
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 341
   * @text クエスト341
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 342
   * @text クエスト342
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 343
   * @text クエスト343
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 344
   * @text クエスト344
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 345
   * @text クエスト345
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 346
   * @text クエスト346
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 347
   * @text クエスト347
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 348
   * @text クエスト348
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 349
   * @text クエスト349
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 350
   * @text クエスト350
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 351
   * @text クエスト351
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 352
   * @text クエスト352
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 353
   * @text クエスト353
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 354
   * @text クエスト354
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 355
   * @text クエスト355
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 356
   * @text クエスト356
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 357
   * @text クエスト357
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 358
   * @text クエスト358
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 359
   * @text クエスト359
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 360
   * @text クエスト360
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 361
   * @text クエスト361
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 362
   * @text クエスト362
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 363
   * @text クエスト363
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 364
   * @text クエスト364
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 365
   * @text クエスト365
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 366
   * @text クエスト366
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 367
   * @text クエスト367
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 368
   * @text クエスト368
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 369
   * @text クエスト369
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 370
   * @text クエスト370
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 371
   * @text クエスト371
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 372
   * @text クエスト372
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 373
   * @text クエスト373
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 374
   * @text クエスト374
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 375
   * @text クエスト375
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 376
   * @text クエスト376
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 377
   * @text クエスト377
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 378
   * @text クエスト378
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 379
   * @text クエスト379
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 380
   * @text クエスト380
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 381
   * @text クエスト381
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 382
   * @text クエスト382
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 383
   * @text クエスト383
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 384
   * @text クエスト384
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 385
   * @text クエスト385
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 386
   * @text クエスト386
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 387
   * @text クエスト387
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 388
   * @text クエスト388
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 389
   * @text クエスト389
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 390
   * @text クエスト390
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 391
   * @text クエスト391
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 392
   * @text クエスト392
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 393
   * @text クエスト393
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 394
   * @text クエスト394
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 395
   * @text クエスト395
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 396
   * @text クエスト396
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 397
   * @text クエスト397
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 398
   * @text クエスト398
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 399
   * @text クエスト399
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 400
   * @text クエスト400
   * @parent ---クエスト 301 から 400---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 401 から 500---
   * @text ---クエスト 401 から 500---
   * @default
   *
   * @param Category: 401 to 500
   * @text 種類：401から500
   * @parent ---クエスト 401 から 500---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：401 to 500
   * @text 難易度：401から500
   * @parent ---クエスト 401 から 500---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 401 to 500
   * @text 依頼者：401から500
   * @parent ---クエスト 401 から 500---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 401 to 500
   * @text 場所：401から500
   * @parent ---クエスト 401 から 500---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 401
   * @text クエスト401
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 402
   * @text クエスト402
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 403
   * @text クエスト403
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 404
   * @text クエスト404
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 405
   * @text クエスト405
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 406
   * @text クエスト406
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 407
   * @text クエスト407
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 408
   * @text クエスト408
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 409
   * @text クエスト409
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 410
   * @text クエスト410
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 411
   * @text クエスト411
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 412
   * @text クエスト412
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 413
   * @text クエスト413
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 414
   * @text クエスト414
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 415
   * @text クエスト415
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 416
   * @text クエスト416
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 417
   * @text クエスト417
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 418
   * @text クエスト418
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 419
   * @text クエスト419
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 420
   * @text クエスト420
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 421
   * @text クエスト421
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 422
   * @text クエスト422
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 423
   * @text クエスト423
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 424
   * @text クエスト424
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 425
   * @text クエスト425
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 426
   * @text クエスト426
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 427
   * @text クエスト427
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 428
   * @text クエスト428
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 429
   * @text クエスト429
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 430
   * @text クエスト430
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 431
   * @text クエスト431
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 432
   * @text クエスト432
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 433
   * @text クエスト433
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 434
   * @text クエスト434
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 435
   * @text クエスト435
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 436
   * @text クエスト436
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 437
   * @text クエスト437
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 438
   * @text クエスト438
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 439
   * @text クエスト439
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 440
   * @text クエスト440
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 441
   * @text クエスト441
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 442
   * @text クエスト442
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 443
   * @text クエスト443
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 444
   * @text クエスト444
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 445
   * @text クエスト445
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 446
   * @text クエスト446
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 447
   * @text クエスト447
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 448
   * @text クエスト448
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 449
   * @text クエスト449
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 450
   * @text クエスト450
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 451
   * @text クエスト451
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 452
   * @text クエスト452
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 453
   * @text クエスト453
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 454
   * @text クエスト454
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 455
   * @text クエスト455
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 456
   * @text クエスト456
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 457
   * @text クエスト457
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 458
   * @text クエスト458
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 459
   * @text クエスト459
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 460
   * @text クエスト460
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 461
   * @text クエスト461
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 462
   * @text クエスト462
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 463
   * @text クエスト463
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 464
   * @text クエスト464
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 465
   * @text クエスト465
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 466
   * @text クエスト466
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 467
   * @text クエスト467
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 468
   * @text クエスト468
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 469
   * @text クエスト469
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 470
   * @text クエスト470
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 471
   * @text クエスト471
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 472
   * @text クエスト472
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 473
   * @text クエスト473
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 474
   * @text クエスト474
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 475
   * @text クエスト475
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 476
   * @text クエスト476
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 477
   * @text クエスト477
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 478
   * @text クエスト478
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 479
   * @text クエスト479
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 480
   * @text クエスト480
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 481
   * @text クエスト481
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 482
   * @text クエスト482
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 483
   * @text クエスト483
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 484
   * @text クエスト484
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 485
   * @text クエスト485
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 486
   * @text クエスト486
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 487
   * @text クエスト487
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 488
   * @text クエスト488
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 489
   * @text クエスト489
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 490
   * @text クエスト490
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 491
   * @text クエスト491
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 492
   * @text クエスト492
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 493
   * @text クエスト493
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 494
   * @text クエスト494
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 495
   * @text クエスト495
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 496
   * @text クエスト496
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 497
   * @text クエスト497
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 498
   * @text クエスト498
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 499
   * @text クエスト499
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 500
   * @text クエスト500
   * @parent ---クエスト 401 から 500---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 501 から 600---
   * @text ---クエスト 501 から 600---
   * @default
   *
   * @param Category: 501 to 600
   * @text 種類：501から600
   * @parent ---クエスト 501 から 600---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：501 to 600
   * @text 難易度：501から600
   * @parent ---クエスト 501 から 600---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 501 to 600
   * @text 依頼者：501から600
   * @parent ---クエスト 501 から 600---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 501 to 600
   * @text 場所：501から600
   * @parent ---クエスト 501 から 600---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 501
   * @text クエスト501
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 502
   * @text クエスト502
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 503
   * @text クエスト503
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 504
   * @text クエスト504
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 505
   * @text クエスト505
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 506
   * @text クエスト506
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 507
   * @text クエスト507
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 508
   * @text クエスト508
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 509
   * @text クエスト509
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 510
   * @text クエスト510
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 511
   * @text クエスト511
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 512
   * @text クエスト512
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 513
   * @text クエスト513
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 514
   * @text クエスト514
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 515
   * @text クエスト515
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 516
   * @text クエスト516
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 517
   * @text クエスト517
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 518
   * @text クエスト518
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 519
   * @text クエスト519
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 520
   * @text クエスト520
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 521
   * @text クエスト521
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 522
   * @text クエスト522
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 523
   * @text クエスト523
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 524
   * @text クエスト524
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 525
   * @text クエスト525
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 526
   * @text クエスト526
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 527
   * @text クエスト527
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 528
   * @text クエスト528
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 529
   * @text クエスト529
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 530
   * @text クエスト530
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 531
   * @text クエスト531
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 532
   * @text クエスト532
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 533
   * @text クエスト533
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 534
   * @text クエスト534
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 535
   * @text クエスト535
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 536
   * @text クエスト536
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 537
   * @text クエスト537
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 538
   * @text クエスト538
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 539
   * @text クエスト539
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 540
   * @text クエスト540
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 541
   * @text クエスト541
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 542
   * @text クエスト542
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 543
   * @text クエスト543
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 544
   * @text クエスト544
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 545
   * @text クエスト545
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 546
   * @text クエスト546
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 547
   * @text クエスト547
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 548
   * @text クエスト548
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 549
   * @text クエスト549
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 550
   * @text クエスト550
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 551
   * @text クエスト551
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 552
   * @text クエスト552
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 553
   * @text クエスト553
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 554
   * @text クエスト554
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 555
   * @text クエスト555
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 556
   * @text クエスト556
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 557
   * @text クエスト557
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 558
   * @text クエスト558
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 559
   * @text クエスト559
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 560
   * @text クエスト560
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 561
   * @text クエスト561
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 562
   * @text クエスト562
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 563
   * @text クエスト563
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 564
   * @text クエスト564
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 565
   * @text クエスト565
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 566
   * @text クエスト566
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 567
   * @text クエスト567
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 568
   * @text クエスト568
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 569
   * @text クエスト569
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 570
   * @text クエスト570
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 571
   * @text クエスト571
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 572
   * @text クエスト572
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 573
   * @text クエスト573
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 574
   * @text クエスト574
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 575
   * @text クエスト575
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 576
   * @text クエスト576
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 577
   * @text クエスト577
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 578
   * @text クエスト578
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 579
   * @text クエスト579
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 580
   * @text クエスト580
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 581
   * @text クエスト581
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 582
   * @text クエスト582
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 583
   * @text クエスト583
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 584
   * @text クエスト584
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 585
   * @text クエスト585
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 586
   * @text クエスト586
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 587
   * @text クエスト587
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 588
   * @text クエスト588
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 589
   * @text クエスト589
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 590
   * @text クエスト590
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 591
   * @text クエスト591
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 592
   * @text クエスト592
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 593
   * @text クエスト593
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 594
   * @text クエスト594
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 595
   * @text クエスト595
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 596
   * @text クエスト596
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 597
   * @text クエスト597
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 598
   * @text クエスト598
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 599
   * @text クエスト599
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 600
   * @text クエスト600
   * @parent ---クエスト 501 から 600---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 601 から 700---
   * @text ---クエスト 601 から 700---
   * @default
   *
   * @param Category: 601 to 700
   * @text 種類：601から700
   * @parent ---クエスト 601 から 700---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：601 to 700
   * @text 難易度：601から700
   * @parent ---クエスト 601 から 700---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 601 to 700
   * @text 依頼者：601から700
   * @parent ---クエスト 601 から 700---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 601 to 700
   * @text 場所：601から700
   * @parent ---クエスト 601 から 700---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 601
   * @text クエスト601
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 602
   * @text クエスト602
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 603
   * @text クエスト603
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 604
   * @text クエスト604
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 605
   * @text クエスト605
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 606
   * @text クエスト606
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 607
   * @text クエスト607
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 608
   * @text クエスト608
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 609
   * @text クエスト609
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 610
   * @text クエスト610
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 611
   * @text クエスト611
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 612
   * @text クエスト612
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 613
   * @text クエスト613
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 614
   * @text クエスト614
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 615
   * @text クエスト615
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 616
   * @text クエスト616
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 617
   * @text クエスト617
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 618
   * @text クエスト618
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 619
   * @text クエスト619
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 620
   * @text クエスト620
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 621
   * @text クエスト621
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 622
   * @text クエスト622
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 623
   * @text クエスト623
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 624
   * @text クエスト624
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 625
   * @text クエスト625
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 626
   * @text クエスト626
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 627
   * @text クエスト627
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 628
   * @text クエスト628
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 629
   * @text クエスト629
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 630
   * @text クエスト630
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 631
   * @text クエスト631
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 632
   * @text クエスト632
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 633
   * @text クエスト633
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 634
   * @text クエスト634
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 635
   * @text クエスト635
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 636
   * @text クエスト636
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 637
   * @text クエスト637
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 638
   * @text クエスト638
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 639
   * @text クエスト639
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 640
   * @text クエスト640
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 641
   * @text クエスト641
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 642
   * @text クエスト642
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 643
   * @text クエスト643
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 644
   * @text クエスト644
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 645
   * @text クエスト645
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 646
   * @text クエスト646
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 647
   * @text クエスト647
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 648
   * @text クエスト648
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 649
   * @text クエスト649
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 650
   * @text クエスト650
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 651
   * @text クエスト651
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 652
   * @text クエスト652
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 653
   * @text クエスト653
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 654
   * @text クエスト654
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 655
   * @text クエスト655
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 656
   * @text クエスト656
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 657
   * @text クエスト657
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 658
   * @text クエスト658
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 659
   * @text クエスト659
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 660
   * @text クエスト660
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 661
   * @text クエスト661
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 662
   * @text クエスト662
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 663
   * @text クエスト663
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 664
   * @text クエスト664
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 665
   * @text クエスト665
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 666
   * @text クエスト666
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 667
   * @text クエスト667
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 668
   * @text クエスト668
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 669
   * @text クエスト669
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 670
   * @text クエスト670
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 671
   * @text クエスト671
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 672
   * @text クエスト672
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 673
   * @text クエスト673
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 674
   * @text クエスト674
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 675
   * @text クエスト675
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 676
   * @text クエスト676
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 677
   * @text クエスト677
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 678
   * @text クエスト678
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 679
   * @text クエスト679
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 680
   * @text クエスト680
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 681
   * @text クエスト681
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 682
   * @text クエスト682
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 683
   * @text クエスト683
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 684
   * @text クエスト684
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 685
   * @text クエスト685
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 686
   * @text クエスト686
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 687
   * @text クエスト687
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 688
   * @text クエスト688
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 689
   * @text クエスト689
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 690
   * @text クエスト690
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 691
   * @text クエスト691
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 692
   * @text クエスト692
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 693
   * @text クエスト693
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 694
   * @text クエスト694
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 695
   * @text クエスト695
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 696
   * @text クエスト696
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 697
   * @text クエスト697
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 698
   * @text クエスト698
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 699
   * @text クエスト699
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 700
   * @text クエスト700
   * @parent ---クエスト 601 から 700---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 701 から 800---
   * @text ---クエスト 701 から 800---
   * @default
   *
   * @param Category: 701 to 800
   * @text 種類：701から800
   * @parent ---クエスト 701 から 800---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：701 to 800
   * @text 難易度：701から800
   * @parent ---クエスト 701 から 800---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 701 to 800
   * @text 依頼者：701から800
   * @parent ---クエスト 701 から 800---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 701 to 800
   * @text 場所：701から800
   * @parent ---クエスト 701 から 800---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 701
   * @text クエスト701
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 702
   * @text クエスト702
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 703
   * @text クエスト703
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 704
   * @text クエスト704
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 705
   * @text クエスト705
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 706
   * @text クエスト706
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 707
   * @text クエスト707
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 708
   * @text クエスト708
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 709
   * @text クエスト709
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 710
   * @text クエスト710
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 711
   * @text クエスト711
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 712
   * @text クエスト712
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 713
   * @text クエスト713
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 714
   * @text クエスト714
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 715
   * @text クエスト715
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 716
   * @text クエスト716
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 717
   * @text クエスト717
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 718
   * @text クエスト718
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 719
   * @text クエスト719
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 720
   * @text クエスト720
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 721
   * @text クエスト721
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 722
   * @text クエスト722
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 723
   * @text クエスト723
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 724
   * @text クエスト724
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 725
   * @text クエスト725
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 726
   * @text クエスト726
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 727
   * @text クエスト727
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 728
   * @text クエスト728
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 729
   * @text クエスト729
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 730
   * @text クエスト730
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 731
   * @text クエスト731
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 732
   * @text クエスト732
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 733
   * @text クエスト733
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 734
   * @text クエスト734
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 735
   * @text クエスト735
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 736
   * @text クエスト736
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 737
   * @text クエスト737
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 738
   * @text クエスト738
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 739
   * @text クエスト739
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 740
   * @text クエスト740
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 741
   * @text クエスト741
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 742
   * @text クエスト742
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 743
   * @text クエスト743
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 744
   * @text クエスト744
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 745
   * @text クエスト745
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 746
   * @text クエスト746
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 747
   * @text クエスト747
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 748
   * @text クエスト748
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 749
   * @text クエスト749
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 750
   * @text クエスト750
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 751
   * @text クエスト751
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 752
   * @text クエスト752
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 753
   * @text クエスト753
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 754
   * @text クエスト754
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 755
   * @text クエスト755
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 756
   * @text クエスト756
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 757
   * @text クエスト757
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 758
   * @text クエスト758
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 759
   * @text クエスト759
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 760
   * @text クエスト760
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 761
   * @text クエスト761
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 762
   * @text クエスト762
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 763
   * @text クエスト763
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 764
   * @text クエスト764
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 765
   * @text クエスト765
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 766
   * @text クエスト766
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 767
   * @text クエスト767
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 768
   * @text クエスト768
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 769
   * @text クエスト769
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 770
   * @text クエスト770
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 771
   * @text クエスト771
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 772
   * @text クエスト772
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 773
   * @text クエスト773
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 774
   * @text クエスト774
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 775
   * @text クエスト775
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 776
   * @text クエスト776
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 777
   * @text クエスト777
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 778
   * @text クエスト778
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 779
   * @text クエスト779
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 780
   * @text クエスト780
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 781
   * @text クエスト781
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 782
   * @text クエスト782
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 783
   * @text クエスト783
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 784
   * @text クエスト784
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 785
   * @text クエスト785
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 786
   * @text クエスト786
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 787
   * @text クエスト787
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 788
   * @text クエスト788
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 789
   * @text クエスト789
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 790
   * @text クエスト790
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 791
   * @text クエスト791
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 792
   * @text クエスト792
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 793
   * @text クエスト793
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 794
   * @text クエスト794
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 795
   * @text クエスト795
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 796
   * @text クエスト796
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 797
   * @text クエスト797
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 798
   * @text クエスト798
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 799
   * @text クエスト799
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 800
   * @text クエスト800
   * @parent ---クエスト 701 から 800---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 801 から 900---
   * @text ---クエスト 801 から 900---
   * @default
   *
   * @param Category: 801 to 900
   * @text 種類：801から900
   * @parent ---クエスト 801 から 900---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：801 to 900
   * @text 難易度：801から900
   * @parent ---クエスト 801 から 900---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 801 to 900
   * @text 依頼者：801から900
   * @parent ---クエスト 801 から 900---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 801 to 900
   * @text 場所：801から900
   * @parent ---クエスト 801 から 900---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 801
   * @text クエスト801
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 802
   * @text クエスト802
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 803
   * @text クエスト803
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 804
   * @text クエスト804
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 805
   * @text クエスト805
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 806
   * @text クエスト806
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 807
   * @text クエスト807
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 808
   * @text クエスト808
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 809
   * @text クエスト809
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 810
   * @text クエスト810
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 811
   * @text クエスト811
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 812
   * @text クエスト812
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 813
   * @text クエスト813
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 814
   * @text クエスト814
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 815
   * @text クエスト815
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 816
   * @text クエスト816
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 817
   * @text クエスト817
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 818
   * @text クエスト818
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 819
   * @text クエスト819
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 820
   * @text クエスト820
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 821
   * @text クエスト821
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 822
   * @text クエスト822
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 823
   * @text クエスト823
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 824
   * @text クエスト824
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 825
   * @text クエスト825
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 826
   * @text クエスト826
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 827
   * @text クエスト827
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 828
   * @text クエスト828
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 829
   * @text クエスト829
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 830
   * @text クエスト830
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 831
   * @text クエスト831
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 832
   * @text クエスト832
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 833
   * @text クエスト833
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 834
   * @text クエスト834
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 835
   * @text クエスト835
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 836
   * @text クエスト836
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 837
   * @text クエスト837
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 838
   * @text クエスト838
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 839
   * @text クエスト839
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 840
   * @text クエスト840
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 841
   * @text クエスト841
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 842
   * @text クエスト842
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 843
   * @text クエスト843
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 844
   * @text クエスト844
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 845
   * @text クエスト845
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 846
   * @text クエスト846
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 847
   * @text クエスト847
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 848
   * @text クエスト848
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 849
   * @text クエスト849
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 850
   * @text クエスト850
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 851
   * @text クエスト851
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 852
   * @text クエスト852
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 853
   * @text クエスト853
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 854
   * @text クエスト854
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 855
   * @text クエスト855
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 856
   * @text クエスト856
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 857
   * @text クエスト857
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 858
   * @text クエスト858
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 859
   * @text クエスト859
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 860
   * @text クエスト860
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 861
   * @text クエスト861
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 862
   * @text クエスト862
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 863
   * @text クエスト863
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 864
   * @text クエスト864
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 865
   * @text クエスト865
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 866
   * @text クエスト866
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 867
   * @text クエスト867
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 868
   * @text クエスト868
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 869
   * @text クエスト869
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 870
   * @text クエスト870
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 871
   * @text クエスト871
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 872
   * @text クエスト872
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 873
   * @text クエスト873
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 874
   * @text クエスト874
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 875
   * @text クエスト875
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 876
   * @text クエスト876
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 877
   * @text クエスト877
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 878
   * @text クエスト878
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 879
   * @text クエスト879
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 880
   * @text クエスト880
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 881
   * @text クエスト881
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 882
   * @text クエスト882
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 883
   * @text クエスト883
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 884
   * @text クエスト884
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 885
   * @text クエスト885
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 886
   * @text クエスト886
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 887
   * @text クエスト887
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 888
   * @text クエスト888
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 889
   * @text クエスト889
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 890
   * @text クエスト890
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 891
   * @text クエスト891
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 892
   * @text クエスト892
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 893
   * @text クエスト893
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 894
   * @text クエスト894
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 895
   * @text クエスト895
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 896
   * @text クエスト896
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 897
   * @text クエスト897
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 898
   * @text クエスト898
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 899
   * @text クエスト899
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 900
   * @text クエスト900
   * @parent ---クエスト 801 から 900---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param ---クエスト 901 から 1000---
   * @text ---クエスト 901 から 1000---
   * @default
   *
   * @param Category: 901 to 1000
   * @text 種類：901から1000
   * @parent ---クエスト 901 から 1000---
   * @type combo
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc |-=AUTO=-|タイプのデフォルトのクエストの種類。注:'Quest List Window'に新しいクエストタイプを追加してください
   * @default メイン
   *
   * @param 難易度：901 to 1000
   * @text 難易度：901から1000
   * @parent ---クエスト 901 から 1000---
   * @desc |-=AUTO=-|タイプのデフォルトの難易度。制御文字使用可
   * @default \i[87]\i[87]\i[87]
   *
   * @param From: 901 to 1000
   * @text 依頼者：901から1000
   * @parent ---クエスト 901 から 1000---
   * @desc |-=AUTO=-|タイプのデフォルトの依頼者。制御文字使用可
   * @default NPCの名前
   *
   * @param Location: 901 to 1000
   * @text 場所：901から1000
   * @parent ---クエスト 901 から 1000---
   * @desc |-=AUTO=-|タイプのデフォルトの場所。制御文字使用可
   * @default NPCの場所
   *
   * @param Quest 901
   * @text クエスト901
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 902
   * @text クエスト902
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 903
   * @text クエスト903
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 904
   * @text クエスト904
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 905
   * @text クエスト905
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 906
   * @text クエスト906
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 907
   * @text クエスト907
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 908
   * @text クエスト908
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 909
   * @text クエスト909
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 910
   * @text クエスト910
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 911
   * @text クエスト911
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 912
   * @text クエスト912
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 913
   * @text クエスト913
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 914
   * @text クエスト914
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 915
   * @text クエスト915
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 916
   * @text クエスト916
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 917
   * @text クエスト917
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 918
   * @text クエスト918
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 919
   * @text クエスト919
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 920
   * @text クエスト920
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 921
   * @text クエスト921
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 922
   * @text クエスト922
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 923
   * @text クエスト923
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 924
   * @text クエスト924
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 925
   * @text クエスト925
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 926
   * @text クエスト926
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 927
   * @text クエスト927
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 928
   * @text クエスト928
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 929
   * @text クエスト929
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 930
   * @text クエスト930
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 931
   * @text クエスト931
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 932
   * @text クエスト932
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 933
   * @text クエスト933
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 934
   * @text クエスト934
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 935
   * @text クエスト935
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 936
   * @text クエスト936
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 937
   * @text クエスト937
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 938
   * @text クエスト938
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 939
   * @text クエスト939
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 940
   * @text クエスト940
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 941
   * @text クエスト941
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 942
   * @text クエスト942
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 943
   * @text クエスト943
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 944
   * @text クエスト944
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 945
   * @text クエスト945
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 946
   * @text クエスト946
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 947
   * @text クエスト947
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 948
   * @text クエスト948
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 949
   * @text クエスト949
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 950
   * @text クエスト950
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 951
   * @text クエスト951
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 952
   * @text クエスト952
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 953
   * @text クエスト953
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 954
   * @text クエスト954
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 955
   * @text クエスト955
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 956
   * @text クエスト956
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 957
   * @text クエスト957
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 958
   * @text クエスト958
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 959
   * @text クエスト959
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 960
   * @text クエスト960
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 961
   * @text クエスト961
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 962
   * @text クエスト962
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 963
   * @text クエスト963
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 964
   * @text クエスト964
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 965
   * @text クエスト965
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 966
   * @text クエスト966
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 967
   * @text クエスト967
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 968
   * @text クエスト968
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 969
   * @text クエスト969
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 970
   * @text クエスト970
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 971
   * @text クエスト971
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 972
   * @text クエスト972
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 973
   * @text クエスト973
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 974
   * @text クエスト974
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 975
   * @text クエスト975
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 976
   * @text クエスト976
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 977
   * @text クエスト977
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 978
   * @text クエスト978
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 979
   * @text クエスト979
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 980
   * @text クエスト980
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 981
   * @text クエスト981
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 982
   * @text クエスト982
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 983
   * @text クエスト983
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 984
   * @text クエスト984
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 985
   * @text クエスト985
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 986
   * @text クエスト986
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 987
   * @text クエスト987
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 988
   * @text クエスト988
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 989
   * @text クエスト989
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 990
   * @text クエスト990
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 991
   * @text クエスト991
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 992
   * @text クエスト992
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 993
   * @text クエスト993
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 994
   * @text クエスト994
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 995
   * @text クエスト995
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 996
   * @text クエスト996
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 997
   * @text クエスト997
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 998
   * @text クエスト998
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 999
   * @text クエスト999
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   * @param Quest 1000
   * @text クエスト1000
   * @parent ---クエスト 901 から 1000---
   * @type struct<Quest>
   * @desc このクエストエントリで使用されているデータを変更します。各設定の詳細については、ヘルプを参照してください。
   * @default
   *
   *
   * ---------------------------------------------------------------------------
   * Quest Parameter Structure
   * ---------------------------------------------------------------------------
   *
   * struct~Quest:ja
   *
   * @param Title
   * @text タイトル
   * @desc クエストのタイトル。制御文字使用可
   * @default \i[87]無題のクエスト
   *
   * @param Type
   * @text 種類
   * @parent Title
   * @type combo
   * @option |-=AUTO=-|
   * @option メイン
   * @option サイド
   * @option 人物
   * @option 指導
   * @desc クエストの種類。|-=AUTO=-|を選択すると、バッチのデフォルト
   * @default |-=AUTO=-|
   *
   * @param Difficulty
   * @text 難易度
   * @parent Title
   * @descクエストの難易度。制御文字使用可。|-=AUTO=-|を選択すると、バッチのデフォルト
   * @default |-=AUTO=-|
   *
   * @param From
   * @text 依頼者
   * @parent Title
   * @desc NPCの名前。制御文字使用可。|-=AUTO=-|を選択すると、バッチのデフォルト
   * @default |-=AUTO=-|
   *
   * @param Location
   * @text 場所
   * @parent Title
   * @desc NPCの場所。制御文字使用可。|-=AUTO=-|を選択すると、バッチのデフォルト
   * @default |-=AUTO=-|
   *
   * @param Description
   * @text 説明
   * @parent Title
   * @type note[]
   * @desc クエストの説明。制御文字使用可
   * @default ["\"これがデフォルトのクエストの説明です。\"","\"これがデフォルトのクエストの説明です。\\n\\nクエストの進行中に途中でクエストの説明を更新したい場合、\\n複数の説明エントリを挿入できます。\""]
   *
   * @param Objectives List
   * @text 目標
   * @type note[]
   * @desc クエストの目標。制御文字使用可
   * @default ["\"クリアする最初の目的\"","\"第二の目的、しかしそれは隠されています。\"","\"他の目的を表示するには、\\n'Visible Objectives'プラグインパラメータを使用するか、\\nプラグインコマンドを使用してそれらを表示させます。\""]
   *
   * @param Visible Objectives
   * @text 目的
   * @parent Objectives List
   * @type number[]
   * @min 1
   * @desc 最初から見える目的。
   * @default ["1"]
   *
   * @param Rewards List
   * @text 報酬リスト
   * @type note[]
   * @desc クエストの報酬リスト。制御文字使用可
   * @default ["\"\\\\i[176]ポーション x5\"","\"\\\\i[178]エーテル x3\"","\"他の報酬を表示するには、\\n'Visible Rewards'プラグインパラメータを使用するか、\\nプラグインコマンドを使用して表示させます。\""]
   *
   * @param Visible Rewards
   * @text 見える報酬
   * @parent Rewards List
   * @type number[]
   * @min 1
   * @desc 最初から見える報酬。
   * @default ["1"]
   *
   * @param Subtext
   * @text サブテキスト
   * @type note[]
   * @desc クエストのサブテキスト。
   * @default ["\"\"","\"これはサブテキストです。\\n\\n説明とは異なる、クエストジャーナルに\\n追加のテキストとして使用されます。\""]
   */

  Yanfly.Parameters = PluginManager.parameters("YEP_X_MoreQuests1");
  Yanfly.Param = Yanfly.Param || {};

  DataManager.questDatabaseCreate = function () {
    $dataQuests = $dataQuests || [null];
    var index1 = [101, 201, 301, 401, 501, 601, 701, 801, 901];
    var index2 = [200, 300, 400, 500, 600, 700, 800, 900, 1000];
    var length = index1.length;
    for (var n = 0; n < length; ++n) {
      var a = index1[n];
      var b = index2[n];
      var str = a + " to " + b;

      for (var i = a; i <= b; ++i) {
        var questData = JSON.parse(Yanfly.Parameters["Quest " + i] || "null");
        if (!questData) continue;
        if (questData["Type"] === "|-=AUTO=-|") {
          questData["Type"] = Yanfly.Parameters["Category: " + str];
        }
        if (questData["Difficulty"] === "|-=AUTO=-|") {
          questData["Difficulty"] = Yanfly.Parameters["Difficulty: " + str];
        }
        if (questData["From"] === "|-=AUTO=-|") {
          questData["From"] = Yanfly.Parameters["From: " + str];
        }
        if (questData["Location"] === "|-=AUTO=-|") {
          questData["Location"] = Yanfly.Parameters["Location: " + str];
        }
        this.questDatabaseAdd(i, questData);
      }
    }
  };

  DataManager.questDatabaseCreate();

  //=============================================================================
  // End of File
  //=============================================================================
} else {
  var text = "";
  text += "You are getting this error because you are trying to run ";
  text +=
    "YEP_X_MoreQuests1 without YEP_QuestJournal. Please visit Yanfly.moe ";
  text +=
    "and install YEP_QuestJournal in your game project before you can use ";
  text += "this plugin.";
  console.log(text);
  require("nw.gui").Window.get().showDevTools();
} // Imported.YEP_QuestJournal
