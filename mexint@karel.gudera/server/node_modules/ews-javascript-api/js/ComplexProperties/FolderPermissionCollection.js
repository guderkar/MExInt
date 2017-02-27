"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var TypeContainer_1 = require("../TypeContainer");
var FolderPermission_1 = require("./FolderPermission");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var FolderPermissionCollection = (function (_super) {
    __extends(FolderPermissionCollection, _super);
    function FolderPermissionCollection(owner) {
        _super.call(this);
        this.unknownEntries = []; // System.Collections.ObjectModel.Collection<string>;
        this.isCalendarFolder = owner instanceof TypeContainer_1.TypeContainer.CalendarFolder; // owner instanceof CalendarFolder;
    }
    Object.defineProperty(FolderPermissionCollection.prototype, "InnerCollectionXmlElementName", {
        get: function () { return this.isCalendarFolder ? XmlElementNames_1.XmlElementNames.CalendarPermissions : XmlElementNames_1.XmlElementNames.Permissions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermissionCollection.prototype, "CollectionItemXmlElementName", {
        get: function () { return this.isCalendarFolder ? XmlElementNames_1.XmlElementNames.CalendarPermission : XmlElementNames_1.XmlElementNames.Permission; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermissionCollection.prototype, "UnknownEntries", {
        get: function () { return this.unknownEntries; } // System.Collections.ObjectModel.Collection<string>;
        ,
        enumerable: true,
        configurable: true
    });
    FolderPermissionCollection.prototype.Add = function (permission) { this.InternalAdd(permission); };
    FolderPermissionCollection.prototype.AddRange = function (permissions /*System.Collections.Generic.IEnumerable<T>*/) {
        //EwsUtilities.ValidateParam(permissions, "permissions");
        for (var _i = 0, permissions_1 = permissions; _i < permissions_1.length; _i++) {
            var permission = permissions_1[_i];
            this.Add(permission);
        }
    };
    FolderPermissionCollection.prototype.Clear = function () { this.InternalClear(); };
    FolderPermissionCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new FolderPermission_1.FolderPermission(); };
    FolderPermissionCollection.prototype.CreateDefaultComplexProperty = function () { return new FolderPermission_1.FolderPermission(); };
    FolderPermissionCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return this.CollectionItemXmlElementName; };
    FolderPermissionCollection.prototype.InternalToJson = function (service) { throw new Error("FolderPermissionCollection.ts - InternalToJson : Not implemented."); };
    FolderPermissionCollection.prototype.LoadFromJson = function (jsonProperty /*JsonObject*/, service) { throw new Error("FolderPermissionCollection.ts - LoadFromJson : Not implemented."); };
    FolderPermissionCollection.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        var jsonFolderPermissions = jsonProperty[this.InnerCollectionXmlElementName];
        if (jsonFolderPermissions && jsonFolderPermissions[this.CollectionItemXmlElementName])
            jsonFolderPermissions = jsonFolderPermissions[this.CollectionItemXmlElementName];
        if (!Array.isArray(jsonFolderPermissions)) {
            debugger;
            throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject - Invalid xml parsing, jsonproperty must contain collectionxmlelementname and collectionitemelementname underneeth");
        }
        for (var _i = 0, jsonFolderPermissions_1 = jsonFolderPermissions; _i < jsonFolderPermissions_1.length; _i++) {
            var jsonFolderPermission = jsonFolderPermissions_1[_i];
            var permission = new FolderPermission_1.FolderPermission();
            permission.LoadFromXmlJsObject(jsonFolderPermission, service);
            this.InternalAdd(permission);
        }
        if (jsonProperty[XmlElementNames_1.XmlElementNames.UnknownEntries]) {
            var jsonUnknownEntries = jsonProperty[XmlElementNames_1.XmlElementNames.UnknownEntries];
            if (typeof jsonUnknownEntries !== 'object' && !Array.isArray(jsonFolderPermissions)) {
                debugger;
                throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject - Invalid xml returned - check for consistency, UnknownEntries must be array type");
            }
            //debugger;//debug: //check: for unknown entries type, shold be string or array of string
            for (var _a = 0, jsonUnknownEntries_1 = jsonUnknownEntries; _a < jsonUnknownEntries_1.length; _a++) {
                var jsonUnknownEntry = jsonUnknownEntries_1[_a];
                this.unknownEntries.push(jsonUnknownEntry);
            }
        }
    };
    FolderPermissionCollection.prototype.Remove = function (permission) { return this.InternalRemove(permission); };
    FolderPermissionCollection.prototype.RemoveAt = function (index) { this.InternalRemoveAt(index); };
    FolderPermissionCollection.prototype.Validate = function () {
        for (var permissionIndex = 0; permissionIndex < this.Items.length; permissionIndex++) {
            var permission = this.Items[permissionIndex];
            permission.Validate(this.isCalendarFolder, permissionIndex);
        }
    };
    FolderPermissionCollection.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.InnerCollectionXmlElementName);
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var folderPermission = _a[_i];
            folderPermission.WriteToXml(writer, this.GetCollectionItemXmlElementName(folderPermission), undefined, //XmlNamespace - incorrect inheritance error with typesctipt in folderpermission class if removed xmlnamespace parameter
            this.isCalendarFolder);
        }
        writer.WriteEndElement(); // this.InnerCollectionXmlElementName
    };
    return FolderPermissionCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.FolderPermissionCollection = FolderPermissionCollection;
