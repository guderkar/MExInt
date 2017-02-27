"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var PropertyDefinition_1 = require("./PropertyDefinition");
/**
 * @internal Represents typed property definition.
 */
var TypedPropertyDefinition = (function (_super) {
    __extends(TypedPropertyDefinition, _super);
    function TypedPropertyDefinition(propertyName, xmlElementName, uri, versionOrFlags, version, isNullable) {
        switch (arguments.length) {
            case 4:
                _super.call(this, propertyName, xmlElementName, uri, versionOrFlags);
                break;
            case 5:
            case 6:
                _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version);
                break;
            default:
                break;
        }
        this.isNullable = isNullable || false;
    }
    Object.defineProperty(TypedPropertyDefinition.prototype, "IsNullable", {
        /**
         * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
         *
         */
        get: function () { return this.isNullable; },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JsObject value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    TypedPropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        if (jsObject) {
            propertyBag._setItem(this, this.Parse(jsObject));
        }
        // if (typeof jsObject === 'string' || jsObject instanceof String) {
        //     propertyBag._setItem(this, this.Parse(jsObject));
        // }
        // else if (jsObject != null) { //undefined == null returns true, false for === comparison.
        //     propertyBag._setItem(this, this.Parse(jsObject));
        // }
    };
    /**
     * @internal Convert instance to string.
     *
     * @param   {any}   value   The value.
     * @return  {string}        String representation of property value.
     */
    TypedPropertyDefinition.prototype.ToString = function (value) {
        if (value)
            return value.toString();
        throw new Error("TypedPropertydefinition: incorrect call of ToString(value): value is undefined");
    };
    TypedPropertyDefinition.prototype.toString = function (value) {
        return this.ToString(value);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    TypedPropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        var value = propertyBag._getItem(this);
        if (value) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, this.XmlElementName, this.Name, value);
        }
    };
    return TypedPropertyDefinition;
}(PropertyDefinition_1.PropertyDefinition));
exports.TypedPropertyDefinition = TypedPropertyDefinition;
