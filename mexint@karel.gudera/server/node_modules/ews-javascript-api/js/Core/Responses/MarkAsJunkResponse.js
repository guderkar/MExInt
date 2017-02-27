"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemId_1 = require("../../ComplexProperties/ItemId");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var MarkAsJunkResponse = (function (_super) {
    __extends(MarkAsJunkResponse, _super);
    function MarkAsJunkResponse() {
        _super.call(this);
        this.MovedItemId = null;
    }
    //ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("MarkAsJunkResponse.ts - ReadElementsFromJson : Not implemented."); }
    MarkAsJunkResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Token]) {
            this.MovedItemId = new ItemId_1.ItemId();
            this.MovedItemId.LoadFromXmlJsObject(responseObject[XmlElementNames_1.XmlElementNames.MovedItemId], service);
        }
    };
    return MarkAsJunkResponse;
}(ServiceResponse_1.ServiceResponse));
exports.MarkAsJunkResponse = MarkAsJunkResponse;
