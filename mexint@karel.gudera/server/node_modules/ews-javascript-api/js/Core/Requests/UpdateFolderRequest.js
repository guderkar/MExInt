"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
var UpdateFolderResponse_1 = require("../Responses/UpdateFolderResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
/** @internal */
var UpdateFolderRequest = (function (_super) {
    __extends(UpdateFolderRequest, _super);
    function UpdateFolderRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.folders = [];
    }
    Object.defineProperty(UpdateFolderRequest.prototype, "Folders", {
        get: function () {
            return this.folders;
        },
        enumerable: true,
        configurable: true
    });
    UpdateFolderRequest.prototype.CreateServiceResponse = function (session, responseIndex) { return new UpdateFolderResponse_1.UpdateFolderResponse(this.Folders[responseIndex]); };
    UpdateFolderRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("UpdateFolderRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    UpdateFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    UpdateFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UpdateFolderResponseMessage; };
    UpdateFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UpdateFolderResponse; };
    UpdateFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UpdateFolder; };
    UpdateFolderRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParamCollection(this.Folders, "Folders");
        for (var _i = 0, _a = this.folders; _i < _a.length; _i++) {
            var folder = _a[_i];
            if ((folder == null) || folder.IsNew) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.FolderToUpdateCannotBeNullOrNew, this.folders.indexOf(folder)));
            }
            folder.Validate();
        }
    };
    UpdateFolderRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.FolderChanges);
        for (var _i = 0, _a = this.folders; _i < _a.length; _i++) {
            var folder = _a[_i];
            folder.WriteToXmlForUpdate(writer);
        }
        writer.WriteEndElement();
    };
    return UpdateFolderRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.UpdateFolderRequest = UpdateFolderRequest;
