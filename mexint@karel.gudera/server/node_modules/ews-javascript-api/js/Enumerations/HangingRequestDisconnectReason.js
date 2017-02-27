//todo - move to file where class Microsoft.Exchange.WebServices.Data.HangingServiceRequestBase is located
// - cant move - this is needed by shared eventargs type member
"use strict";
(function (HangingRequestDisconnectReason) {
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["Clean"] = 0] = "Clean";
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["UserInitiated"] = 1] = "UserInitiated";
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["Timeout"] = 2] = "Timeout";
    HangingRequestDisconnectReason[HangingRequestDisconnectReason["Exception"] = 3] = "Exception";
})(exports.HangingRequestDisconnectReason || (exports.HangingRequestDisconnectReason = {}));
var HangingRequestDisconnectReason = exports.HangingRequestDisconnectReason;
