//=============================================================================
// SAN_FileDeleter.js
//=============================================================================
// Copyright (c) 2016 Sanshiro
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 未使用素材ファイル削除 1.1.1
 * 使用前に必ずバックアップを取ってください。
 * @author サンシロ https://twitter.com/rev2nym
 * @version 1.1.1 2016/12/16 リファクタリング。
 * 1.1.0 2016/12/15 スクリプトコマンドを追加。テスト実行時のみに限定するよう変更。テスト実行時以外ではエラーを返すよう変更。
 * 1.02 2016/08/13 ディレクトリパスに'www'が含まれると正常に動作しない不具合を修正。
 * 1.01 2016/07/06 '$'や'!'等を含む名前のファイルを削除する不具合を修正。その他リファクタリング。
 * 1.00 2016/07/05 公開。
 * 
 * @help
 * ！！注意！！
 * このプラグインはプロジェクト内の一部ファイルを削除します。
 * 使用前に必ずバックアップを取ってください。
 * 
 * ■概要
 * 未使用と推定される画像ファイルと音声ファイルを削除します。
 * テスト起動時において、audioフォルダとimgフォルダ内のファイル名を
 * dataフォルダとjsフォルダ内のファイル内容から検索し、未検出なら削除します。
 * 
 * ■実行コマンド
 * ファイル削除を実行するには次のスクリプトコマンドを実行してください。
 *   StorageManager.deleteFiles()
 *
 * または次のプラグインコマンドを実行してください。
 *   SAN_FileDeleter DeleteFiles
 * 
 * テスト起動時以外ではファイルを削除せずエラー終了します。
 * 
 * ■利用規約
 * MITライセンスのもと、商用利用、改変、再配布が可能です。
 * ただし冒頭のコメントは削除や改変をしないでください。
 * 
 * これを利用したことによるいかなる損害にも作者は責任を負いません。
 * サポートは期待しないでください＞＜。
 */

var Imported = Imported || {};
Imported.SAN_FileDeleter = true;

var Sanshiro = Sanshiro || {};
Sanshiro.FileDeleter = Sanshiro.FileDeleter || {};
Sanshiro.FileDeleter.version = '1.1.1';

