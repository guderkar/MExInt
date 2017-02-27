"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WSSecurityBasedCredentials_1 = require("./WSSecurityBasedCredentials");
var WindowsLiveCredentials = (function (_super) {
    __extends(WindowsLiveCredentials, _super);
    function WindowsLiveCredentials() {
        _super.apply(this, arguments);
    }
    WindowsLiveCredentials.prototype.EmitTokenRequest = function (uriForTokenEndpointReference) { throw new Error("WindowsLiveCredentials.ts - EmitTokenRequest : Not implemented."); };
    WindowsLiveCredentials.prototype.MakeTokenRequestToWindowsLive = function (uriForTokenEndpointReference) { throw new Error("WindowsLiveCredentials.ts - MakeTokenRequestToWindowsLive : Not implemented."); };
    WindowsLiveCredentials.prototype.ParseWindowsLiveRSTResponseBody = function (rstResponse) { throw new Error("WindowsLiveCredentials.ts - ParseWindowsLiveRSTResponseBody : Not implemented."); };
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("WindowsLiveCredentials.ts - PrepareWebRequest : Not implemented.");}
    WindowsLiveCredentials.prototype.ProcessTokenResponse = function (response) { throw new Error("WindowsLiveCredentials.ts - ProcessTokenResponse : Not implemented."); };
    WindowsLiveCredentials.prototype.ReadWindowsLiveRSTResponseHeaders = function (rstResponse) { throw new Error("WindowsLiveCredentials.ts - ReadWindowsLiveRSTResponseHeaders : Not implemented."); };
    WindowsLiveCredentials.prototype.TraceResponse = function (response, memoryStream) { throw new Error("WindowsLiveCredentials.ts - TraceResponse : Not implemented."); };
    WindowsLiveCredentials.prototype.TraceWebException = function (e) { throw new Error("WindowsLiveCredentials.ts - TraceWebException : Not implemented."); };
    WindowsLiveCredentials.XmlEncNamespace = "http://www.w3.org/2001/04/xmlenc#";
    WindowsLiveCredentials.WindowsLiveSoapNamespacePrefix = "S";
    WindowsLiveCredentials.RequestSecurityTokenResponseCollectionElementName = "RequestSecurityTokenResponseCollection";
    WindowsLiveCredentials.RequestSecurityTokenResponseElementName = "RequestSecurityTokenResponse";
    WindowsLiveCredentials.EncryptedDataElementName = "EncryptedData";
    WindowsLiveCredentials.PpElementName = "pp";
    WindowsLiveCredentials.ReqstatusElementName = "reqstatus";
    WindowsLiveCredentials.SuccessfulReqstatus = "0x0";
    WindowsLiveCredentials.XmlSignatureReference = "_EWSTKREF";
    return WindowsLiveCredentials;
}(WSSecurityBasedCredentials_1.WSSecurityBasedCredentials));
exports.WindowsLiveCredentials = WindowsLiveCredentials;
