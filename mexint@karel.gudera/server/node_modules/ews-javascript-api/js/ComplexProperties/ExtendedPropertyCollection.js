"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtendedProperty_1 = require("./ExtendedProperty");
var ExtensionMethods_1 = require("../ExtensionMethods");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
var ExtendedPropertyCollection = (function (_super) {
    __extends(ExtendedPropertyCollection, _super);
    function ExtendedPropertyCollection() {
        _super.apply(this, arguments);
    }
    ExtendedPropertyCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new ExtendedProperty_1.ExtendedProperty(); };
    ExtendedPropertyCollection.prototype.CreateDefaultComplexProperty = function () { return new ExtendedProperty_1.ExtendedProperty(); };
    ExtendedPropertyCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return null; };
    ExtendedPropertyCollection.prototype.GetOrAddExtendedProperty = function (propertyDefinition) {
        var extendedProperty = { outValue: null };
        if (!this.TryGetProperty(propertyDefinition, extendedProperty)) {
            extendedProperty.outValue = new ExtendedProperty_1.ExtendedProperty(propertyDefinition);
            this.InternalAdd(extendedProperty.outValue);
        }
        return extendedProperty.outValue;
    };
    ExtendedPropertyCollection.prototype.InternalToJson = function (service) { throw new Error("ExtendedPropertyCollection.ts - InternalToJson : Not implemented."); };
    ExtendedPropertyCollection.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        var extendedProperty = new ExtendedProperty_1.ExtendedProperty();
        //debugger; //debug: //todo: check for need of local element -not tested
        extendedProperty.LoadFromXmlJsObject(jsObject, service);
        this.InternalAdd(extendedProperty);
    };
    ExtendedPropertyCollection.prototype.RemoveExtendedProperty = function (propertyDefinition) {
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");
        var extendedProperty = null;
        if (this.TryGetProperty(propertyDefinition, extendedProperty)) {
            return this.InternalRemove(extendedProperty);
        }
        else {
            return false;
        }
    };
    ExtendedPropertyCollection.prototype.SetExtendedProperty = function (propertyDefinition, value) {
        var extendedProperty = this.GetOrAddExtendedProperty(propertyDefinition);
        extendedProperty.Value = value;
    };
    ExtendedPropertyCollection.prototype.TryGetProperty = function (propertyDefinition, extendedProperty) {
        extendedProperty.outValue = ExtensionMethods_1.ArrayHelper.Find(this.Items, function (prop) { return prop.PropertyDefinition.Equals(propertyDefinition); });
        return extendedProperty.outValue != null;
    };
    ExtendedPropertyCollection.prototype.TryGetValue = function (propertyDefinition, propertyValue) {
        var extendedProperty = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, extendedProperty)) {
            //debug: Verify that the type parameter and property definition's type are compatible.
            //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
            // var errorMessage = StringHelper.Format(
            //     Strings.PropertyDefinitionTypeMismatch,
            //     EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
            //     EwsUtilities.GetPrintableTypeName("Y"));
            // throw new ArgumentException(errorMessage +  " - propertyDefinition");
            //}
            propertyValue.outValue = extendedProperty.outValue.Value;
            return true;
        }
        else {
            propertyValue.outValue = null; // default(T);
            return false;
        }
    };
    ExtendedPropertyCollection.prototype.WriteToXml = function (writer, xmlElementName) {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var extendedProperty = _a[_i];
            extendedProperty.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ExtendedProperty);
        }
    };
    return ExtendedPropertyCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.ExtendedPropertyCollection = ExtendedPropertyCollection;
