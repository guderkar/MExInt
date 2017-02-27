"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExtensionMethods_1 = require('../ExtensionMethods');
var XmlElementNames_1 = require("../Core/XmlElementNames");
var MimeContentBase_1 = require("./MimeContentBase");
/**
 * Represents the MIME content of an item.
 */
var MimeContentUTF8 = (function (_super) {
    __extends(MimeContentUTF8, _super);
    function MimeContentUTF8(characterSet) {
        if (characterSet === void 0) { characterSet = null; }
        _super.call(this);
        this.CharacterSet = characterSet;
        this.Content = "utf-8"; //c# - Encoding.UTF8.BodyName, nodejs - utf8 not utf-8
        this.xmlElementName = XmlElementNames_1.XmlElementNames.MimeContentUTF8;
    }
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    MimeContentUTF8.prototype.ToString = function () {
        return this.Content || ExtensionMethods_1.StringHelper.Empty;
        //ref: //info: 
        //todo: implement arraybuffer and encoding using TextDecoder or some other tech
        //            if (this.Content == null)
        //            {
        //                return string.Empty;
        //            }
        //            else
        //            {
        //                try
        //                {
        //                    // Try to convert to original MIME content using specified charset. If this fails, 
        //                    // return the Base64 representation of the content.
        //                    // Note: Encoding.GetString can throw DecoderFallbackException which is a subclass
        //                    // of ArgumentException.
        //                    // it should always be UTF8 encoding for MimeContentUTF8
        //                    return Encoding.UTF8.GetString(this.Content);
        //                }
        //                catch (ArgumentException)
        //                {
        //                    return Convert.ToBase64String(this.Content);
        //                }
        //            }
    };
    MimeContentUTF8.prototype.toString = function () { return this.ToString(); };
    return MimeContentUTF8;
}(MimeContentBase_1.MimeContentBase));
exports.MimeContentUTF8 = MimeContentUTF8;
