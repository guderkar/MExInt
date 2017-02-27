"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResponseException_1 = require("./ServiceResponseException");
var ServerBusyException = (function (_super) {
    __extends(ServerBusyException, _super);
    function ServerBusyException() {
        _super.apply(this, arguments);
    }
    ServerBusyException.BackOffMillisecondsKey = "BackOffMilliseconds";
    return ServerBusyException;
}(ServiceResponseException_1.ServiceResponseException));
exports.ServerBusyException = ServerBusyException;
