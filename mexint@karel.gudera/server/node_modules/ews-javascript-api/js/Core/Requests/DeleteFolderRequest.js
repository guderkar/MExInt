"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FolderIdWrapperList_1 = require("../../Misc/FolderIdWrapperList");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var DeleteRequest_1 = require("./DeleteRequest");
/** @internal */
var DeleteFolderRequest = (function (_super) {
    __extends(DeleteFolderRequest, _super);
    function DeleteFolderRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.folderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
    }
    Object.defineProperty(DeleteFolderRequest.prototype, "FolderIds", {
        get: function () {
            return this.folderIds;
        },
        enumerable: true,
        configurable: true
    });
    DeleteFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ServiceResponse_1.ServiceResponse(); };
    DeleteFolderRequest.prototype.GetExpectedResponseMessageCount = function () { return this.FolderIds.Count; };
    DeleteFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    DeleteFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteFolderResponseMessage; };
    DeleteFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteFolderResponse; };
    DeleteFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteFolder; };
    DeleteFolderRequest.prototype.InternalToJson = function (body) { throw new Error("DeleteFolderRequest.ts - InternalToJson : Not implemented."); };
    DeleteFolderRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    };
    DeleteFolderRequest.prototype.WriteElementsToXml = function (writer) {
        this.FolderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.FolderIds);
    };
    return DeleteFolderRequest;
}(DeleteRequest_1.DeleteRequest));
exports.DeleteFolderRequest = DeleteFolderRequest;
