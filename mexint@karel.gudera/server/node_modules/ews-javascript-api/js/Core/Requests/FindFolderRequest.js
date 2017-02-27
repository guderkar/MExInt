"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FindFolderResponse_1 = require("../Responses/FindFolderResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var FindRequest_1 = require("./FindRequest");
/** @internal */
var FindFolderRequest = (function (_super) {
    __extends(FindFolderRequest, _super);
    function FindFolderRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
    }
    FindFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new FindFolderResponse_1.FindFolderResponse(this.View.GetPropertySetOrDefault()); };
    FindFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    FindFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindFolderResponseMessage; };
    FindFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindFolderResponse; };
    FindFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindFolder; };
    return FindFolderRequest;
}(FindRequest_1.FindRequest));
exports.FindFolderRequest = FindFolderRequest;
