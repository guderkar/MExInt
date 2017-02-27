"use strict";
var Strings_1 = require("../../Strings");
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var EwsLogging_1 = require("../EwsLogging");
var ServiceResponseCollection = (function () {
    function ServiceResponseCollection() {
        this.responses = []; // System.Collections.Generic.List<T>;
        this.overallResult = ServiceResult_1.ServiceResult.Success;
    }
    Object.defineProperty(ServiceResponseCollection.prototype, "Count", {
        get: function () { return this.responses.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponseCollection.prototype, "Responses", {
        get: function () { return this.responses; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponseCollection.prototype, "OverallResult", {
        get: function () { return this.overallResult; },
        enumerable: true,
        configurable: true
    });
    ServiceResponseCollection.prototype.Add = function (response) {
        EwsLogging_1.EwsLogging.Assert(response != null, "EwsResponseList.Add", "response is null");
        if (response.Result > this.overallResult) {
            this.overallResult = response.Result;
        }
        this.responses.push(response);
    };
    ServiceResponseCollection.prototype.GetEnumerator = function () { throw new Error("ServiceResponseCollection.ts - GetEnumerator : Not implemented."); };
    ServiceResponseCollection.prototype.__thisIndexer = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.responses[index];
    };
    return ServiceResponseCollection;
}());
exports.ServiceResponseCollection = ServiceResponseCollection;
