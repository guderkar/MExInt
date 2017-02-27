"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../XmlElementNames");
var Schemas_1 = require("./Schemas");
var ScopedDateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/ScopedDateTimePropertyDefinition");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var MeetingMessageSchema_1 = require("./MeetingMessageSchema");
/**
 * Field URIs for meeting response.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.ProposedStart = "meeting:ProposedStart";
    FieldUris.ProposedEnd = "meeting:ProposedEnd";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for meeting response
 */
var MeetingResponseSchema = (function (_super) {
    __extends(MeetingResponseSchema, _super);
    function MeetingResponseSchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    MeetingResponseSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.Start);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.End);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.Location);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.Recurrence);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.AppointmentType);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.ProposedStart);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.ProposedEnd);
        this.RegisterProperty(MeetingResponseSchema, MeetingResponseSchema.EnhancedLocation);
    };
    /**
     * Defines the **Start** property.
     */
    MeetingResponseSchema.Start = Schemas_1.Schemas.AppointmentSchema.Start;
    /**
     * Defines the **End** property.
     */
    MeetingResponseSchema.End = Schemas_1.Schemas.AppointmentSchema.End;
    /**
     * Defines the **Location** property.
     */
    MeetingResponseSchema.Location = Schemas_1.Schemas.AppointmentSchema.Location;
    /**
     * Defines the **AppointmentType** property.
     */
    MeetingResponseSchema.AppointmentType = Schemas_1.Schemas.AppointmentSchema.AppointmentType;
    /**
     * Defines the **Recurrence** property.
     */
    MeetingResponseSchema.Recurrence = Schemas_1.Schemas.AppointmentSchema.Recurrence;
    /**
     * Defines the **ProposedStart** property.
     */
    MeetingResponseSchema.ProposedStart = new ScopedDateTimePropertyDefinition_1.ScopedDateTimePropertyDefinition("ProposedStart", XmlElementNames_1.XmlElementNames.ProposedStart, FieldUris.ProposedStart, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function (version) { return Schemas_1.Schemas.AppointmentSchema.StartTimeZone; });
    /**
     * Defines the **ProposedEnd** property.
     */
    MeetingResponseSchema.ProposedEnd = new ScopedDateTimePropertyDefinition_1.ScopedDateTimePropertyDefinition("ProposedEnd", XmlElementNames_1.XmlElementNames.ProposedEnd, FieldUris.ProposedEnd, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function (version) { return Schemas_1.Schemas.AppointmentSchema.EndTimeZone; });
    /**
     * Defines the **EnhancedLocation** property.
     */
    MeetingResponseSchema.EnhancedLocation = Schemas_1.Schemas.AppointmentSchema.EnhancedLocation;
    /**
     * @internal Instance of **MeetingResponseSchema**
     */
    MeetingResponseSchema.Instance = new MeetingResponseSchema();
    return MeetingResponseSchema;
}(MeetingMessageSchema_1.MeetingMessageSchema));
exports.MeetingResponseSchema = MeetingResponseSchema;
