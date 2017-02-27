"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FolderIdWrapperList_1 = require("../../Misc/FolderIdWrapperList");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MoveCopyRequest_1 = require("./MoveCopyRequest");
/** @internal */
var MoveCopyFolderRequest = (function (_super) {
    __extends(MoveCopyFolderRequest, _super);
    function MoveCopyFolderRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.folderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
    }
    Object.defineProperty(MoveCopyFolderRequest.prototype, "FolderIds", {
        get: function () { return this.folderIds; },
        enumerable: true,
        configurable: true
    });
    MoveCopyFolderRequest.prototype.AddIdsToJson = function (jsonObject, service) { throw new Error("MoveCopyFolderRequest.ts - AddIdsToJson : Not implemented."); };
    MoveCopyFolderRequest.prototype.GetExpectedResponseMessageCount = function () { return this.FolderIds.Count; };
    MoveCopyFolderRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParamCollection(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    };
    MoveCopyFolderRequest.prototype.WriteIdsToXml = function (writer) {
        this.folderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.FolderIds);
    };
    return MoveCopyFolderRequest;
}(MoveCopyRequest_1.MoveCopyRequest));
exports.MoveCopyFolderRequest = MoveCopyFolderRequest;
