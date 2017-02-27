"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsLogging_1 = require("../Core/EwsLogging");
var AbstractFolderIdWrapper_1 = require("./AbstractFolderIdWrapper");
var FolderIdWrapper = (function (_super) {
    __extends(FolderIdWrapper, _super);
    function FolderIdWrapper(folderId) {
        _super.call(this);
        EwsLogging_1.EwsLogging.Assert(folderId != null, "FolderIdWrapper.ctor", "folderId is null");
        this.folderId = folderId;
    }
    //InternalToJson(service: ExchangeService): any{ throw new Error("FolderIdWrapper.ts - InternalToJson : Not implemented.");}
    FolderIdWrapper.prototype.Validate = function (version) { this.folderId.Validate(version); };
    FolderIdWrapper.prototype.WriteToXml = function (writer) { this.folderId.WriteToXml(writer); };
    return FolderIdWrapper;
}(AbstractFolderIdWrapper_1.AbstractFolderIdWrapper));
exports.FolderIdWrapper = FolderIdWrapper;