(function (SAN) {
    'use strict';

    //-----------------------------------------------------------------------------
    // FileDeleter
    //
    // ファイルデリーター

    function FileDeleter() {
        throw new Error('This is a static class');
    };

    // 素材ファイルパスリスト
    FileDeleter._assetFilePathList = [];

    // 制御ファイルパスリスト(jsonファイル及びjsファイル)
    FileDeleter._controlFilePathList = [];

    // 使用素材ファイルパスリスト
    FileDeleter._usedFilePathList = [];

    // 未使用素材ファイルパスリスト
    FileDeleter._unusedFilePathList = [];

    // 制御ファイル内容のキャッシュ
    FileDeleter._controlFileCache = {};

    // インデックスファイルディレクトリパス
    FileDeleter.indexDirectoryPath = function () {
        var path = require('path');
        var dirName = path.dirname(process.mainModule.filename);
        return decodeURIComponent(dirName);
    };

    // データベースファイルディレクトリパス
    FileDeleter.dataDirectoryPath = function () {
        return this.indexDirectoryPath() + '/data';
    };

    // スクリプトファイルディレクトリパス
    FileDeleter.jsDirectoryPath = function () {
        return this.indexDirectoryPath() + '/js';
    };

    // 画像ファイルディレクトリパス
    FileDeleter.imgDirectoryPath = function () {
        return this.indexDirectoryPath() + '/img';
    };

    // 音声ファイルディレクトリパス
    FileDeleter.audioDirectoryPath = function () {
        return this.indexDirectoryPath() + '/audio';
    };

    // ファイルパスリストのセットアップ
    FileDeleter.setupFilePathLists = function () {
        this.setupAssetFilePathList();
        this.setupControlFilePathList();
        this.setupUsedFilePathList();
        this.setupUnusedFilePathList();
    };

    // ファイルパスリストのクリア
    FileDeleter.clearFilePathLists = function () {
        this._assetFilePathList = [];
        this._controlFilePathList = [];
        this._usedFilePathList = [];
        this._unusedFilePathList = [];
    };

    // 制御ファイル内容のキャッシュのクリア
    FileDeleter.clearControlFileCache = function () {
        this._controlFileCache = {};
    };

    // 素材ファイルパスリストのセットアップ
    FileDeleter.setupAssetFilePathList = function () {
        var filePathList = [];
        this.walkDirectry(this.imgDirectoryPath(), filePathList);
        this.walkDirectry(this.audioDirectoryPath(), filePathList);
        this._assetFilePathList = filePathList;
    };

    // 制御ファイルパスリストのセットアップ
    FileDeleter.setupControlFilePathList = function () {
        var filePathList = [];
        this.walkDirectry(this.dataDirectoryPath(), filePathList);
        this.walkDirectry(this.jsDirectoryPath(), filePathList);
        this._controlFilePathList = filePathList;
    };

    // 使用素材ファイルパスリストのセットアップ
    FileDeleter.setupUsedFilePathList = function () {
        var filePathList = [];
        for (var i = 0; i < this._assetFilePathList.length; i++) {
            var assetFilePath = this._assetFilePathList[i];
            for (var j = 0; j < this._controlFilePathList.length; j++) {
                var controlFilePath = this._controlFilePathList[j];
                if (this.assetFileIsUsed(controlFilePath, assetFilePath)) {
                    filePathList.push(assetFilePath);
                    break;
                }
            }
        }
        this._usedFilePathList = filePathList;
    };

    // 未使用素材ファイルパスリストのセットアップ
    FileDeleter.setupUnusedFilePathList = function () {
        var filePathList = []
        filePathList = this._assetFilePathList.filter(
            function (assetFilePath) {
                return this._usedFilePathList.indexOf(assetFilePath) === -1
            }, this
        );
        this._unusedFilePathList = filePathList;
    };

    // ディレクトリ内ファイル探索
    FileDeleter.walkDirectry = function (directoryPath, filePathList) {
        var fs = require('fs');
        var fileNames = fs.readdirSync(directoryPath);
        fileNames.forEach(function (fileName) {
            var filePath = directoryPath + '/' + fileName;
            if (fs.statSync(filePath).isDirectory()) {
                this.walkDirectry(filePath, filePathList);
            } else {
                filePathList.push(filePath);
            }
        }, this);
    };

    // 素材ファイル名が制御ファイル内に含まれるか
    FileDeleter.assetFileIsUsed = function (controlFilePath, assetFilePath) {
        var path = require('path');
        var controlFileText = this.controlFileText(controlFilePath);
        var assetFileExt = path.extname(assetFilePath);
        var assetFileName = path.basename(assetFilePath, assetFileExt);
        var regExp = new RegExp(this.escapeRegExp(assetFileName));
        return controlFileText.search(regExp) !== -1;
    };

    // 制御ファイルの内容(テキスト)
    FileDeleter.controlFileText = function (controlFilePath) {
        var controlFileText = "";
        if (!!this._controlFileCache[controlFilePath]) {
            controlFileText = this._controlFileCache[controlFilePath];
        } else {
            var fs = require('fs');
            controlFileText = fs.readFileSync(controlFilePath, 'utf-8');
            this._controlFileCache[controlFilePath] = controlFileText;
        }
        return controlFileText;
    };

    // 正規表現エスケープ文字の置換
    FileDeleter.escapeRegExp = function (string) {
        return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }

    // 未使用素材ファイルの削除
    FileDeleter.deleteUnusedFiles = function () {
        this.setupFilePathLists();
        this.deleteFiles(this._unusedFilePathList);
        this.printFdStats();
        this.clearFilePathLists();
        this.clearControlFileCache();
    };

    // ファイルの削除
    FileDeleter.deleteFiles = function (filePathList) {
        var fs = require('fs');
        filePathList.forEach(function (filePath) {
            fs.unlinkSync(filePath);
        });
    };

    // ファイル削除状況のコンソール表示
    FileDeleter.printFdStats = function () {
        console.log('======== SAN_FileDeleter ========');
        console.log('files asset   : ', this._assetFilePathList.length);
        console.log('files used    : ', this._usedFilePathList.length);
        console.log('files deleted : ', this._unusedFilePathList.length);
    };

    //-----------------------------------------------------------------------------
    // StorageManager
    //
    // ストレージマネージャー

    // 未使用素材ファイルの削除
    StorageManager.deleteFiles = function () {
        if (this.isLocalMode() && Utils.isOptionValid('test')) {
            FileDeleter.deleteUnusedFiles();
        } else {
            throw new Error('SAN_FileDeleter : It is not local test mode');
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Interpreter
    //
    // インタープリター

    // プラグインコマンド
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'SAN_FileDeleter') {
            switch (args[0]) {
                case 'DeleteFiles':
                    StorageManager.deleteFiles();
                    break;
            }
        }
    };

})(Sanshiro);
