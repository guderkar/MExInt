"use strict";
(function (ConnectionFailureCause) {
    ConnectionFailureCause[ConnectionFailureCause["None"] = 0] = "None";
    ConnectionFailureCause[ConnectionFailureCause["UserBusy"] = 1] = "UserBusy";
    ConnectionFailureCause[ConnectionFailureCause["NoAnswer"] = 2] = "NoAnswer";
    ConnectionFailureCause[ConnectionFailureCause["Unavailable"] = 3] = "Unavailable";
    ConnectionFailureCause[ConnectionFailureCause["Other"] = 4] = "Other";
})(exports.ConnectionFailureCause || (exports.ConnectionFailureCause = {}));
var ConnectionFailureCause = exports.ConnectionFailureCause;
