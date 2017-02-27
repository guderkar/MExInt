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
var MimeContent = (function (_super) {
    __extends(MimeContent, _super);
    function MimeContent(characterSet, content) {
        if (characterSet === void 0) { characterSet = null; }
        if (content === void 0) { content = null; }
        _super.call(this);
        this.CharacterSet = characterSet;
        this.Content = content;
        this.xmlElementName = XmlElementNames_1.XmlElementNames.MimeContent;
    }
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    MimeContent.prototype.ToString = function () {
        return this.Content || ExtensionMethods_1.StringHelper.Empty;
        //ref: //info: 
        //todo: implement arraybuffer and encoding using TextDecoder or some other tech
        // if (this.Content == null) {
        //     return StringHelper.Empty;
        // }
        // else {
        //     try {
        //         // Try to convert to original MIME content using specified charset. If this fails, 
        //         // return the Base64 representation of the content.
        //         // Note: Encoding.GetString can throw DecoderFallbackException which is a subclass
        //         // of ArgumentException.
        //         string charSet = string.IsNullOrEmpty(this.CharacterSet)
        //             ? Encoding.UTF8.EncodingName
        //             : this.CharacterSet;
        //         Encoding encoding = Encoding.GetEncoding(charSet);
        //         return encoding.GetString(this.Content);
        //     }
        //     catch (ArgumentException) {
        //         return Convert.ToBase64String(this.Content);
        //     }
        // }
    };
    MimeContent.prototype.toString = function () { return this.ToString(); };
    return MimeContent;
}(MimeContentBase_1.MimeContentBase));
exports.MimeContent = MimeContent;
