"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Schemas_1 = require("./Schemas");
var MeetingMessageSchema_1 = require("./MeetingMessageSchema");
/**
 * Represents the schema for meeting cancellation.
 */
var MeetingCancellationSchema = (function (_super) {
    __extends(MeetingCancellationSchema, _super);
    function MeetingCancellationSchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    MeetingCancellationSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.Start);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.End);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.Location);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.Recurrence);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.AppointmentType);
        this.RegisterProperty(MeetingCancellationSchema, MeetingCancellationSchema.EnhancedLocation);
    };
    /**
     * Defines the **Start** property.
     */
    MeetingCancellationSchema.Start = Schemas_1.Schemas.AppointmentSchema.Start;
    /**
     * Defines the **End** property.
     */
    MeetingCancellationSchema.End = Schemas_1.Schemas.AppointmentSchema.End;
    /**
     * Defines the **Location** property.
     */
    MeetingCancellationSchema.Location = Schemas_1.Schemas.AppointmentSchema.Location;
    /**
     * Defines the **AppointmentType** property.
     */
    MeetingCancellationSchema.AppointmentType = Schemas_1.Schemas.AppointmentSchema.AppointmentType;
    /**
     * Defines the **Recurrence** property.
     */
    MeetingCancellationSchema.Recurrence = Schemas_1.Schemas.AppointmentSchema.Recurrence;
    /**
     * Defines the **EnhancedLocation** property.
     */
    MeetingCancellationSchema.EnhancedLocation = Schemas_1.Schemas.AppointmentSchema.EnhancedLocation;
    /**
     * @internal Instance of **MeetingCancellationSchema**
     */
    MeetingCancellationSchema.Instance = new MeetingCancellationSchema();
    return MeetingCancellationSchema;
}(MeetingMessageSchema_1.MeetingMessageSchema));
exports.MeetingCancellationSchema = MeetingCancellationSchema;
