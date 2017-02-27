"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var BodyType_1 = require("../Enumerations/BodyType");
var ExtensionMethods_1 = require("../ExtensionMethods");
var ComplexProperty_1 = require("./ComplexProperty");
var MessageBody = (function (_super) {
    __extends(MessageBody, _super);
    function MessageBody(bodyTypeOrText, text) {
        _super.call(this);
        this.bodyType = 0;
        this.text = null;
        var argslength = arguments.length;
        if (argslength === 0) {
            return;
        }
        var bodyType = BodyType_1.BodyType.HTML;
        var strText = text;
        if (argslength === 1 && typeof bodyTypeOrText === "string") {
            strText = bodyTypeOrText;
        }
        if (argslength === 2 && typeof bodyTypeOrText === "number") {
            bodyType = bodyTypeOrText;
        }
        this.bodyType = bodyType;
        this.text = strText;
    }
    Object.defineProperty(MessageBody.prototype, "BodyType", {
        get: function () {
            return this.bodyType;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.bodyType; }, setValue: function (bodytype) { return _this.bodyType = bodytype; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageBody.prototype, "Text", {
        get: function () {
            return this.text;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.text; }, setValue: function (txt) { return _this.text = txt; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    MessageBody.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) {
                continue;
            }
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.BodyType:
                    this.bodyType = BodyType_1.BodyType[jsObject[key]]; //.ReadEnumValue<BodyType>(key);
                    break;
                case XmlElementNames_1.XmlElementNames.Body:
                    this.text = jsObject[key]; //.ReadAsString(key);
                    break;
                default:
                    debugger; //check exact name of body element
                    break;
            }
        }
    };
    MessageBody.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("MessageBody.ts - ReadAttributesFromXml : Not implemented. - should not be called"); };
    MessageBody.prototype.ReadTextValueFromXmlJsObject = function (reader) { throw new Error("MessageBody.ts - ReadTextValueFromXml : Not implemented. - should not be called"); };
    MessageBody.prototype.ToString = function () { return (this.Text == null) ? ExtensionMethods_1.StringHelper.Empty : this.Text; };
    MessageBody.prototype.WriteAttributesToXml = function (writer) { writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.BodyType, BodyType_1.BodyType[this.BodyType]); };
    MessageBody.prototype.WriteElementsToXml = function (writer) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Text)) {
            writer.WriteValue(this.Text, XmlElementNames_1.XmlElementNames.Body);
        }
    };
    return MessageBody;
}(ComplexProperty_1.ComplexProperty));
exports.MessageBody = MessageBody;
