"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var Strings_1 = require("../Strings");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var UserId_1 = require("./UserId");
var PermissionScope_1 = require("../Enumerations/PermissionScope");
var FolderPermissionReadAccess_1 = require("../Enumerations/FolderPermissionReadAccess");
var FolderPermissionLevel_1 = require("../Enumerations/FolderPermissionLevel");
var LazyMember_1 = require("../Core/LazyMember");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
var FolderPermission = (function (_super) {
    __extends(FolderPermission, _super);
    function FolderPermission(userIdOrStandardUserOrSmtpAddress, permissionLevel) {
        _super.call(this);
        if (typeof userIdOrStandardUserOrSmtpAddress !== 'undefined' && typeof permissionLevel === 'undefined')
            throw new Error("FolderPermission - Constructor: permission level parameter cant be undefined or null when userid/smtpaddress/standarduser is provided in first place.");
        if (typeof userIdOrStandardUserOrSmtpAddress === 'undefined') {
            this.userId = new UserId_1.UserId();
        }
        else {
            this.permissionLevel = permissionLevel;
            if (typeof userIdOrStandardUserOrSmtpAddress === 'string' || typeof userIdOrStandardUserOrSmtpAddress === 'number') {
                this.userId = new UserId_1.UserId(userIdOrStandardUserOrSmtpAddress);
            }
            else {
                this.userId = userIdOrStandardUserOrSmtpAddress;
            }
        }
    }
    Object.defineProperty(FolderPermission.prototype, "UserId", {
        get: function () { return this.userId; },
        set: function (value) {
            var _this = this;
            if (this.userId != null) {
                var index = this.userId.OnChange.indexOf(this.PropertyChanged);
                if (index >= 0)
                    this.userId.OnChange.splice(index, 1);
            }
            this.SetFieldValue({ getValue: function () { return _this.userId; }, setValue: function (id) { return _this.userId = id; } }, value);
            if (this.userId != null) {
                this.userId.OnChange.push(this.PropertyChanged);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "CanCreateItems", {
        get: function () { return this.canCreateItems; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.canCreateItems; }, setValue: function (data) { return _this.canCreateItems = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "CanCreateSubFolders", {
        get: function () { return this.canCreateSubFolders; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.canCreateSubFolders; }, setValue: function (data) { return _this.canCreateSubFolders = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "IsFolderOwner", {
        get: function () { return this.isFolderOwner; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isFolderOwner; }, setValue: function (data) { return _this.isFolderOwner = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "IsFolderVisible", {
        get: function () { return this.isFolderVisible; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isFolderVisible; }, setValue: function (data) { return _this.isFolderVisible = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "IsFolderContact", {
        get: function () { return this.isFolderContact; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isFolderContact; }, setValue: function (data) { return _this.isFolderContact = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "EditItems", {
        get: function () { return this.editItems; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.editItems; }, setValue: function (data) { return _this.editItems = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "DeleteItems", {
        get: function () { return this.deleteItems; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.deleteItems; }, setValue: function (data) { return _this.deleteItems = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "ReadItems", {
        get: function () { return this.readItems; },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.readItems; }, setValue: function (data) { return _this.readItems = data; } }, value);
            this.AdjustPermissionLevel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "PermissionLevel", {
        get: function () { return this.permissionLevel; },
        set: function (value) {
            var _this = this;
            if (this.permissionLevel != value) {
                if (value == FolderPermissionLevel_1.FolderPermissionLevel.Custom) {
                    throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.CannotSetPermissionLevelToCustom);
                }
                this.AssignIndividualPermissions(FolderPermission.defaultPermissions.Member[value]);
                this.SetFieldValue({ getValue: function () { return _this.permissionLevel; }, setValue: function (data) { return _this.permissionLevel = data; } }, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermission.prototype, "DisplayPermissionLevel", {
        get: function () {
            // If permission level is set to Custom, see if there's a variant
            // that Outlook would map to the same permission level.
            if (this.permissionLevel == FolderPermissionLevel_1.FolderPermissionLevel.Custom) {
                for (var _i = 0, _a = FolderPermission.levelVariants.Member; _i < _a.length; _i++) {
                    var variant = _a[_i];
                    if (this.IsEqualTo(variant)) {
                        return variant.PermissionLevel;
                    }
                }
            }
            return this.permissionLevel;
        },
        enumerable: true,
        configurable: true
    });
    FolderPermission.prototype.AdjustPermissionLevel = function () {
        for (var key in FolderPermission.defaultPermissions.Member) {
            var value = FolderPermission.defaultPermissions.Member[key];
            if (this.IsEqualTo(value)) {
                this.permissionLevel = key;
                return;
            }
        }
        this.permissionLevel = FolderPermissionLevel_1.FolderPermissionLevel.Custom;
    };
    FolderPermission.prototype.AssignIndividualPermissions = function (permission) {
        this.canCreateItems = permission.CanCreateItems;
        this.canCreateSubFolders = permission.CanCreateSubFolders;
        this.isFolderContact = permission.IsFolderContact;
        this.isFolderOwner = permission.IsFolderOwner;
        this.isFolderVisible = permission.IsFolderVisible;
        this.editItems = permission.EditItems;
        this.deleteItems = permission.DeleteItems;
        this.readItems = permission.ReadItems;
    };
    FolderPermission.prototype.Clone = function () {
        var res = new FolderPermission();
        res.canCreateItems = this.canCreateItems;
        res.canCreateSubFolders = this.canCreateSubFolders;
        res.deleteItems = this.deleteItems;
        res.editItems = this.editItems;
        res.isFolderContact = this.isFolderContact;
        res.isFolderOwner = this.isFolderOwner;
        res.isFolderVisible = this.isFolderVisible;
        res.permissionLevel = this.permissionLevel;
        res.readItems = this.readItems;
        res.userId = this.userId;
        return res;
    };
    FolderPermission.prototype.InternalToJson = function (service, isCalendarFolder) { throw new Error("FolderPermission.ts - InternalToJson : Not implemented."); };
    FolderPermission.prototype.IsEqualTo = function (permission) {
        return;
        this.CanCreateItems == permission.CanCreateItems &&
            this.CanCreateSubFolders == permission.CanCreateSubFolders &&
            this.IsFolderContact == permission.IsFolderContact &&
            this.IsFolderVisible == permission.IsFolderVisible &&
            this.IsFolderOwner == permission.IsFolderOwner &&
            this.EditItems == permission.EditItems &&
            this.DeleteItems == permission.DeleteItems &&
            this.ReadItems == permission.ReadItems;
    };
    FolderPermission.prototype.LoadFromJson = function (jsonProperty /*JsonObject*/, service) { throw new Error("FolderPermission.ts - LoadFromJson : Not implemented."); };
    FolderPermission.prototype.LoadFromXmlJsObject = function (jsonProperty /*JsonObject*/, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.UserId:
                    this.UserId = new UserId_1.UserId();
                    this.UserId.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.CanCreateItems:
                    this.canCreateItems = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.CanCreateSubFolders:
                    this.canCreateSubFolders = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsFolderOwner:
                    this.isFolderOwner = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsFolderVisible:
                    this.isFolderVisible = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsFolderContact:
                    this.isFolderContact = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.EditItems:
                    //debugger;//check for assignable enumeration type
                    this.editItems = PermissionScope_1.PermissionScope[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.DeleteItems:
                    //debugger;//check for assignable enumeration type
                    this.deleteItems = PermissionScope_1.PermissionScope[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.ReadItems:
                    //debugger;//check for assignable enumeration type
                    this.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.PermissionLevel:
                case XmlElementNames_1.XmlElementNames.CalendarPermissionLevel:
                    //debugger;//check for assignable enumeration type
                    this.permissionLevel = FolderPermissionLevel_1.FolderPermissionLevel[jsonProperty[key]];
                    break;
                default:
                    break;
            }
        }
        this.AdjustPermissionLevel();
    };
    FolderPermission.prototype.PropertyChanged = function (complexProperty) { this.Changed(); };
    FolderPermission.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("FolderPermission.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    //Validate(isCalendarFolder: boolean, permissionIndex: number): void { throw new Error("FolderPermission.ts - Validate : Not implemented."); }
    FolderPermission.prototype.Validate = function (isCalendarFolder, permissionIndex) {
        if (typeof isCalendarFolder === 'undefined' || typeof permissionIndex === 'undefined')
            throw new Error("FolderPermission - Validate: incorrect call to validate, without the isCalendar or permissionIndex pearameter. this signature makes it optional to comply with typescript inheritance system and to avoid compiletime error.");
        // Check UserId
        if (!this.UserId.IsValid()) {
            throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.FolderPermissionHasInvalidUserId, permissionIndex));
        }
        // If this permission is to be used for a non-calendar folder make sure that read access and permission level aren't set to Calendar-only values
        if (!isCalendarFolder) {
            if ((this.readItems == FolderPermissionReadAccess_1.FolderPermissionReadAccess.TimeAndSubjectAndLocation) ||
                (this.readItems == FolderPermissionReadAccess_1.FolderPermissionReadAccess.TimeOnly)) {
                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ReadAccessInvalidForNonCalendarFolder, this.readItems));
            }
            if ((this.permissionLevel == FolderPermissionLevel_1.FolderPermissionLevel.FreeBusyTimeAndSubjectAndLocation) ||
                (this.permissionLevel == FolderPermissionLevel_1.FolderPermissionLevel.FreeBusyTimeOnly)) {
                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PermissionLevelInvalidForNonCalendarFolder, this.permissionLevel));
            }
        }
    };
    FolderPermission.prototype.WriteElementsToXml = function (writer, isCalendarFolder) {
        if (isCalendarFolder === void 0) { isCalendarFolder = false; }
        if (this.UserId != null) {
            this.UserId.WriteToXml(writer, XmlElementNames_1.XmlElementNames.UserId);
        }
        if (this.PermissionLevel == FolderPermissionLevel_1.FolderPermissionLevel.Custom) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.CanCreateItems, this.CanCreateItems);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.CanCreateSubFolders, this.CanCreateSubFolders);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsFolderOwner, this.IsFolderOwner);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsFolderVisible, this.IsFolderVisible);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsFolderContact, this.IsFolderContact);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EditItems, this.EditItems);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DeleteItems, this.DeleteItems);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ReadItems, this.ReadItems);
        }
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, isCalendarFolder ? XmlElementNames_1.XmlElementNames.CalendarPermissionLevel : XmlElementNames_1.XmlElementNames.PermissionLevel, this.PermissionLevel);
    };
    FolderPermission.prototype.WriteToXml = function (writer, xmlElementName, xmlNamespace, isCalendarFolder) {
        if (isCalendarFolder === void 0) { isCalendarFolder = false; }
        writer.WriteStartElement(this.Namespace, xmlElementName);
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer, isCalendarFolder);
        writer.WriteEndElement();
    };
    FolderPermission.defaultPermissions = new LazyMember_1.LazyMember(function () {
        var result = {}; // new Dictionary<FolderPermissionLevel, FolderPermission>();
        var permission = new FolderPermission();
        permission.canCreateItems = false;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.None;
        permission.editItems = PermissionScope_1.PermissionScope.None;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = false;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.None;
        result[FolderPermissionLevel_1.FolderPermissionLevel.None] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = true;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.None;
        permission.editItems = PermissionScope_1.PermissionScope.None;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.None;
        result[FolderPermissionLevel_1.FolderPermissionLevel.Contributor] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = false;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.None;
        permission.editItems = PermissionScope_1.PermissionScope.None;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.FullDetails;
        result[FolderPermissionLevel_1.FolderPermissionLevel.Reviewer] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = true;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.Owned;
        permission.editItems = PermissionScope_1.PermissionScope.None;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.FullDetails;
        result[FolderPermissionLevel_1.FolderPermissionLevel.NoneditingAuthor] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = true;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.Owned;
        permission.editItems = PermissionScope_1.PermissionScope.Owned;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.FullDetails;
        result[FolderPermissionLevel_1.FolderPermissionLevel.Author] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = true;
        permission.canCreateSubFolders = true;
        permission.deleteItems = PermissionScope_1.PermissionScope.Owned;
        permission.editItems = PermissionScope_1.PermissionScope.Owned;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.FullDetails;
        result[FolderPermissionLevel_1.FolderPermissionLevel.PublishingAuthor] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = true;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.All;
        permission.editItems = PermissionScope_1.PermissionScope.All;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.FullDetails;
        result[FolderPermissionLevel_1.FolderPermissionLevel.Editor] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = true;
        permission.canCreateSubFolders = true;
        permission.deleteItems = PermissionScope_1.PermissionScope.All;
        permission.editItems = PermissionScope_1.PermissionScope.All;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.FullDetails;
        result[FolderPermissionLevel_1.FolderPermissionLevel.PublishingEditor] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = true;
        permission.canCreateSubFolders = true;
        permission.deleteItems = PermissionScope_1.PermissionScope.All;
        permission.editItems = PermissionScope_1.PermissionScope.All;
        permission.isFolderContact = true;
        permission.isFolderOwner = true;
        permission.isFolderVisible = true;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.FullDetails;
        result[FolderPermissionLevel_1.FolderPermissionLevel.Owner] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = false;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.None;
        permission.editItems = PermissionScope_1.PermissionScope.None;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = false;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.TimeOnly;
        result[FolderPermissionLevel_1.FolderPermissionLevel.FreeBusyTimeOnly] = permission;
        permission = new FolderPermission();
        permission.canCreateItems = false;
        permission.canCreateSubFolders = false;
        permission.deleteItems = PermissionScope_1.PermissionScope.None;
        permission.editItems = PermissionScope_1.PermissionScope.None;
        permission.isFolderContact = false;
        permission.isFolderOwner = false;
        permission.isFolderVisible = false;
        permission.readItems = FolderPermissionReadAccess_1.FolderPermissionReadAccess.TimeAndSubjectAndLocation;
        result[FolderPermissionLevel_1.FolderPermissionLevel.FreeBusyTimeAndSubjectAndLocation] = permission;
        return result;
    });
    FolderPermission.levelVariants = new LazyMember_1.LazyMember(function () {
        var results = []; // new List<FolderPermission>();
        var permissionNone = FolderPermission.defaultPermissions.Member[FolderPermissionLevel_1.FolderPermissionLevel.None];
        var permissionOwner = FolderPermission.defaultPermissions.Member[FolderPermissionLevel_1.FolderPermissionLevel.Owner];
        // PermissionLevelNoneOption1
        var permission = permissionNone.Clone();
        permission.isFolderVisible = true;
        results.push(permission);
        // PermissionLevelNoneOption2
        permission = permissionNone.Clone();
        permission.isFolderContact = true;
        results.push(permission);
        // PermissionLevelNoneOption3
        permission = permissionNone.Clone();
        permission.isFolderContact = true;
        permission.isFolderVisible = true;
        results.push(permission);
        // PermissionLevelOwnerOption1
        permission = permissionOwner.Clone();
        permission.isFolderContact = false;
        results.push(permission);
        return results;
    });
    return FolderPermission;
}(ComplexProperty_1.ComplexProperty));
exports.FolderPermission = FolderPermission;
