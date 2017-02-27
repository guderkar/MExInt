"use strict";
(function (LegacyFreeBusyStatus) {
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["Free"] = 0] = "Free";
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["Tentative"] = 1] = "Tentative";
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["Busy"] = 2] = "Busy";
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["OOF"] = 3] = "OOF";
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["WorkingElsewhere"] = 4] = "WorkingElsewhere";
    LegacyFreeBusyStatus[LegacyFreeBusyStatus["NoData"] = 5] = "NoData";
})(exports.LegacyFreeBusyStatus || (exports.LegacyFreeBusyStatus = {}));
var LegacyFreeBusyStatus = exports.LegacyFreeBusyStatus;
