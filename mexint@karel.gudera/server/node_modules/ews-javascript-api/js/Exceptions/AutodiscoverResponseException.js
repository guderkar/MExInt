"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceRemoteException_1 = require("./ServiceRemoteException");
var AutodiscoverResponseException = (function (_super) {
    __extends(AutodiscoverResponseException, _super);
    function AutodiscoverResponseException() {
        _super.apply(this, arguments);
    }
    return AutodiscoverResponseException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.AutodiscoverResponseException = AutodiscoverResponseException;
