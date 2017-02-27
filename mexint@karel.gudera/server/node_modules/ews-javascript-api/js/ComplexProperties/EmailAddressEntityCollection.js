"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var EmailAddressEntity_1 = require("./EmailAddressEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of EmailAddressEntity objects.
 */
var EmailAddressEntityCollection = (function (_super) {
    __extends(EmailAddressEntityCollection, _super);
    function EmailAddressEntityCollection(collection) {
        var _this = this;
        if (collection === void 0) { collection = null; }
        _super.call(this);
        if (collection != null) {
            collection.forEach(function (entity) { _this.InternalAdd(entity); });
        }
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {EmailAddressEntity}    EmailAddressEntity.
     */
    EmailAddressEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new EmailAddressEntity_1.EmailAddressEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {EmailAddressEntity}      EmailAddressEntity.
     */
    EmailAddressEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new EmailAddressEntity_1.EmailAddressEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {EmailAddressEntity}    complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    EmailAddressEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgEmailAddress; };
    return EmailAddressEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.EmailAddressEntityCollection = EmailAddressEntityCollection;
