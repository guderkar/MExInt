"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExtensionMethods_1 = require("../ExtensionMethods");
var GenericPropertyDefinition_1 = require("./GenericPropertyDefinition");
/**
 * @internal Represents Boolean property definition
 */
var BoolPropertyDefinition = (function (_super) {
    __extends(BoolPropertyDefinition, _super);
    function BoolPropertyDefinition(propertyName, xmlElementName, uri, versionOrFlags, version, isNullable) {
        switch (arguments.length) {
            case 4:
                _super.call(this, propertyName, xmlElementName, uri, versionOrFlags);
                break;
            case 5:
                _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version);
                break;
            case 6:
                _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version, isNullable);
                break;
            default:
                break;
        }
    }
    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    String representation of Boolean property.
     */
    BoolPropertyDefinition.prototype.ToString = function (value) {
        if (value)
            return EwsUtilities_1.EwsUtilities.BoolToXSBool(value);
        throw new Error("BoolPropertyDefinition: incorrect call of ToString(value): value is undefined");
    };
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    BoolPropertyDefinition.prototype.Parse = function (value) {
        return ExtensionMethods_1.Convert.toBool(value);
    };
    return BoolPropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.BoolPropertyDefinition = BoolPropertyDefinition;
