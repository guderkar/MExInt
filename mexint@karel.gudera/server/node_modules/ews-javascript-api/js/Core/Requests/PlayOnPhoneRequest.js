"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * ## @internal *Not Implemented*
 */
var PlayOnPhoneRequest = (function (_super) {
    __extends(PlayOnPhoneRequest, _super);
    function PlayOnPhoneRequest() {
        _super.apply(this, arguments);
    }
    PlayOnPhoneRequest.prototype.Execute = function () { throw new Error("PlayOnPhoneRequest.ts - Execute : Not implemented."); };
    PlayOnPhoneRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("PlayOnPhoneRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    PlayOnPhoneRequest.prototype.GetResponseXmlElementName = function () { throw new Error("PlayOnPhoneRequest.ts - GetResponseXmlElementName : Not implemented."); };
    PlayOnPhoneRequest.prototype.GetXmlElementName = function () { throw new Error("PlayOnPhoneRequest.ts - GetXmlElementName : Not implemented."); };
    PlayOnPhoneRequest.prototype.ParseResponse = function (reader) { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); };
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); }
    PlayOnPhoneRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("PlayOnPhoneRequest.ts - WriteElementsToXml : Not implemented."); };
    return PlayOnPhoneRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.PlayOnPhoneRequest = PlayOnPhoneRequest;
