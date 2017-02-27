"use strict";
var OutlookProtocol = (function () {
    function OutlookProtocol() {
    }
    OutlookProtocol.prototype.ConvertEcpFragmentToUrl = function (fragment) { throw new Error("OutlookProtocol.ts - ConvertEcpFragmentToUrl : Not implemented."); };
    OutlookProtocol.prototype.ConvertToUserSettings = function (requestedSettings, response) { throw new Error("OutlookProtocol.ts - ConvertToUserSettings : Not implemented."); };
    OutlookProtocol.prototype.LoadFromXml = function (reader) { throw new Error("OutlookProtocol.ts - LoadFromXml : Not implemented."); };
    OutlookProtocol.prototype.LoadWebClientUrlsFromXml = function (reader, webClientUrls, elementName) { throw new Error("OutlookProtocol.ts - LoadWebClientUrlsFromXml : Not implemented."); };
    OutlookProtocol.prototype.ProtocolNameToType = function (protocolName) { throw new Error("OutlookProtocol.ts - ProtocolNameToType : Not implemented."); };
    OutlookProtocol.EXPR = "EXPR";
    OutlookProtocol.EXCH = "EXCH";
    OutlookProtocol.WEB = "WEB";
    return OutlookProtocol;
}());
exports.OutlookProtocol = OutlookProtocol;
