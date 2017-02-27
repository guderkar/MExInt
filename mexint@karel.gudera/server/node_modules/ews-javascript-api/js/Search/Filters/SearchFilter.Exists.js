"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var SearchFilter_PropertyBasedFilter_1 = require("./SearchFilter.PropertyBasedFilter");
/**
 * Represents a search filter checking if a field is set. Applications can use ExistsFilter to define conditions such as "Field IS SET".
 */
var Exists = (function (_super) {
    __extends(Exists, _super);
    function Exists(propertyDefinition) {
        arguments.length === 0 ? _super.call(this) : _super.call(this, propertyDefinition);
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    Exists.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Exists; };
    return Exists;
}(SearchFilter_PropertyBasedFilter_1.PropertyBasedFilter));
exports.Exists = Exists;
