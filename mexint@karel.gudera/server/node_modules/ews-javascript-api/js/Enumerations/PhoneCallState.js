"use strict";
(function (PhoneCallState) {
    PhoneCallState[PhoneCallState["Idle"] = 0] = "Idle";
    PhoneCallState[PhoneCallState["Connecting"] = 1] = "Connecting";
    PhoneCallState[PhoneCallState["Alerted"] = 2] = "Alerted";
    PhoneCallState[PhoneCallState["Connected"] = 3] = "Connected";
    PhoneCallState[PhoneCallState["Disconnected"] = 4] = "Disconnected";
    PhoneCallState[PhoneCallState["Incoming"] = 5] = "Incoming";
    PhoneCallState[PhoneCallState["Transferring"] = 6] = "Transferring";
    PhoneCallState[PhoneCallState["Forwarding"] = 7] = "Forwarding";
})(exports.PhoneCallState || (exports.PhoneCallState = {}));
var PhoneCallState = exports.PhoneCallState;
