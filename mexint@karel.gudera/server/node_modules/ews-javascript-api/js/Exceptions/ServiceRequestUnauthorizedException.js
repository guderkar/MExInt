"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceRequestException_1 = require("./ServiceRequestException");
var ServiceRequestUnauthorizedException = (function (_super) {
    __extends(ServiceRequestUnauthorizedException, _super);
    function ServiceRequestUnauthorizedException() {
        _super.apply(this, arguments);
    }
    return ServiceRequestUnauthorizedException;
}(ServiceRequestException_1.ServiceRequestException));
exports.ServiceRequestUnauthorizedException = ServiceRequestUnauthorizedException;
