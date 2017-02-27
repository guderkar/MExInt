//todo - move to file where class Microsoft.Exchange.WebServices.Data.OnlineMeetingSettings is located
"use strict";
(function (OnlineMeetingAccessLevel) {
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Locked"] = 0] = "Locked";
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Invited"] = 1] = "Invited";
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Internal"] = 2] = "Internal";
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Everyone"] = 3] = "Everyone";
})(exports.OnlineMeetingAccessLevel || (exports.OnlineMeetingAccessLevel = {}));
var OnlineMeetingAccessLevel = exports.OnlineMeetingAccessLevel;
