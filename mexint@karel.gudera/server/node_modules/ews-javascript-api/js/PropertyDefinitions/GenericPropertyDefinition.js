"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsLogging_1 = require("../Core/EwsLogging");
var TypedPropertyDefinition_1 = require("./TypedPropertyDefinition");
/**
 * @internal Represents generic property definition.
 */
var GenericPropertyDefinition = (function (_super) {
    __extends(GenericPropertyDefinition, _super);
    function GenericPropertyDefinition(propertyName, xmlElementName, uri, versionOrFlags, version, isNullable) {
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
     * @internal Parses the specified value.
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    GenericPropertyDefinition.prototype.Parse = function (value) {
        //todo: fix converting generictype
        EwsLogging_1.EwsLogging.Assert(false, "GenericPropertyDefinition<TPropertyValue>.Parse", "GenericPropertyDefinition<TPropertyValue> needs to be improved");
        return value;
    };
    return GenericPropertyDefinition;
}(TypedPropertyDefinition_1.TypedPropertyDefinition));
exports.GenericPropertyDefinition = GenericPropertyDefinition;
