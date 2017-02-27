"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Schemas_1 = require("./Schemas");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Represents ResponseMessage schema definition.
 */
var ResponseMessageSchema = (function (_super) {
    __extends(ResponseMessageSchema, _super);
    function ResponseMessageSchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    ResponseMessageSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.ItemSchema.Subject);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.ItemSchema.Body);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.EmailMessageSchema.ToRecipients);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.EmailMessageSchema.CcRecipients);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.EmailMessageSchema.BccRecipients);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.EmailMessageSchema.IsReadReceiptRequested);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId);
        this.RegisterProperty(ResponseMessageSchema, Schemas_1.Schemas.ResponseObjectSchema.BodyPrefix);
    };
    /**
     * @internal Instance of **ResponseMessageSchema**
     */
    ResponseMessageSchema.Instance = new ResponseMessageSchema();
    return ResponseMessageSchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.ResponseMessageSchema = ResponseMessageSchema;
