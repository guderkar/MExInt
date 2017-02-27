"use strict";
(function (AppointmentType) {
    AppointmentType[AppointmentType["Single"] = 0] = "Single";
    AppointmentType[AppointmentType["Occurrence"] = 1] = "Occurrence";
    AppointmentType[AppointmentType["Exception"] = 2] = "Exception";
    AppointmentType[AppointmentType["RecurringMaster"] = 3] = "RecurringMaster";
})(exports.AppointmentType || (exports.AppointmentType = {}));
var AppointmentType = exports.AppointmentType;
