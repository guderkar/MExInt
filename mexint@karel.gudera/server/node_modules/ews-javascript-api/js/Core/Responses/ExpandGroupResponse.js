"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExpandGroupResults_1 = require("../../Misc/ExpandGroupResults");
var ServiceResponse_1 = require("./ServiceResponse");
var ExpandGroupResponse = (function (_super) {
    __extends(ExpandGroupResponse, _super);
    function ExpandGroupResponse() {
        _super.apply(this, arguments);
        this.members = new ExpandGroupResults_1.ExpandGroupResults();
    }
    Object.defineProperty(ExpandGroupResponse.prototype, "Members", {
        get: function () {
            return this.members;
        },
        enumerable: true,
        configurable: true
    });
    ExpandGroupResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.Members.LoadFromXmlJsObject(responseObject, service);
    };
    return ExpandGroupResponse;
}(ServiceResponse_1.ServiceResponse));
exports.ExpandGroupResponse = ExpandGroupResponse;
