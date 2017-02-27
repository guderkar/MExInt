"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MoveCopyFolderResponse_1 = require("../Responses/MoveCopyFolderResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MoveCopyFolderRequest_1 = require("./MoveCopyFolderRequest");
/** @internal */
var CopyFolderRequest = (function (_super) {
    __extends(CopyFolderRequest, _super);
    function CopyFolderRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
    }
    CopyFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new MoveCopyFolderResponse_1.MoveCopyFolderResponse(); };
    CopyFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    CopyFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyFolderResponseMessage; };
    CopyFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyFolderResponse; };
    CopyFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyFolder; };
    return CopyFolderRequest;
}(MoveCopyFolderRequest_1.MoveCopyFolderRequest));
exports.CopyFolderRequest = CopyFolderRequest;
