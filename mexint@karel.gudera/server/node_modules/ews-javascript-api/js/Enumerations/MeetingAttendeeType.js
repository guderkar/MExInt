"use strict";
(function (MeetingAttendeeType) {
    MeetingAttendeeType[MeetingAttendeeType["Organizer"] = 0] = "Organizer";
    MeetingAttendeeType[MeetingAttendeeType["Required"] = 1] = "Required";
    MeetingAttendeeType[MeetingAttendeeType["Optional"] = 2] = "Optional";
    MeetingAttendeeType[MeetingAttendeeType["Room"] = 3] = "Room";
    MeetingAttendeeType[MeetingAttendeeType["Resource"] = 4] = "Resource";
})(exports.MeetingAttendeeType || (exports.MeetingAttendeeType = {}));
var MeetingAttendeeType = exports.MeetingAttendeeType;
