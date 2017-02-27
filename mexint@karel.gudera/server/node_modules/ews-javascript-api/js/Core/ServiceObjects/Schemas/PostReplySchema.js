"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Schemas_1 = require("./Schemas");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Represents PostReply schema definition.
 */
var PostReplySchema = (function (_super) {
    __extends(PostReplySchema, _super);
    function PostReplySchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    PostReplySchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ItemSchema.Subject);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ItemSchema.Body);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ResponseObjectSchema.BodyPrefix);
    };
    /**
     * @internal Instance of **PostReplySchema**
     */
    PostReplySchema.Instance = new PostReplySchema();
    return PostReplySchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.PostReplySchema = PostReplySchema;
