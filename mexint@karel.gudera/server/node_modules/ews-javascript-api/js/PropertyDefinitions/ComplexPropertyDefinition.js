"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsLogging_1 = require("../Core/EwsLogging");
var ComplexPropertyDefinitionBase_1 = require("./ComplexPropertyDefinitionBase");
/**
 * @internal Represents base complex property type.
 *
 * @type <TComplexProperty> The type of the complex property.
 */
var ComplexPropertyDefinition = (function (_super) {
    __extends(ComplexPropertyDefinition, _super);
    function ComplexPropertyDefinition(propertyName, xmlElementName, uriOrFlags, versionOrFlags, versionOrDelegate, propertyCreationDelegate) {
        switch (arguments.length) {
            case 5:
                _super.call(this, propertyName, xmlElementName, uriOrFlags, versionOrFlags);
                this.propertyCreationDelegate = versionOrDelegate;
                EwsLogging_1.EwsLogging.Assert(this.propertyCreationDelegate != null, "ComplexPropertyDefinition ctor", "CreateComplexPropertyDelegate cannot be null");
                break;
            case 6:
                _super.call(this, propertyName, xmlElementName, uriOrFlags, versionOrFlags, versionOrDelegate);
                this.propertyCreationDelegate = propertyCreationDelegate;
                break;
            default:
                break;
        }
    }
    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}   owner   The owner.
     * @return  {ComplexProperty}       ComplexProperty instance.
     */
    ComplexPropertyDefinition.prototype.CreatePropertyInstance = function (owner) {
        var complexProperty = this.propertyCreationDelegate();
        //todo: fix better interface detection by some other means, checking property directly
        var isIOwnedProperty = complexProperty["___implementsInterface"].indexOf("IOwnedProperty") >= 0;
        var ownedProperty = complexProperty;
        if (isIOwnedProperty) {
            ownedProperty.Owner = owner;
        }
        if (complexProperty)
            return complexProperty;
    };
    return ComplexPropertyDefinition;
}(ComplexPropertyDefinitionBase_1.ComplexPropertyDefinitionBase));
exports.ComplexPropertyDefinition = ComplexPropertyDefinition;
