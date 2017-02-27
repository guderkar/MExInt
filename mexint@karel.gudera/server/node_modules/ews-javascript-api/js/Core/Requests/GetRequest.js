"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var GetRequest = (function (_super) {
    __extends(GetRequest, _super);
    //private propertySet: PropertySet;
    function GetRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
    }
    //abstract - AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("GetRequest.ts - abstract - AddIdsToRequest : Not implemented."); }
    //IJsonSerializable.ToJson(ExchangeService service): any {
    //    JsonObject jsonRequest = new JsonObject();
    //    this.propertySet.WriteGetShapeToJson(jsonRequest, service, this.GetServiceObjectType());
    //    this.AddIdsToRequest(jsonRequest, service);
    //    return jsonRequest;
    //}
    GetRequest.prototype.GetServiceObjectType = function () { throw new Error("Abstract; must implemented."); };
    GetRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
        this.PropertySet.ValidateForRequest(this, false /*summaryPropertiesOnly*/);
    };
    GetRequest.prototype.WriteElementsToXml = function (writer) { this.PropertySet.WriteToXml(writer, this.GetServiceObjectType()); };
    return GetRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetRequest = GetRequest;
