"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GetItemResponse_1 = require("../Responses/GetItemResponse");
var GetItemRequestBase_1 = require("./GetItemRequestBase");
/** @internal */
var GetItemRequest = (function (_super) {
    __extends(GetItemRequest, _super);
    function GetItemRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
    }
    GetItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new GetItemResponse_1.GetItemResponse(this.ItemIds[responseIndex], this.PropertySet); };
    return GetItemRequest;
}(GetItemRequestBase_1.GetItemRequestBase));
exports.GetItemRequest = GetItemRequest;
