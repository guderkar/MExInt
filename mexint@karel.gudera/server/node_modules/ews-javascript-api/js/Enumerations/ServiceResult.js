"use strict";
(function (ServiceResult) {
    ServiceResult[ServiceResult["Success"] = 0] = "Success";
    ServiceResult[ServiceResult["Warning"] = 1] = "Warning";
    ServiceResult[ServiceResult["Error"] = 2] = "Error";
})(exports.ServiceResult || (exports.ServiceResult = {}));
var ServiceResult = exports.ServiceResult;
