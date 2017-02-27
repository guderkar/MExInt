"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var CreateItemResponseBase_1 = require("./CreateItemResponseBase");
var CreateItemResponse = (function (_super) {
    __extends(CreateItemResponse, _super);
    function CreateItemResponse(item) {
        _super.call(this);
        this.item = null;
        this.item = item;
    }
    CreateItemResponse.prototype.GetObjectInstance = function (service, xmlElementName) { return this.item; };
    CreateItemResponse.prototype.Loaded = function () {
        if (this.Result == ServiceResult_1.ServiceResult.Success) {
            this.item.ClearChangeLog();
        }
    };
    return CreateItemResponse;
}(CreateItemResponseBase_1.CreateItemResponseBase));
exports.CreateItemResponse = CreateItemResponse;
