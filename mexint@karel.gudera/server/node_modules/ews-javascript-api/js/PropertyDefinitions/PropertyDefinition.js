"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropertyDefinitionFlags_1 = require("../Enumerations/PropertyDefinitionFlags");
var ExtensionMethods_1 = require("../ExtensionMethods");
var ServiceObjectPropertyDefinition_1 = require("./ServiceObjectPropertyDefinition");
/**
 * Represents the definition of a folder or item property.
 */
var PropertyDefinition = (function (_super) {
    __extends(PropertyDefinition, _super);
    function PropertyDefinition(propertyName, xmlElementName, uriOrFlags, versionOrFlags, version) {
        typeof uriOrFlags === 'string' ? _super.call(this, uriOrFlags) : _super.call(this);
        this.name = propertyName;
        this.xmlElementName = xmlElementName;
        this.flags = typeof uriOrFlags === 'string' ? PropertyDefinitionFlags_1.PropertyDefinitionFlags.None : uriOrFlags;
        switch (arguments.length) {
            case 4:
                this.version = versionOrFlags;
                break;
            case 5:
                this.version = version;
                this.flags = versionOrFlags;
                break;
            default:
                break;
        }
    }
    Object.defineProperty(PropertyDefinition.prototype, "IsNullable", {
        /**
         * @internalGets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
         */
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyDefinition.prototype, "Name", {
        /**
         * Gets the name of the property.
         */
        get: function () {
            if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.name)) {
                throw new Error("PropertyDefinition.Name - incorrectly registered propertynames - info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error");
            }
            return this.name;
        },
        set: function (value) { this.name = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyDefinition.prototype, "Version", {
        /**
         * Gets the minimum Exchange version that supports this property.
         *
         * @value {ExchangeVersion} The version.
         */
        get: function () { return this.version; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyDefinition.prototype, "XmlElementName", {
        /**
         * @internalGets the name of the XML element.
         *
         * @value {string}  The name of the XML element.
         */
        get: function () { return this.xmlElementName; },
        enumerable: true,
        configurable: true
    });
    /**
     * @internalGets a list of associated internal properties.
     *
     * @return  {PropertyDefinition[]}      A list of PropertyDefinition objects.
     * @remarks This is a hack. It is here (currently) solely to help the API register the MeetingTimeZone property definition that is internal.
     */
    PropertyDefinition.prototype.GetAssociatedInternalProperties = function () {
        var properties = [];
        this.RegisterAssociatedInternalProperties(properties);
        return properties;
    };
    /**
     * @internalGets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    PropertyDefinition.prototype.GetPrintableName = function () { return this.Name; };
    PropertyDefinition.prototype.HasFlag = function (flag, version) {
        return (this.flags & flag) == flag;
    };
    /**
     * @internalRegisters associated internal properties.
     *
     * @param   {PropertyDefinition[]}   properties   The list in which to add the associated properties.
     */
    PropertyDefinition.prototype.RegisterAssociatedInternalProperties = function (properties) {
    };
    return PropertyDefinition;
}(ServiceObjectPropertyDefinition_1.ServiceObjectPropertyDefinition));
exports.PropertyDefinition = PropertyDefinition;
