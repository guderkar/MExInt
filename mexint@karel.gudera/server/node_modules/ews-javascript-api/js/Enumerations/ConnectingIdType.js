"use strict";
(function (ConnectingIdType) {
    ConnectingIdType[ConnectingIdType["PrincipalName"] = 0] = "PrincipalName";
    ConnectingIdType[ConnectingIdType["SID"] = 1] = "SID";
    ConnectingIdType[ConnectingIdType["SmtpAddress"] = 2] = "SmtpAddress";
})(exports.ConnectingIdType || (exports.ConnectingIdType = {}));
var ConnectingIdType = exports.ConnectingIdType;
