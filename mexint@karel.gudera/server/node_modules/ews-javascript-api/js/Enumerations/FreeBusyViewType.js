"use strict";
(function (FreeBusyViewType) {
    FreeBusyViewType[FreeBusyViewType["None"] = 0] = "None";
    FreeBusyViewType[FreeBusyViewType["MergedOnly"] = 1] = "MergedOnly";
    FreeBusyViewType[FreeBusyViewType["FreeBusy"] = 2] = "FreeBusy";
    FreeBusyViewType[FreeBusyViewType["FreeBusyMerged"] = 3] = "FreeBusyMerged";
    FreeBusyViewType[FreeBusyViewType["Detailed"] = 4] = "Detailed";
    FreeBusyViewType[FreeBusyViewType["DetailedMerged"] = 5] = "DetailedMerged";
})(exports.FreeBusyViewType || (exports.FreeBusyViewType = {}));
var FreeBusyViewType = exports.FreeBusyViewType;
