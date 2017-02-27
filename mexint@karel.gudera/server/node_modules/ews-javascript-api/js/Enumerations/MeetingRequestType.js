"use strict";
(function (MeetingRequestType) {
    MeetingRequestType[MeetingRequestType["None"] = 0] = "None";
    MeetingRequestType[MeetingRequestType["FullUpdate"] = 1] = "FullUpdate";
    MeetingRequestType[MeetingRequestType["InformationalUpdate"] = 2] = "InformationalUpdate";
    MeetingRequestType[MeetingRequestType["NewMeetingRequest"] = 3] = "NewMeetingRequest";
    MeetingRequestType[MeetingRequestType["Outdated"] = 4] = "Outdated";
    MeetingRequestType[MeetingRequestType["SilentUpdate"] = 5] = "SilentUpdate";
    MeetingRequestType[MeetingRequestType["PrincipalWantsCopy"] = 6] = "PrincipalWantsCopy";
})(exports.MeetingRequestType || (exports.MeetingRequestType = {}));
var MeetingRequestType = exports.MeetingRequestType;
