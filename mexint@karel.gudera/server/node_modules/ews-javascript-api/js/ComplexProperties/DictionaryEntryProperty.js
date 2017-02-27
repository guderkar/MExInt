"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ComplexProperty_1 = require("./ComplexProperty");
var DictionaryEntryProperty = (function (_super) {
    __extends(DictionaryEntryProperty, _super);
    function DictionaryEntryProperty(key) {
        _super.call(this);
        this.key = null;
        this.key = key;
    }
    Object.defineProperty(DictionaryEntryProperty.prototype, "Key", {
        get: function () {
            return this.key;
        },
        set: function (value) {
            this.key = value;
        },
        enumerable: true,
        configurable: true
    });
    DictionaryEntryProperty.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("DictionaryEntryProperty.ts - ReadAttributesFromXml : Not used."); };
    DictionaryEntryProperty.prototype.WriteAttributesToXml = function (writer) { writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Key, this.Key); };
    DictionaryEntryProperty.prototype.WriteDeleteUpdateToJson = function (service, ewsObject, updates /*System.Collections.Generic.List<T>*/) { throw new Error("DictionaryEntryProperty.ts - WriteDeleteUpdateToJson : Not implemented."); };
    DictionaryEntryProperty.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) { return false; };
    DictionaryEntryProperty.prototype.WriteSetUpdateToJson = function (service, ewsObject, propertyDefinition, updates /*System.Collections.Generic.List<T>*/) { throw new Error("DictionaryEntryProperty.ts - WriteSetUpdateToJson : Not implemented."); };
    DictionaryEntryProperty.prototype.WriteSetUpdateToXml = function (writer, ewsObject, ownerDictionaryXmlElementName) { return false; };
    return DictionaryEntryProperty;
}(ComplexProperty_1.ComplexProperty));
exports.DictionaryEntryProperty = DictionaryEntryProperty;
