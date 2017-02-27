"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsLogging_1 = require("../Core/EwsLogging");
var ServiceRemoteException_1 = require("./ServiceRemoteException");
/**
 * Represents a remote service exception that can have multiple service responses.
 *
 * @type {TResponse}       The type of the response.
 */
var BatchServiceResponseException = (function (_super) {
    __extends(BatchServiceResponseException, _super);
    function BatchServiceResponseException(serviceResponses, message, innerException) {
        if (arguments.length == 2) {
            _super.call(this, message);
        }
        else {
            _super.call(this, message, innerException);
        }
        EwsLogging_1.EwsLogging.Assert(serviceResponses != null, "BatchServiceResponseException.ctor", "serviceResponses is null");
        this.responses = serviceResponses;
    }
    Object.defineProperty(BatchServiceResponseException.prototype, "ServiceResponses", {
        /**
         * Gets a list of responses returned by the web method.
         */
        get: function () { return this.ServiceResponses; },
        enumerable: true,
        configurable: true
    });
    return BatchServiceResponseException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.BatchServiceResponseException = BatchServiceResponseException;
