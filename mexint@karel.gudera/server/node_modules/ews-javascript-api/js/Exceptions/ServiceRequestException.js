"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceRemoteException_1 = require("./ServiceRemoteException");
var ServiceRequestException = (function (_super) {
    __extends(ServiceRequestException, _super);
    function ServiceRequestException() {
        _super.apply(this, arguments);
    }
    return ServiceRequestException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.ServiceRequestException = ServiceRequestException;
