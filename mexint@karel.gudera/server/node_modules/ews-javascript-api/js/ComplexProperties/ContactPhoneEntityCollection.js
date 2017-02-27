"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ContactPhoneEntity_1 = require("./ContactPhoneEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of ContactPhoneEntity objects.
 */
var ContactPhoneEntityCollection = (function (_super) {
    __extends(ContactPhoneEntityCollection, _super);
    function ContactPhoneEntityCollection(collection) {
        var _this = this;
        if (collection === void 0) { collection = null; }
        _super.call(this);
        if (collection != null) {
            collection.forEach(function (phone) { _this.InternalAdd(phone); });
        }
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {ContactPhoneEntity}    ContactPhoneEntity.
     */
    ContactPhoneEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new ContactPhoneEntity_1.ContactPhoneEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {ContactPhoneEntity}    ContactPhoneEntity.
     */
    ContactPhoneEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new ContactPhoneEntity_1.ContactPhoneEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ContactPhoneEntity}    complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    ContactPhoneEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgPhone; };
    return ContactPhoneEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.ContactPhoneEntityCollection = ContactPhoneEntityCollection;
