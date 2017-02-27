"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExtensionMethods_1 = require("../ExtensionMethods");
var GenericPropertyDefinition_1 = require("./GenericPropertyDefinition");
/**
 * @internal Represents Integer property defintion.
 */
var IntPropertyDefinition = (function (_super) {
    __extends(IntPropertyDefinition, _super);
    function IntPropertyDefinition(propertyName, xmlElementName, uri, versionOrFlags, version, isNullable) {
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
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    IntPropertyDefinition.prototype.Parse = function (value) {
        return ExtensionMethods_1.Convert.toNumber(value);
    };
    return IntPropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.IntPropertyDefinition = IntPropertyDefinition;
