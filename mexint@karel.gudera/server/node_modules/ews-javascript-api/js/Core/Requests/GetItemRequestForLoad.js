"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GetItemResponse_1 = require("../Responses/GetItemResponse");
var GetItemRequestBase_1 = require("./GetItemRequestBase");
/** @internal */
var GetItemRequestForLoad = (function (_super) {
    __extends(GetItemRequestForLoad, _super);
    function GetItemRequestForLoad(service, errorHandlingModeServiceErrorHandling) {
        _super.call(this, service, errorHandlingModeServiceErrorHandling);
    }
    GetItemRequestForLoad.prototype.CreateServiceResponse = function (service, responseIndex) { return new GetItemResponse_1.GetItemResponse(this.ItemIds.__thisIndexer(responseIndex), this.PropertySet); };
    return GetItemRequestForLoad;
}(GetItemRequestBase_1.GetItemRequestBase));
exports.GetItemRequestForLoad = GetItemRequestForLoad;
