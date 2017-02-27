"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CreateItemResponse_1 = require("../Responses/CreateItemResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var CreateItemRequestBase_1 = require("./CreateItemRequestBase");
/** @internal */
var CreateItemRequest = (function (_super) {
    __extends(CreateItemRequest, _super);
    function CreateItemRequest(service, errorHandlingModeServiceErrorHandling) {
        _super.call(this, service, errorHandlingModeServiceErrorHandling);
    }
    CreateItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new CreateItemResponse_1.CreateItemResponse(this.Items[responseIndex]); };
    CreateItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    CreateItemRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        // Validate each item.
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.Validate();
        }
    };
    return CreateItemRequest;
}(CreateItemRequestBase_1.CreateItemRequestBase));
exports.CreateItemRequest = CreateItemRequest;
