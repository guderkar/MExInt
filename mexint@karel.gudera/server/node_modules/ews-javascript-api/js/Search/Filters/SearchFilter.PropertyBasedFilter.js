"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropertyDefinitionBase_1 = require("../../PropertyDefinitions/PropertyDefinitionBase");
var ServiceValidationException_1 = require('../../Exceptions/ServiceValidationException');
var Strings_1 = require("../../Strings");
var SearchFilter_1 = require("./SearchFilter");
var PropertyBasedFilter = (function (_super) {
    __extends(PropertyBasedFilter, _super);
    function PropertyBasedFilter(propertyDefinition) {
        _super.call(this);
        this.propertyDefinition = null;
        if (arguments.length === 1) {
            this.propertyDefinition = propertyDefinition;
        }
    }
    Object.defineProperty(PropertyBasedFilter.prototype, "PropertyDefinition", {
        /**
         * Gets or sets the definition of the property that is involved in the search filter. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
         */
        get: function () {
            return this.propertyDefinition;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.propertyDefinition; }, setValue: function (updateValue) { _this.propertyDefinition = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validate instance.
     */
    PropertyBasedFilter.prototype.InternalValidate = function () {
        if (this.propertyDefinition == null) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.PropertyDefinitionPropertyMustBeSet);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    PropertyBasedFilter.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.PropertyDefinition = PropertyDefinitionBase_1.PropertyDefinitionBase.LoadFromXmlJsObject(jsObject);
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    PropertyBasedFilter.prototype.WriteElementsToXml = function (writer) { this.PropertyDefinition.WriteToXml(writer); };
    return PropertyBasedFilter;
}(SearchFilter_1.SearchFilter));
exports.PropertyBasedFilter = PropertyBasedFilter;
