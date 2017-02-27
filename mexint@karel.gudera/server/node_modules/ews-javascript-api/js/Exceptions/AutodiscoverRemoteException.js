"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceRemoteException_1 = require("./ServiceRemoteException");
var AutodiscoverRemoteException = (function (_super) {
    __extends(AutodiscoverRemoteException, _super);
    function AutodiscoverRemoteException() {
        _super.apply(this, arguments);
    }
    return AutodiscoverRemoteException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.AutodiscoverRemoteException = AutodiscoverRemoteException;
