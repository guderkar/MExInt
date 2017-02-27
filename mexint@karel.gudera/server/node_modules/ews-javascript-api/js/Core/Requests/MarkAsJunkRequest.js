"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemIdWrapperList_1 = require("../../Misc/ItemIdWrapperList");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MarkAsJunkResponse_1 = require("../Responses/MarkAsJunkResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var MarkAsJunkRequest = (function (_super) {
    __extends(MarkAsJunkRequest, _super);
    function MarkAsJunkRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.itemIds = new ItemIdWrapperList_1.ItemIdWrapperList();
        this.IsJunk = false;
        this.MoveItem = false;
    }
    Object.defineProperty(MarkAsJunkRequest.prototype, "ItemIds", {
        get: function () {
            return this.itemIds;
        },
        enumerable: true,
        configurable: true
    });
    MarkAsJunkRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new MarkAsJunkResponse_1.MarkAsJunkResponse(); };
    MarkAsJunkRequest.prototype.GetExpectedResponseMessageCount = function () { return this.itemIds.Count; };
    MarkAsJunkRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2013; };
    MarkAsJunkRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAsJunkResponseMessage; };
    MarkAsJunkRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAsJunkResponse; };
    MarkAsJunkRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAsJunk; };
    MarkAsJunkRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");
    };
    MarkAsJunkRequest.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.IsJunk, this.IsJunk);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.MoveItem, this.MoveItem);
    };
    MarkAsJunkRequest.prototype.WriteElementsToXml = function (writer) { this.itemIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds); };
    return MarkAsJunkRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.MarkAsJunkRequest = MarkAsJunkRequest;
