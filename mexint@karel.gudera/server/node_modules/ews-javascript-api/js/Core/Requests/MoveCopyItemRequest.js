"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ItemIdWrapperList_1 = require("../../Misc/ItemIdWrapperList");
var MoveCopyRequest_1 = require("./MoveCopyRequest");
/** @internal */
var MoveCopyItemRequest = (function (_super) {
    __extends(MoveCopyItemRequest, _super);
    function MoveCopyItemRequest(service, errorHandlingModeServiceErrorHandling) {
        _super.call(this, service, errorHandlingModeServiceErrorHandling);
        this.ReturnNewItemIds = null; //nullable
        this.itemIds = new ItemIdWrapperList_1.ItemIdWrapperList();
    }
    Object.defineProperty(MoveCopyItemRequest.prototype, "ItemIds", {
        get: function () { return this.itemIds; },
        enumerable: true,
        configurable: true
    });
    //AddIdsToJson(jsonObject: any, service: ExchangeService): any { throw new Error("MoveCopyItemRequest.ts - AddIdsToJson : Not implemented."); }
    MoveCopyItemRequest.prototype.GetExpectedResponseMessageCount = function () { return this.ItemIds.Count; };
    MoveCopyItemRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");
    };
    MoveCopyItemRequest.prototype.WriteIdsToXml = function (writer) {
        this.ItemIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds);
        if (this.ReturnNewItemIds) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ReturnNewItemIds, this.ReturnNewItemIds);
        }
    };
    return MoveCopyItemRequest;
}(MoveCopyRequest_1.MoveCopyRequest));
exports.MoveCopyItemRequest = MoveCopyItemRequest;
