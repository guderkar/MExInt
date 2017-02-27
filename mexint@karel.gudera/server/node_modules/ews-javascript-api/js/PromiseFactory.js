"use strict";
//import {PromiseExport} from "./Promise_WinJS";
// export function Promise<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
// 	return PromiseExport<T>(init);
// }
var promiseApi = (function () {
    function promiseApi() {
    }
    promiseApi.prototype.create = function (init, onCancel) {
        throw new Error("PromiseApi - stub method, must be bootstrapped");
    };
    promiseApi.prototype.resolve = function (value) {
        throw new Error("PromiseApi - stub method, must be bootstrapped");
    };
    promiseApi.prototype.reject = function (value) {
        throw new Error("PromiseApi - stub method, must be bootstrapped");
    };
    Object.defineProperty(promiseApi.prototype, "type", {
        get: function () {
            return "none";
        },
        enumerable: true,
        configurable: true
    });
    return promiseApi;
}());
var promiseApiObj = new promiseApi();
var PromiseFactory = (function () {
    function PromiseFactory() {
    }
    PromiseFactory.create = function (init, onCancel) {
        return promiseApiObj.create(init, onCancel);
    };
    PromiseFactory.resolve = function (value) {
        return promiseApiObj.resolve(value);
    };
    PromiseFactory.reject = function (value) {
        return promiseApiObj.reject(value);
    };
    Object.defineProperty(PromiseFactory, "type", {
        get: function () {
            return promiseApiObj.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseFactory, "Promise", {
        get: function () { return promiseApiObj; },
        set: function (value) { promiseApiObj = value; },
        enumerable: true,
        configurable: true
    });
    PromiseFactory.switchPromise = function (newPromiseObject) {
        promiseApiObj = newPromiseObject;
    };
    return PromiseFactory;
}());
exports.PromiseFactory = PromiseFactory;
