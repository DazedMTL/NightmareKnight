//==============================================================================
// ImageSourceDecrypter.js ver.1.01
//==============================================================================

/*:
 * @plugindesc イメージソース復号プラグイン
 * @author 奏ねこま（おとぶきねこま）
 * @url http://makonet.sakura.ne.jp/rpg_tkool
 * @target MZ
 *
 * @help
 * 本プラグインの利用方法については下記マニュアルをご参照ください。
 * http://makonet.sakura.ne.jp/rpg_tkool/MVMZ/ImageSourceDecrypter/document.html
 *
 * ------------------------------------------------------------------------------
 *   本プラグインの利用はRPGツクール/RPG Makerの正規ユーザーに限られます。
 *   商用、非商用、有償、無償、一般向け、成人向けを問わず利用可能です。
 *   ご利用の際に連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *   プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *   本プラグインにより生じたいかなる問題についても一切の責任を負いかねます。
 * ------------------------------------------------------------------------------
 *                                              Copylight (c) 2022 Nekoma Otobuki
 *                                         http://makonet.sakura.ne.jp/rpg_tkool/
 *                                                  https://twitter.com/koma_neko
 */

{
    'use strict';

    function extToEncryptExt(url) {
        if (window.Decrypter) {
            return Decrypter.extToEncryptExt(url);
        }
        return `${url}_`;
    }

    function decryptArrayBuffer(arrayBuffer) {
        if (window.Decrypter) {
            return Decrypter.decryptArrayBuffer(arrayBuffer);
        }
        if (!Utils._encryptionKey) {
            Utils._encryptionKey = $dataSystem.encryptionKey;
        }
        return Utils.decryptArrayBuffer(arrayBuffer);
    }

    //==============================================================================
    // Image
    //==============================================================================

    (__set => {
        Object.defineProperty(Image.prototype, 'src', {
            set: function (value) {
                function decrypt() {
                    if (!$dataSystem) {
                        setTimeout(decrypt.bind(this), 0);
                        return;
                    }
                    if (!$dataSystem.hasEncryptedImages || !value || !value.match(/\.[a-z]{3,5}$/i)) {
                        __set.call(this, value);
                        return;
                    }
                    let url = extToEncryptExt(value);
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', url);
                    xhr.responseType = 'arraybuffer';
                    xhr.onload = () => {
                        if (xhr.status >= 400) {
                            __set.call(this, value);
                            return;
                        }
                        let buffer = decryptArrayBuffer(xhr.response);
                        let blob = new Blob([buffer]);
                        __set.call(this, URL.createObjectURL(blob));
                    };
                    xhr.onerror = () => {
                        __set.call(this, value);
                    };
                    xhr.send();
                }
                decrypt.call(this);
            }
        });
    })(Object.getOwnPropertyDescriptor(Image.prototype, 'src').set);
}
