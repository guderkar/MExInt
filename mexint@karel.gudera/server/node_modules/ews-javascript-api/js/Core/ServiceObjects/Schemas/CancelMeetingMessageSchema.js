"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../XmlElementNames");
var MessageBody_1 = require("../../../ComplexProperties/MessageBody");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var Schemas_1 = require("./Schemas");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Represents CancelMeetingMessage schema definition.
 */
var CancelMeetingMessageSchema = (function (_super) {
    __extends(CancelMeetingMessageSchema, _super);
    function CancelMeetingMessageSchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    CancelMeetingMessageSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(CancelMeetingMessageSchema, Schemas_1.Schemas.EmailMessageSchema.IsReadReceiptRequested);
        this.RegisterProperty(CancelMeetingMessageSchema, Schemas_1.Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        this.RegisterProperty(CancelMeetingMessageSchema, Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId);
        this.RegisterProperty(CancelMeetingMessageSchema, CancelMeetingMessageSchema.Body);
    };
    /**
     * Defines the **Body** property.
     */
    CancelMeetingMessageSchema.Body = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Body", XmlElementNames_1.XmlElementNames.NewBodyContent, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new MessageBody_1.MessageBody(); });
    /**
     * @internal Instance of **CancelMeetingMessageSchema**
     */
    CancelMeetingMessageSchema.Instance = new CancelMeetingMessageSchema();
    return CancelMeetingMessageSchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.CancelMeetingMessageSchema = CancelMeetingMessageSchema;
