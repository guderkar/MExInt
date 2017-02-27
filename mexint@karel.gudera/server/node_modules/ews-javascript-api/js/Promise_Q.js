"use strict";
var Q = require('q');
var PromiseFactory_1 = require("./PromiseFactory");
function PromiseExport(init, onCancel) {
    return Q.Promise(init);
}
var QPromiseApi = (function () {
    function QPromiseApi() {
    }
    QPromiseApi.prototype.create = function (init, onCancel) {
        return Q.Promise(init);
    };
    QPromiseApi.prototype.resolve = function (value) {
        return Q(value);
    };
    QPromiseApi.prototype.reject = function (value) {
        return Q.reject(value);
    };
    Object.defineProperty(QPromiseApi.prototype, "type", {
        get: function () {
            return "Q";
        },
        enumerable: true,
        configurable: true
    });
    return QPromiseApi;
}());
exports.QPromise = new QPromiseApi();
PromiseFactory_1.PromiseFactory.switchPromise(new QPromiseApi());
function setPromise() { }
exports.setPromise = setPromise; //just to keep the require statement in file, typescript strips them if not used.
