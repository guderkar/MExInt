"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BodyType_1 = require("../Enumerations/BodyType");
var MessageBody_1 = require("./MessageBody");
/**
 * Represents the body of a message.
 */
var TextBody = (function (_super) {
    __extends(TextBody, _super);
    function TextBody(text) {
        if (text === void 0) { text = null; }
        arguments.length === 0 ? _super.call(this) : _super.call(this, BodyType_1.BodyType.Text, text);
    }
    return TextBody;
}(MessageBody_1.MessageBody));
exports.TextBody = TextBody;
