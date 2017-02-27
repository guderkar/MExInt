"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CreateResponseObjectResponse_1 = require("../Responses/CreateResponseObjectResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var CreateItemRequestBase_1 = require("./CreateItemRequestBase");
/** @internal */
var CreateResponseObjectRequest = (function (_super) {
    __extends(CreateResponseObjectRequest, _super);
    function CreateResponseObjectRequest(service, errorHandlingModeServiceErrorHandling) {
        _super.call(this, service, errorHandlingModeServiceErrorHandling);
    }
    CreateResponseObjectRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new CreateResponseObjectResponse_1.CreateResponseObjectResponse(); };
    CreateResponseObjectRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    return CreateResponseObjectRequest;
}(CreateItemRequestBase_1.CreateItemRequestBase));
exports.CreateResponseObjectRequest = CreateResponseObjectRequest;
