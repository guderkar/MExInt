"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var UrlEntity_1 = require("./UrlEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of UrlEntity objects.
 */
var UrlEntityCollection = (function (_super) {
    __extends(UrlEntityCollection, _super);
    function UrlEntityCollection(collection) {
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
     * @param   {string}        xmlElementName   Name of the XML element.
     * @return  {UrlEntity}     UrlEntity.
     */
    UrlEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new UrlEntity_1.UrlEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {UrlEntity}      UrlEntity.
     */
    UrlEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new UrlEntity_1.UrlEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {UrlEntity}     complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    UrlEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgUrl; };
    return UrlEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.UrlEntityCollection = UrlEntityCollection;
