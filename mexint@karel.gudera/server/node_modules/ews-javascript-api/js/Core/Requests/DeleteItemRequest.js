"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemIdWrapperList_1 = require("../../Misc/ItemIdWrapperList");
var SendCancellationsMode_1 = require("../../Enumerations/SendCancellationsMode");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var DeleteRequest_1 = require("./DeleteRequest");
/** @internal */
var DeleteItemRequest = (function (_super) {
    __extends(DeleteItemRequest, _super);
    function DeleteItemRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.itemIds = new ItemIdWrapperList_1.ItemIdWrapperList();
        this.affectedTaskOccurrences = null;
        this.sendCancellationsMode = null;
        this.SuppressReadReceipts = false;
    }
    Object.defineProperty(DeleteItemRequest.prototype, "ItemIds", {
        get: function () {
            return this.itemIds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeleteItemRequest.prototype, "AffectedTaskOccurrences", {
        get: function () {
            return this.affectedTaskOccurrences;
        },
        set: function (value) {
            this.affectedTaskOccurrences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeleteItemRequest.prototype, "SendCancellationsMode", {
        get: function () {
            return this.sendCancellationsMode;
        },
        set: function (value) {
            this.sendCancellationsMode = value;
        },
        enumerable: true,
        configurable: true
    });
    DeleteItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ServiceResponse_1.ServiceResponse(); };
    DeleteItemRequest.prototype.GetExpectedResponseMessageCount = function () { return this.itemIds.Count; };
    DeleteItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    DeleteItemRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteItemResponseMessage; };
    DeleteItemRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteItemResponse; };
    DeleteItemRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteItem; };
    DeleteItemRequest.prototype.InternalToJson = function (body) { throw new Error("DeleteItemRequest.ts - InternalToJson : Not implemented."); };
    DeleteItemRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");
        if (this.SuppressReadReceipts && this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "SuppressReadReceipts", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
    };
    DeleteItemRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        if (this.AffectedTaskOccurrences !== null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.AffectedTaskOccurrences, this.AffectedTaskOccurrences);
        }
        if (this.SendCancellationsMode !== null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SendMeetingCancellations, SendCancellationsMode_1.SendCancellationsMode[this.SendCancellationsMode]);
        }
        if (this.SuppressReadReceipts) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SuppressReadReceipts, true);
        }
    };
    DeleteItemRequest.prototype.WriteElementsToXml = function (writer) {
        this.itemIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds);
    };
    return DeleteItemRequest;
}(DeleteRequest_1.DeleteRequest));
exports.DeleteItemRequest = DeleteItemRequest;
