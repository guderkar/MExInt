"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExtensionMethods_1 = require('../../ExtensionMethods');
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SearchFilter_PropertyBasedFilter_1 = require("./SearchFilter.PropertyBasedFilter");
/**
 * Represents a bitmask exclusion search filter. Applications can use ExcludesBitExcludesBitmaskFilter to define conditions such as "(OrdinalField and 0x0010) != 0x0010"
 */
var ExcludesBitmask = (function (_super) {
    __extends(ExcludesBitmask, _super);
    function ExcludesBitmask(propertyDefinition, bitmask) {
        if (bitmask === void 0) { bitmask = 0; }
        arguments.length === 0 ? _super.call(this) : _super.call(this, propertyDefinition);
        this.bitmask = bitmask;
    }
    Object.defineProperty(ExcludesBitmask.prototype, "Bitmask", {
        /**
         * Gets or sets the bitmask to compare the property with.
         */
        get: function () {
            return this.bitmask;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.bitmask; }, setValue: function (updateValue) { _this.bitmask = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    ExcludesBitmask.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Excludes; };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}               jsObject                Json Object converted from XML.
     * @param   {ExchangeService}   service                 The service.
     * @param   {string}            typeName                 type name, when provided prevent call for type name check.
     * @return  {SearchFilter}      SearchFilter instance.
     */
    ExcludesBitmask.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        this.bitmask = ExtensionMethods_1.Convert.toInt(jsObject[XmlElementNames_1.XmlElementNames.Bitmask][XmlElementNames_1.XmlElementNames.Value]);
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ExcludesBitmask.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Bitmask);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Value, this.Bitmask);
        writer.WriteEndElement(); // Bitmask
    };
    return ExcludesBitmask;
}(SearchFilter_PropertyBasedFilter_1.PropertyBasedFilter));
exports.ExcludesBitmask = ExcludesBitmask;
