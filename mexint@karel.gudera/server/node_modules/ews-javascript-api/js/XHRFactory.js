"use strict";
var XHRApi = (function () {
    function XHRApi() {
    }
    XHRApi.prototype.xhr = function (xhroptions) {
        throw new Error("xhrApi - stub method, must be bootstrapped");
    };
    Object.defineProperty(XHRApi.prototype, "type", {
        get: function () {
            return "none";
        },
        enumerable: true,
        configurable: true
    });
    return XHRApi;
}());
var xhrApiObj = new XHRApi();
var XHRFactory = (function () {
    function XHRFactory() {
    }
    Object.defineProperty(XHRFactory, "XHRApi", {
        get: function () { return xhrApiObj; },
        enumerable: true,
        configurable: true
    });
    XHRFactory.switchXhr = function (newXHR) {
        xhrApiObj = newXHR;
    };
    return XHRFactory;
}());
exports.XHRFactory = XHRFactory;
