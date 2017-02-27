"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DictionaryKeyType_1 = require("../Enumerations/DictionaryKeyType");
var PhoneNumberEntry_1 = require("./PhoneNumberEntry");
var DictionaryProperty_1 = require("./DictionaryProperty");
var PhoneNumberDictionary = (function (_super) {
    __extends(PhoneNumberDictionary, _super);
    function PhoneNumberDictionary() {
        _super.call(this, DictionaryKeyType_1.DictionaryKeyType.PhoneNumberKey);
    }
    PhoneNumberDictionary.prototype._getItem = function (key) {
        return this.Entries.get(key).PhoneNumber;
    };
    PhoneNumberDictionary.prototype._setItem = function (key, value) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            var entry = { outValue: null };
            if (this.Entries.tryGetValue(key, entry)) {
                entry.outValue.PhoneNumber = value;
                this.Changed();
            }
            else {
                entry = new PhoneNumberEntry_1.PhoneNumberEntry(key, value);
                this.InternalAdd(entry.outValue);
            }
        }
    };
    PhoneNumberDictionary.prototype.CreateEntryInstance = function () { return new PhoneNumberEntry_1.PhoneNumberEntry(); };
    PhoneNumberDictionary.prototype.GetFieldURI = function () { return "contacts:PhoneNumber"; };
    PhoneNumberDictionary.prototype.TryGetValue = function (key, phoneNumber) {
        var entry = { outValue: null };
        if (this.Entries.tryGetValue(key, entry)) {
            phoneNumber = entry.outValue.PhoneNumber;
            return true;
        }
        else {
            phoneNumber = null;
            return false;
        }
    };
    return PhoneNumberDictionary;
}(DictionaryProperty_1.DictionaryProperty));
exports.PhoneNumberDictionary = PhoneNumberDictionary;
