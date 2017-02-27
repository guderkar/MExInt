"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmailAddressKey_1 = require("../Enumerations/EmailAddressKey");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var MailboxType_1 = require("../Enumerations/MailboxType");
var EmailAddress_1 = require("./EmailAddress");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var DictionaryEntryProperty_1 = require("./DictionaryEntryProperty");
var EmailAddressEntry = (function (_super) {
    __extends(EmailAddressEntry, _super);
    function EmailAddressEntry(key, emailAddress) {
        if (key === void 0) { key = EmailAddressKey_1.EmailAddressKey.EmailAddress1; }
        if (emailAddress === void 0) { emailAddress = new EmailAddress_1.EmailAddress(); }
        _super.call(this, key);
        this.emailAddress = null;
        this.emailAddress = emailAddress;
        if (this.emailAddress != null) {
            this.emailAddress.OnChange.push(this.EmailAddressChanged);
        }
    }
    Object.defineProperty(EmailAddressEntry.prototype, "EmailAddress", {
        get: function () {
            return this.emailAddress;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.emailAddress; }, setValue: function (address) { _this.emailAddress = address; } }, value);
            if (this.emailAddress != null) {
                this.emailAddress.OnChange.push(this.EmailAddressChanged);
            }
        },
        enumerable: true,
        configurable: true
    });
    EmailAddressEntry.prototype.EmailAddressChanged = function (complexProperty) { this.Changed(); };
    EmailAddressEntry.prototype.InternalToJson = function (service) { throw new Error("EmailAddressEntry.ts - InternalToJson : Not implemented."); };
    EmailAddressEntry.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("EmailAddressEntry.ts - LoadFromJson : Not implemented."); };
    EmailAddressEntry.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.Key:
                    this.Key = EmailAddressKey_1.EmailAddressKey[jsonProperty[key]];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.Name:
                    this.EmailAddress.Name = jsonProperty[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.RoutingType:
                    this.EmailAddress.RoutingType = jsonProperty[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.MailboxType:
                    this.EmailAddress.MailboxType = MailboxType_1.MailboxTypeParser.FromString(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.EmailAddress:
                    this.EmailAddress.Address = jsonProperty[key];
                    break;
            }
        }
        //ref: ews-javascript-api specific workaround for text node in complexproperty
        if (jsonProperty[XmlElementNames_1.XmlElementNames.Entry]) {
            if (this.emailAddress.Address === null) {
                this.emailAddress.Address = jsonProperty[XmlElementNames_1.XmlElementNames.Entry];
            }
        }
    };
    // ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadAttributesFromXml : Not implemented."); }
    // ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadTextValueFromXml : Not implemented."); }
    EmailAddressEntry.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        if (writer.Service.RequestedServerVersion > ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Name, this.EmailAddress.Name);
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.RoutingType, this.EmailAddress.RoutingType);
            if (this.EmailAddress.MailboxType != MailboxType_1.MailboxType.Unknown) {
                writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.MailboxType, MailboxType_1.MailboxTypeParser.ToString(this.EmailAddress.MailboxType));
            }
        }
    };
    EmailAddressEntry.prototype.WriteElementsToXml = function (writer) { writer.WriteValue(this.EmailAddress.Address, XmlElementNames_1.XmlElementNames.EmailAddress); };
    return EmailAddressEntry;
}(DictionaryEntryProperty_1.DictionaryEntryProperty));
exports.EmailAddressEntry = EmailAddressEntry;
