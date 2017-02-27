"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var AddressEntity_1 = require("./AddressEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of AddressEntity objects.
 */
var AddressEntityCollection = (function (_super) {
    __extends(AddressEntityCollection, _super);
    function AddressEntityCollection(collection) {
        var _this = this;
        if (collection === void 0) { collection = null; }
        _super.call(this);
        if (collection != null) {
            collection.forEach(function (address) { _this.InternalAdd(address); });
        }
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {AddressEntity}     AddressEntity.
     */
    AddressEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new AddressEntity_1.AddressEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {AddressEntity}      AddressEntity.
     */
    AddressEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new AddressEntity_1.AddressEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {AddressEntity}     complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    AddressEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgAddress; };
    return AddressEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.AddressEntityCollection = AddressEntityCollection;
