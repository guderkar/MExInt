"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
var StandardUser_1 = require("../Enumerations/StandardUser");
var ExtensionMethods_1 = require("../ExtensionMethods");
var UserId = (function (_super) {
    __extends(UserId, _super);
    function UserId(primarySmtpAddressOrStandardUser) {
        _super.call(this);
        if (typeof primarySmtpAddressOrStandardUser !== 'undefined') {
            if (typeof primarySmtpAddressOrStandardUser === 'string') {
                this.primarySmtpAddress = primarySmtpAddressOrStandardUser;
            }
            else {
                this.standardUser = primarySmtpAddressOrStandardUser;
            }
        }
    }
    Object.defineProperty(UserId.prototype, "SID", {
        get: function () { return this.sID; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.sID; }, setValue: function (data) { return _this.sID = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserId.prototype, "PrimarySmtpAddress", {
        get: function () { return this.primarySmtpAddress; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.primarySmtpAddress; }, setValue: function (data) { return _this.primarySmtpAddress = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserId.prototype, "DisplayName", {
        get: function () { return this.displayName; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.displayName; }, setValue: function (data) { return _this.displayName = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserId.prototype, "StandardUser", {
        get: function () { return this.standardUser; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.standardUser; }, setValue: function (data) { return _this.standardUser = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    UserId.prototype.InternalToJson = function (service) { throw new Error("UserId.ts - InternalToJson : Not implemented."); };
    UserId.prototype.IsValid = function () {
        return typeof this.StandardUser === 'number' || !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.PrimarySmtpAddress) || !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.SID);
    };
    UserId.prototype.LoadFromJson = function (jsonProperty /*JsonObject*/, service) { throw new Error("UserId.ts - LoadFromJson : Not implemented."); };
    UserId.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.SID:
                    this.sID = jsonProperty[key];
                    break;
                case XmlElementNames_1.XmlElementNames.PrimarySmtpAddress:
                    this.primarySmtpAddress = jsonProperty[key];
                    break;
                case XmlElementNames_1.XmlElementNames.DisplayName:
                    this.displayName = jsonProperty[key];
                    break;
                case XmlElementNames_1.XmlElementNames.DistinguishedUser:
                    //debugger;//check for enum value consistency
                    this.standardUser = StandardUser_1.StandardUser[jsonProperty[key]];
                    break;
                default:
                    break;
            }
        }
    };
    UserId.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SID, this.SID);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.PrimarySmtpAddress, this.PrimarySmtpAddress);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DisplayName, this.DisplayName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DistinguishedUser, this.StandardUser);
    };
    return UserId;
}(ComplexProperty_1.ComplexProperty));
exports.UserId = UserId;
