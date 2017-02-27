"use strict";
(function (EventType) {
    EventType[EventType["Status"] = 0] = "Status";
    EventType[EventType["NewMail"] = 1] = "NewMail";
    EventType[EventType["Deleted"] = 2] = "Deleted";
    EventType[EventType["Modified"] = 3] = "Modified";
    EventType[EventType["Moved"] = 4] = "Moved";
    EventType[EventType["Copied"] = 5] = "Copied";
    EventType[EventType["Created"] = 6] = "Created";
    EventType[EventType["FreeBusyChanged"] = 7] = "FreeBusyChanged";
})(exports.EventType || (exports.EventType = {}));
var EventType = exports.EventType;
