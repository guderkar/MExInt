"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var DictionaryKeyType_1 = require("../Enumerations/DictionaryKeyType");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ExtensionMethods_1 = require("../ExtensionMethods");
var AltDictionary_1 = require("../AltDictionary");
var ComplexProperty_1 = require("./ComplexProperty");
var DictionaryProperty = (function (_super) {
    __extends(DictionaryProperty, _super);
    function DictionaryProperty(dictionaryKeyType) {
        var _this = this;
        _super.call(this);
        this.dictionaryKeyType = DictionaryKeyType_1.DictionaryKeyType.EmailAddressKey;
        this.dictionaryKeyDelegate = function (key) { return _this.dictionaryKeyTypeEnum[key]; };
        this.entries = new AltDictionary_1.Dictionary(this.dictionaryKeyDelegate);
        this.removedEntries = new AltDictionary_1.Dictionary(this.dictionaryKeyDelegate);
        this.addedEntries = [];
        this.modifiedEntries = [];
        this.dictionaryKeyType = dictionaryKeyType;
        this.dictionaryKeyTypeEnum = EwsUtilities_1.EwsUtilities.GetDictionaryKeyTypeEnum(this.dictionaryKeyType);
    }
    Object.defineProperty(DictionaryProperty.prototype, "Entries", {
        get: function () {
            return this.entries;
        },
        enumerable: true,
        configurable: true
    });
    DictionaryProperty.prototype.ClearChangeLog = function () {
        this.addedEntries.splice(0);
        this.removedEntries.clear();
        this.modifiedEntries.splice(0);
        for (var _i = 0, _a = this.entries.Values; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.ClearChangeLog();
        }
    };
    DictionaryProperty.prototype.Contains = function (key) { return this.Entries.containsKey(key); };
    DictionaryProperty.prototype.CreateEntry = function () {
        return this.CreateEntryInstance();
    };
    DictionaryProperty.prototype.CreateEntryInstance = function () { return null; /*abstract*/ };
    DictionaryProperty.prototype.EntryChanged = function (complexProperty) {
        var key = complexProperty.Key;
        if (this.addedEntries.indexOf(key) === -1 && this.modifiedEntries.indexOf(key) === -1) {
            this.modifiedEntries.push(key);
            this.Changed();
        }
    };
    DictionaryProperty.prototype.GetEntryXmlElementName = function (entry) { return XmlElementNames_1.XmlElementNames.Entry; };
    DictionaryProperty.prototype.GetFieldIndex = function (key) { return this.dictionaryKeyTypeEnum[key]; };
    DictionaryProperty.prototype.GetFieldURI = function () { return null; };
    DictionaryProperty.prototype.InternalAdd = function (entry) {
        entry.OnChange.push(this.EntryChanged);
        this.entries.Add(entry.Key, entry);
        this.addedEntries.push(entry.Key);
        this.removedEntries.remove(entry.Key);
        this.Changed();
    };
    DictionaryProperty.prototype.InternalAddOrReplace = function (entry) {
        var oldEntry = { outValue: null };
        if (this.entries.tryGetValue(entry.Key, oldEntry)) {
            ExtensionMethods_1.ArrayHelper.RemoveEntry(oldEntry.outValue.OnChange, this.EntryChanged);
            entry.OnChange.push(this.EntryChanged);
            if (this.addedEntries.indexOf(entry.Key) === -1) {
                if (this.modifiedEntries.indexOf(entry.Key) === -1) {
                    this.modifiedEntries.push(entry.Key);
                }
            }
            this.Changed();
        }
        else {
            this.InternalAdd(entry);
        }
    };
    DictionaryProperty.prototype.InternalRemove = function (key) {
        var entry = { outValue: null };
        if (this.entries.tryGetValue(key, entry)) {
            ExtensionMethods_1.ArrayHelper.RemoveEntry(entry.outValue.OnChange, this.EntryChanged);
            this.entries.remove(key);
            this.removedEntries.Add(key, entry.outValue);
            this.Changed();
        }
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this.addedEntries, key);
        ExtensionMethods_1.ArrayHelper.RemoveEntry(this.modifiedEntries, key);
    };
    DictionaryProperty.prototype.InternalToJson = function (service) { throw new Error("DictionaryProperty.ts - InternalToJson : Not implemented."); };
    DictionaryProperty.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        if (jsonProperty[XmlElementNames_1.XmlElementNames.Entry]) {
            var entries = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonProperty, XmlElementNames_1.XmlElementNames.Entry);
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var jsonEntry = entries_1[_i];
                var entry = this.CreateEntryInstance();
                entry.LoadFromXmlJsObject(jsonEntry, service);
                this.InternalAdd(entry);
            }
        }
    };
    DictionaryProperty.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.entries.Items; _i < _a.length; _i++) {
            var keyValuePair = _a[_i];
            keyValuePair.value.WriteToXml(writer, this.GetEntryXmlElementName(keyValuePair.value));
        }
    };
    DictionaryProperty.prototype.WriteToXml = function (writer, xmlElementName, xmlNamespace) {
        // Only write collection if it has at least one element.
        if (this.entries.Count > 0) {
            _super.prototype.WriteToXml.call(this, writer, xmlElementName, xmlNamespace);
        }
    };
    DictionaryProperty.prototype.WriteUriToJson = function (key) { throw new Error("DictionaryProperty.ts - WriteUriToJson : Not implemented."); };
    DictionaryProperty.prototype.WriteUriToXml = function (writer, key) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IndexedFieldURI);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldURI, this.GetFieldURI());
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldIndex, this.GetFieldIndex(key));
        writer.WriteEndElement();
    };
    return DictionaryProperty;
}(ComplexProperty_1.ComplexProperty));
exports.DictionaryProperty = DictionaryProperty;
