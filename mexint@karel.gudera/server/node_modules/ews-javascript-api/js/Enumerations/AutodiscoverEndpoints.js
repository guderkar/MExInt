"use strict";
(function (AutodiscoverEndpoints) {
    AutodiscoverEndpoints[AutodiscoverEndpoints["None"] = 0] = "None";
    AutodiscoverEndpoints[AutodiscoverEndpoints["Legacy"] = 1] = "Legacy";
    AutodiscoverEndpoints[AutodiscoverEndpoints["Soap"] = 2] = "Soap";
    AutodiscoverEndpoints[AutodiscoverEndpoints["WsSecurity"] = 4] = "WsSecurity";
    AutodiscoverEndpoints[AutodiscoverEndpoints["WSSecuritySymmetricKey"] = 8] = "WSSecuritySymmetricKey";
    AutodiscoverEndpoints[AutodiscoverEndpoints["WSSecurityX509Cert"] = 16] = "WSSecurityX509Cert";
    AutodiscoverEndpoints[AutodiscoverEndpoints["OAuth"] = 32] = "OAuth";
})(exports.AutodiscoverEndpoints || (exports.AutodiscoverEndpoints = {}));
var AutodiscoverEndpoints = exports.AutodiscoverEndpoints;
