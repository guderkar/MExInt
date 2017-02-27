"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var Strings_1 = require("../Strings");
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ExtensionMethods_1 = require("../ExtensionMethods");
var ComplexProperty_1 = require("./ComplexProperty");
var StringList = (function (_super) {
    __extends(StringList, _super);
    function StringList(stringOrItemXmlElementName) {
        _super.call(this);
        this.___implementsInterface = ["IEnumerable<string>", "IJsonCollectionDeserialize"];
        this.items = []; // /*System.Collections.Generic.List<string>*/;
        this.itemXmlElementName = XmlElementNames_1.XmlElementNames.String;
        if (typeof stringOrItemXmlElementName !== 'undefined') {
            if (typeof stringOrItemXmlElementName === 'string') {
                this.itemXmlElementName = stringOrItemXmlElementName;
            }
            else {
                this.AddRange(stringOrItemXmlElementName);
            }
        }
    }
    Object.defineProperty(StringList.prototype, "Count", {
        get: function () { return this.items.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringList.prototype, "Items", {
        get: function () { return this.items; },
        enumerable: true,
        configurable: true
    });
    StringList.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index - " + Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    };
    StringList.prototype._setItem = function (index, value) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index - " + Strings_1.Strings.IndexIsOutOfRange);
        }
        if (this.items[index] !== value) {
            this.items[index] = value;
            this.Changed();
        }
    };
    StringList.prototype.Add = function (s) {
        this.items.push(s);
        this.Changed();
    };
    StringList.prototype.AddRange = function (strings) {
        var changed = false;
        for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
            var s = strings_1[_i];
            if (!this.Contains(s)) {
                this.items.push(s);
                changed = true;
            }
        }
        if (changed) {
            this.Changed();
        }
    };
    StringList.prototype.Clear = function () {
        this.items.splice(0);
        this.Changed();
    };
    StringList.prototype.Contains = function (s) { return this.items.indexOf(s) >= 0; };
    StringList.prototype.Equals = function (obj) { throw new Error("StringList.ts - Equals : Not implemented."); };
    StringList.prototype.GetEnumerator = function () { throw new Error("StringList.ts - GetEnumerator : Not implemented."); };
    StringList.prototype.GetHashCode = function () { throw new Error("StringList.ts - GetHashCode : Not implemented."); };
    StringList.prototype.InternalToJson = function (service) { throw new Error("StringList.ts - InternalToJson : Not implemented."); };
    StringList.prototype.Remove = function (s) {
        var index = this.items.indexOf(s);
        if (index >= 0) {
            this.RemoveAt(index);
            this.Changed();
            return true;
        }
        return false;
    };
    StringList.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index - " + Strings_1.Strings.IndexIsOutOfRange);
        }
        this.items.splice(index, 1);
        this.Changed();
    };
    StringList.prototype.ToString = function () { return this.items.join(","); };
    //ReadElementsFromXmlJsObject(reader: any): boolean { debugger; throw new Error("StringList.ts - TryReadElementFromXmlJsObject : Not implemented."); return null; }
    StringList.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.itemXmlElementName);
            writer.WriteValue(item, this.itemXmlElementName);
            writer.WriteEndElement();
        }
    };
    StringList.prototype.CreateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        var collection = jsObjectCollection[this.itemXmlElementName];
        if (!ExtensionMethods_1.ArrayHelper.isArray(collection)) {
            collection = [collection];
        }
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var item = collection_1[_i];
            this.Add(item);
        }
    };
    StringList.prototype.LoadFromXmlJsObject = function (jsObjectCollection, service) {
        this.CreateFromXmlJsObjectCollection(jsObjectCollection, service);
    };
    StringList.prototype.UpdateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        throw new Error("StringList.ts - UpdateFromXmlJsObjectCollection : Not implemented.");
    };
    return StringList;
}(ComplexProperty_1.ComplexProperty));
exports.StringList = StringList;
