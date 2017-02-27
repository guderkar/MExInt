"use strict";
(function (ServiceErrorHandling) {
    ServiceErrorHandling[ServiceErrorHandling["ReturnErrors"] = 0] = "ReturnErrors";
    ServiceErrorHandling[ServiceErrorHandling["ThrowOnError"] = 1] = "ThrowOnError";
})(exports.ServiceErrorHandling || (exports.ServiceErrorHandling = {}));
var ServiceErrorHandling = exports.ServiceErrorHandling;
