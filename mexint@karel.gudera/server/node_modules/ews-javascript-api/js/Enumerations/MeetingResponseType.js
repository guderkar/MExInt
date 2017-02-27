"use strict";
(function (MeetingResponseType) {
    MeetingResponseType[MeetingResponseType["Unknown"] = 0] = "Unknown";
    MeetingResponseType[MeetingResponseType["Organizer"] = 1] = "Organizer";
    MeetingResponseType[MeetingResponseType["Tentative"] = 2] = "Tentative";
    MeetingResponseType[MeetingResponseType["Accept"] = 3] = "Accept";
    MeetingResponseType[MeetingResponseType["Decline"] = 4] = "Decline";
    MeetingResponseType[MeetingResponseType["NoResponseReceived"] = 5] = "NoResponseReceived";
})(exports.MeetingResponseType || (exports.MeetingResponseType = {}));
var MeetingResponseType = exports.MeetingResponseType;
