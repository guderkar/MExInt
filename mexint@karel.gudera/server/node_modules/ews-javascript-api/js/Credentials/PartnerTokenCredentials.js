"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WSSecurityBasedCredentials_1 = require("./WSSecurityBasedCredentials");
var PartnerTokenCredentials = (function (_super) {
    __extends(PartnerTokenCredentials, _super);
    function PartnerTokenCredentials() {
        _super.apply(this, arguments);
    }
    PartnerTokenCredentials.prototype.AdjustUrl = function (url) { throw new Error("PartnerTokenCredentials.ts - AdjustUrl : Not implemented."); };
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("PartnerTokenCredentials.ts - PrepareWebRequest : Not implemented.");}
    PartnerTokenCredentials.prototype.Sign = function (memoryStream) { throw new Error("PartnerTokenCredentials.ts - Sign : Not implemented."); };
    PartnerTokenCredentials.WsSecuritySymmetricKeyPathSuffix = "/wssecurity/symmetrickey";
    return PartnerTokenCredentials;
}(WSSecurityBasedCredentials_1.WSSecurityBasedCredentials));
exports.PartnerTokenCredentials = PartnerTokenCredentials;
