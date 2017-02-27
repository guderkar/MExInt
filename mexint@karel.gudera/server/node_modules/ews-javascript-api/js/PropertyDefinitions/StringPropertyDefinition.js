"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TypedPropertyDefinition_1 = require("./TypedPropertyDefinition");
/**
 * @internal Represents String property definition.
 */
var StringPropertyDefinition = (function (_super) {
    __extends(StringPropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **StringPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function StringPropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        _super.call(this, propertyName, xmlElementName, uri, flags, version);
    }
    Object.defineProperty(StringPropertyDefinition.prototype, "IsNullable", {
        /**
         * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
         */
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StringPropertyDefinition.prototype, "Type", {
        /**
         * @internal Gets the property type.
         */
        get: function () { return StringPropertyDefinition; } //System.Type;
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Parses the specified value.
     *
     * @param   {string}   value   The value.
     * @return  {any}           String value.
     */
    StringPropertyDefinition.prototype.Parse = function (value) { return value; };
    return StringPropertyDefinition;
}(TypedPropertyDefinition_1.TypedPropertyDefinition));
exports.StringPropertyDefinition = StringPropertyDefinition;
