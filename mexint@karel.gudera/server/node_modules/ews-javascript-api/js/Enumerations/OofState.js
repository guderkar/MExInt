"use strict";
(function (OofState) {
    OofState[OofState["Disabled"] = 0] = "Disabled";
    OofState[OofState["Enabled"] = 1] = "Enabled";
    OofState[OofState["Scheduled"] = 2] = "Scheduled";
})(exports.OofState || (exports.OofState = {}));
var OofState = exports.OofState;
