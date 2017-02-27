"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ExtensionMethods_1 = require("../ExtensionMethods");
var ComplexProperty_1 = require("./ComplexProperty");
var ServiceId = (function (_super) {
    __extends(ServiceId, _super);
    function ServiceId(uniqueId) {
        _super.call(this);
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(uniqueId)) {
            EwsUtilities_1.EwsUtilities.ValidateParam(uniqueId, "uniqueId");
            this.UniqueId = uniqueId;
        }
    }
    Object.defineProperty(ServiceId.prototype, "IsValid", {
        get: function () { return this.IsValidProxy(); },
        enumerable: true,
        configurable: true
    });
    ServiceId.prototype.IsValidProxy = function () { return !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.UniqueId); }; //proxy to be able to call super. from inherited child
    ServiceId.prototype.Assign = function (source) {
        this.UniqueId = source.UniqueId;
        this.ChangeKey = source.ChangeKey;
    };
    ServiceId.prototype.Equals = function (obj) {
        if (this === obj) {
            return true;
        }
        else {
            var other = obj;
            if (!(other instanceof ServiceId)) {
                return false;
            }
            else if (!(this.IsValid && other.IsValid)) {
                return false;
            }
            else {
                return this.UniqueId === other.UniqueId; //.Equals(other.UniqueId);
            }
        }
    };
    //GetHashCode(): number { return this.IsValid ? this.UniqueId.GetHashCode() : super.GetHashCode();}
    //GetJsonTypeName(): string { throw new Error("ServiceId.ts - GetJsonTypeName : Not implemented."); }
    ServiceId.prototype.GetXmlElementName = function () { throw new Error("abstract method must implement."); };
    //InternalToJson(service: ExchangeService): any { throw new Error("ServiceId.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ServiceId.ts - LoadFromJson : Not implemented."); }
    ServiceId.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.Id:
                    this.UniqueId = jsObject[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.ChangeKey:
                    this.ChangeKey = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    ServiceId.prototype.ReadAttributesFromXmlJsObject = function (reader) {
        this.UniqueId = reader.ReadAttributeValue(null, XmlAttributeNames_1.XmlAttributeNames.Id);
        this.ChangeKey = reader.ReadAttributeValue(null, XmlAttributeNames_1.XmlAttributeNames.ChangeKey);
    };
    ServiceId.prototype.SameIdAndChangeKey = function (other) {
        if (this.Equals(other)) {
            return ((this.ChangeKey == null) && (other.ChangeKey == null)) ||
                this.ChangeKey === other.ChangeKey;
        }
        else {
            return false;
        }
    };
    ServiceId.prototype.ToString = function () { return (this.UniqueId == null) ? "" : this.UniqueId; };
    ServiceId.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.UniqueId);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ChangeKey, this.ChangeKey);
    };
    ServiceId.prototype.WriteToXml = function (writer, xmlElementName, xmlNamespace) {
        if (arguments.length > 2) {
            _super.prototype.WriteToXml.call(this, writer, xmlElementName, xmlNamespace);
        }
        else if (arguments.length > 1) {
            _super.prototype.WriteToXml.call(this, writer, xmlElementName);
        }
        else {
            _super.prototype.WriteToXml.call(this, writer, this.GetXmlElementName());
        }
    };
    return ServiceId;
}(ComplexProperty_1.ComplexProperty));
exports.ServiceId = ServiceId;
