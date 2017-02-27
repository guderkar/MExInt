"use strict";
(function (Sensitivity) {
    Sensitivity[Sensitivity["Normal"] = 0] = "Normal";
    Sensitivity[Sensitivity["Personal"] = 1] = "Personal";
    Sensitivity[Sensitivity["Private"] = 2] = "Private";
    Sensitivity[Sensitivity["Confidential"] = 3] = "Confidential";
})(exports.Sensitivity || (exports.Sensitivity = {}));
var Sensitivity = exports.Sensitivity;
