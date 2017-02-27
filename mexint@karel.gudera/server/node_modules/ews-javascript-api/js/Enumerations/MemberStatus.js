"use strict";
(function (MemberStatus) {
    MemberStatus[MemberStatus["Unrecognized"] = 0] = "Unrecognized";
    MemberStatus[MemberStatus["Normal"] = 1] = "Normal";
    MemberStatus[MemberStatus["Demoted"] = 2] = "Demoted";
})(exports.MemberStatus || (exports.MemberStatus = {}));
var MemberStatus = exports.MemberStatus;
