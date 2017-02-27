"use strict";
(function (AvailabilityData) {
    AvailabilityData[AvailabilityData["FreeBusy"] = 0] = "FreeBusy";
    AvailabilityData[AvailabilityData["Suggestions"] = 1] = "Suggestions";
    AvailabilityData[AvailabilityData["FreeBusyAndSuggestions"] = 2] = "FreeBusyAndSuggestions";
})(exports.AvailabilityData || (exports.AvailabilityData = {}));
var AvailabilityData = exports.AvailabilityData;
