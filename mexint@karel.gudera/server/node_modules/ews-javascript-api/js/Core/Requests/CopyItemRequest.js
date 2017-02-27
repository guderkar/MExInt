"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../XmlElementNames");
var MoveCopyItemResponse_1 = require("../Responses/MoveCopyItemResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MoveCopyItemRequest_1 = require("./MoveCopyItemRequest");
/** @internal */
var CopyItemRequest = (function (_super) {
    __extends(CopyItemRequest, _super);
    function CopyItemRequest(service, errorHandlingModeServiceErrorHandling) {
        _super.call(this, service, errorHandlingModeServiceErrorHandling);
    }
    CopyItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new MoveCopyItemResponse_1.MoveCopyItemResponse(); };
    CopyItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    CopyItemRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyItemResponseMessage; };
    CopyItemRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyItemResponse; };
    CopyItemRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyItem; };
    return CopyItemRequest;
}(MoveCopyItemRequest_1.MoveCopyItemRequest));
exports.CopyItemRequest = CopyItemRequest;
