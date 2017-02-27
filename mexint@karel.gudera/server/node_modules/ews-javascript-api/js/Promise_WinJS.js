/// <reference path="../../typings/winjs/winjs.d.ts" />
"use strict";
var WinJS = require('winjs-node');
var PromiseFactory_1 = require("./PromiseFactory");
function PromiseExport(init, onCancel) {
    return new WinJS.Promise(init, onCancel);
}
var WinJSPromiseApi = (function () {
    function WinJSPromiseApi() {
    }
    WinJSPromiseApi.prototype.create = function (init, onCancel) {
        return new WinJS.Promise(init, onCancel);
    };
    WinJSPromiseApi.prototype.resolve = function (value) {
        return WinJS.Promise.as(value);
    };
    WinJSPromiseApi.prototype.reject = function (value) {
        return WinJS.Promise.wrapError(value);
    };
    Object.defineProperty(WinJSPromiseApi.prototype, "type", {
        get: function () {
            return "WinJS";
        },
        enumerable: true,
        configurable: true
    });
    return WinJSPromiseApi;
}());
PromiseFactory_1.PromiseFactory.switchPromise(new WinJSPromiseApi());
function setPromise() { }
exports.setPromise = setPromise; //just to keep the require statement in file, typescript strips them if not used.
