"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var ApprovalRequestData = (function (_super) {
    __extends(ApprovalRequestData, _super);
    function ApprovalRequestData() {
        _super.apply(this, arguments);
    }
    ApprovalRequestData.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("ApprovalRequestData.ts - LoadFromJson : Not implemented."); };
    ApprovalRequestData.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ApprovalRequestData.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return ApprovalRequestData;
}(ComplexProperty_1.ComplexProperty));
exports.ApprovalRequestData = ApprovalRequestData;
