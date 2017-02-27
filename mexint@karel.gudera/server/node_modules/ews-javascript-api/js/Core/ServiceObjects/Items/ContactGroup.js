"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AttachableAttribute_1 = require("../../../Attributes/AttachableAttribute");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var ServiceObjectPropertyException_1 = require("../../../Exceptions/ServiceObjectPropertyException");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../XmlElementNames");
var Item_1 = require("./Item");
/**
 * Represents a Contact Group. Properties available on contact groups are defined in the ContactGroupSchema class.
 */
var ContactGroup = (function (_super) {
    __extends(ContactGroup, _super);
    function ContactGroup(serviceOrParentAttachment) {
        _super.call(this, serviceOrParentAttachment);
    }
    Object.defineProperty(ContactGroup.prototype, "FileAs", {
        /**
         * Gets the name under which this contact group is filed as.
         *
         * [RequiredServerVersion(ExchangeVersion.Exchange2010)]
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.FileAs);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactGroup.prototype, "DisplayName", {
        /**
         * Gets or sets the display name of the contact group.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.DisplayName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.DisplayName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactGroup.prototype, "Members", {
        /**
         * Gets the members of the contact group.
         *
         * [RequiredServerVersion(ExchangeVersion.Exchange2010)]
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactGroupSchema.Members);
        },
        enumerable: true,
        configurable: true
    });
    ContactGroup.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, ContactGroup);
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    ContactGroup.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    ContactGroup.prototype.GetSchema = function () {
        return Schemas_1.Schemas.ContactGroupSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    ContactGroup.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DistributionList;
    };
    /**
     *  @internal Sets the subject.
     *
     * @param   {string}   subject   The subject.
     */
    ContactGroup.prototype.SetSubject = function (subject) {
        // Set is disabled in client API even though it is implemented in protocol for Item.Subject.
        // Setting Subject out of sync with DisplayName breaks interop with OLK.
        throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.PropertyIsReadOnly, Schemas_1.Schemas.ContactGroupSchema.Subject);
    };
    ContactGroup = __decorate([
        AttachableAttribute_1.AttachableAttribute(false), 
        __metadata('design:paramtypes', [Object])
    ], ContactGroup);
    return ContactGroup;
}(Item_1.Item));
exports.ContactGroup = ContactGroup;
