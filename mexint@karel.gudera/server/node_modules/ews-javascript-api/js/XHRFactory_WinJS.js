/// <reference path="../../typings/winjs/winjs.d.ts" />
"use strict";
var WinJS = require('winjs-node');
var XHRFactory_1 = require("./XHRFactory");
var WinJSXHRApi = (function () {
    function WinJSXHRApi() {
    }
    WinJSXHRApi.prototype.xhr = function (xhroptions) {
        return WinJS.xhr(xhroptions);
    };
    Object.defineProperty(WinJSXHRApi.prototype, "type", {
        get: function () {
            return "WinJS";
        },
        enumerable: true,
        configurable: true
    });
    return WinJSXHRApi;
}());
exports.WinJSXHRApi = WinJSXHRApi;
XHRFactory_1.XHRFactory.switchXhr(new WinJSXHRApi());
function setXhr() { }
exports.setXhr = setXhr; //just to keep the require statement in file, typescript strips them if not used.
