"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../XmlElementNames");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var ItemId_1 = require("../../../ComplexProperties/ItemId");
var MessageBody_1 = require("../../../ComplexProperties/MessageBody");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Represents ResponseObject schema definition.
 */
var ResponseObjectSchema = (function (_super) {
    __extends(ResponseObjectSchema, _super);
    function ResponseObjectSchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    ResponseObjectSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(ResponseObjectSchema, ResponseObjectSchema.ReferenceItemId);
    };
    /**
     * Defines the **ReferenceItemId** property.
     */
    ResponseObjectSchema.ReferenceItemId = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ReferenceItemId", XmlElementNames_1.XmlElementNames.ReferenceItemId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ItemId_1.ItemId(); });
    /**
     * Defines the **BodyPrefix** property.
     */
    ResponseObjectSchema.BodyPrefix = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("NewBodyContent", XmlElementNames_1.XmlElementNames.NewBodyContent, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new MessageBody_1.MessageBody(); });
    /**
     * @internal Instance of **ResponseObjectSchema**
     */
    ResponseObjectSchema.Instance = new ResponseObjectSchema();
    return ResponseObjectSchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.ResponseObjectSchema = ResponseObjectSchema;
