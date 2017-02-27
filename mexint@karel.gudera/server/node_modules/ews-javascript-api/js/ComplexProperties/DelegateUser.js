"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExtensionMethods_1 = require("../ExtensionMethods");
var DelegatePermissions_1 = require("./DelegatePermissions");
var ServiceValidationException_1 = require('../Exceptions/ServiceValidationException');
var Strings_1 = require("../Strings");
var UserId_1 = require("./UserId");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a delegate user.
 *
 * @sealed
 */
var DelegateUser = (function (_super) {
    __extends(DelegateUser, _super);
    function DelegateUser(primarySmtpAddressOrStandardUser) {
        _super.call(this);
        this.userId = new UserId_1.UserId();
        this.permissions = new DelegatePermissions_1.DelegatePermissions();
        this.receiveCopiesOfMeetingMessages = false;
        this.viewPrivateItems = false;
        // Confusing error message refers to Calendar folder permissions when adding delegate access for a user
        // without including Calendar Folder permissions.
        //
        this.receiveCopiesOfMeetingMessages = false;
        this.viewPrivateItems = false;
        if (typeof primarySmtpAddressOrStandardUser === 'string') {
            this.userId.PrimarySmtpAddress = primarySmtpAddressOrStandardUser;
        }
        else {
            this.userId.StandardUser = primarySmtpAddressOrStandardUser;
        }
    }
    Object.defineProperty(DelegateUser.prototype, "UserId", {
        /**
         * Gets the user Id of the delegate user.
         */
        get: function () {
            return this.userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegateUser.prototype, "Permissions", {
        /**
         * Gets the list of delegate user's permissions.
         */
        get: function () {
            return this.permissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegateUser.prototype, "ReceiveCopiesOfMeetingMessages", {
        /**
         * Gets or sets a value indicating if the delegate user should receive copies of meeting requests.
         */
        get: function () {
            return this.receiveCopiesOfMeetingMessages;
        },
        set: function (value) {
            this.receiveCopiesOfMeetingMessages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegateUser.prototype, "ViewPrivateItems", {
        /**
         * Gets or sets a value indicating if the delegate user should be able to view the principal's private items.
         */
        get: function () {
            return this.viewPrivateItems;
        },
        set: function (value) {
            this.viewPrivateItems = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    DelegateUser.prototype.InternalValidate = function () {
        if (this.UserId == null) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.UserIdForDelegateUserNotSpecified);
        }
        else if (!this.UserId.IsValid()) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.DelegateUserHasInvalidUserId);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    DelegateUser.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.UserId:
                    this.userId = new UserId_1.UserId();
                    this.userId.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.DelegatePermissions:
                    this.permissions.Reset();
                    this.permissions.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ReceiveCopiesOfMeetingMessages:
                    this.receiveCopiesOfMeetingMessages = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.ViewPrivateItems:
                    this.viewPrivateItems = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Validates this instance for AddDelegate.
     */
    DelegateUser.prototype.ValidateAddDelegate = function () {
        this.permissions.ValidateAddDelegate();
    };
    /**
     * @internal Validates this instance for UpdateDelegate.
     */
    DelegateUser.prototype.ValidateUpdateDelegate = function () {
        this.permissions.ValidateUpdateDelegate();
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DelegateUser.prototype.WriteElementsToXml = function (writer) {
        this.UserId.WriteToXml(writer, XmlElementNames_1.XmlElementNames.UserId);
        this.Permissions.WriteToXml(writer, XmlElementNames_1.XmlElementNames.DelegatePermissions);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ReceiveCopiesOfMeetingMessages, this.ReceiveCopiesOfMeetingMessages);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ViewPrivateItems, this.ViewPrivateItems);
    };
    return DelegateUser;
}(ComplexProperty_1.ComplexProperty));
exports.DelegateUser = DelegateUser;
