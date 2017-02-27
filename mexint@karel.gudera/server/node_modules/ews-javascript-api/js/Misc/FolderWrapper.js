"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsLogging_1 = require("../Core/EwsLogging");
var AbstractFolderIdWrapper_1 = require("./AbstractFolderIdWrapper");
var FolderWrapper = (function (_super) {
    __extends(FolderWrapper, _super);
    function FolderWrapper(folder) {
        _super.call(this);
        EwsLogging_1.EwsLogging.Assert(folder != null, "FolderWrapper.ctor", "folder is null");
        EwsLogging_1.EwsLogging.Assert(!folder.IsNew, "FolderWrapper.ctor", "folder does not have an Id");
        this.folder = folder;
    }
    FolderWrapper.prototype.GetFolder = function () { return this.folder; };
    //InternalToJson(service: ExchangeService): void{ throw new Error("FolderWrapper.ts - InternalToJson : Not implemented.");}
    FolderWrapper.prototype.WriteToXml = function (writer) { this.folder.Id.WriteToXml(writer); };
    return FolderWrapper;
}(AbstractFolderIdWrapper_1.AbstractFolderIdWrapper));
exports.FolderWrapper = FolderWrapper;
