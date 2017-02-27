"use strict";
var FolderIdWrapper_1 = require("./FolderIdWrapper");
var FolderWrapper_1 = require("./FolderWrapper");
var Folder_1 = require("../Core/ServiceObjects/Folders/Folder");
var FolderId_1 = require("../ComplexProperties/FolderId");
//import {FolderWrapper} from "./FolderWrapper";
var FolderIdWrapperList = (function () {
    function FolderIdWrapperList() {
        //Item: AbstractFolderIdWrapper;
        this.ids = []; // System.Collections.Generic.List<AbstractFolderIdWrapper>;
    }
    Object.defineProperty(FolderIdWrapperList.prototype, "Count", {
        get: function () { return this.ids.length; },
        enumerable: true,
        configurable: true
    });
    FolderIdWrapperList.prototype.Add = function (folderOrId) {
        if (folderOrId instanceof Folder_1.Folder)
            this.ids.push(new FolderWrapper_1.FolderWrapper(folderOrId));
        else if (folderOrId instanceof FolderId_1.FolderId)
            this.ids.push(new FolderIdWrapper_1.FolderIdWrapper(folderOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    };
    FolderIdWrapperList.prototype.AddRange = function (foldersOrIds) {
        if (foldersOrIds != null) {
            for (var _i = 0, foldersOrIds_1 = foldersOrIds; _i < foldersOrIds_1.length; _i++) {
                var folderOrId = foldersOrIds_1[_i];
                this.Add(folderOrId);
            }
        }
    };
    //GetEnumerator(): any { throw new Error("FolderIdWrapperList.ts - GetEnumerator : Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("FolderIdWrapperList.ts - InternalToJson : Not implemented."); }
    FolderIdWrapperList.prototype.Validate = function (version) {
        for (var _i = 0, _a = this.ids; _i < _a.length; _i++) {
            var folderIdWrapper = _a[_i];
            //var folderIdWrapper: AbstractFolderIdWrapper = item;
            folderIdWrapper.Validate(version);
        }
    };
    FolderIdWrapperList.prototype.WriteToXml = function (writer, ewsNamesapce, xmlElementName) {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);
            for (var _i = 0, _a = this.ids; _i < _a.length; _i++) {
                var folderIdWrapper = _a[_i];
                //var folderIdWrapper: AbstractFolderIdWrapper = item;
                folderIdWrapper.WriteToXml(writer);
            }
            writer.WriteEndElement();
        }
    };
    FolderIdWrapperList.prototype.__thisIndexer = function (index) {
        return this.ids[index];
    };
    return FolderIdWrapperList;
}());
exports.FolderIdWrapperList = FolderIdWrapperList;
