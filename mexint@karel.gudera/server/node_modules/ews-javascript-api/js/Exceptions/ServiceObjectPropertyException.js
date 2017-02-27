"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropertyException_1 = require("./PropertyException");
var ServiceObjectPropertyException = (function (_super) {
    __extends(ServiceObjectPropertyException, _super);
    //private propertyDefinition: PropertyDefinitionBase;
    function ServiceObjectPropertyException(message, propertyDefinition, innerException) {
        _super.call(this, message, propertyDefinition.GetPrintableName(), innerException);
        this.PropertyDefinition = propertyDefinition;
    }
    return ServiceObjectPropertyException;
}(PropertyException_1.PropertyException));
exports.ServiceObjectPropertyException = ServiceObjectPropertyException;
