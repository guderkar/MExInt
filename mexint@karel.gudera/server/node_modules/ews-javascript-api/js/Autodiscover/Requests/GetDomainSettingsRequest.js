"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var DomainSettingName_1 = require("../../Enumerations/DomainSettingName");
var GetDomainSettingsResponseCollection_1 = require("../Responses/GetDomainSettingsResponseCollection");
var AutodiscoverRequest_1 = require("./AutodiscoverRequest");
var GetDomainSettingsRequest = (function (_super) {
    __extends(GetDomainSettingsRequest, _super);
    function GetDomainSettingsRequest(service, url) {
        _super.call(this, service, url);
    }
    GetDomainSettingsRequest.prototype.CreateServiceResponse = function () { return new GetDomainSettingsResponseCollection_1.GetDomainSettingsResponseCollection(); };
    GetDomainSettingsRequest.prototype.Execute = function () {
        var responses = this.InternalExecute();
        //GetDomainSettingsResponseCollection responses = (GetDomainSettingsResponseCollection) this.InternalExecute();
        //if (responses.ErrorCode == AutodiscoverErrorCode.NoError) {
        //    this.PostProcessResponses(responses);
        //}
        return responses;
    };
    GetDomainSettingsRequest.prototype.GetRequestXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetDomainSettingsRequestMessage; };
    GetDomainSettingsRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetDomainSettingsResponseMessage; };
    GetDomainSettingsRequest.prototype.GetWsAddressingActionName = function () { return GetDomainSettingsRequest.GetDomainSettingsActionUri; };
    GetDomainSettingsRequest.prototype.PostProcessResponses = function (responses) {
        // Note:The response collection may not include all of the requested domains if the request has been throttled.
        for (var index = 0; index < responses.Count; index++) {
            responses.__thisIndexer(index).Domain = this.Domains[index];
        }
    };
    GetDomainSettingsRequest.prototype.Validate = function () { _super.prototype.Validate.call(this); };
    GetDomainSettingsRequest.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespacePrefix, EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespace);
    };
    GetDomainSettingsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Request);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Domains);
        for (var _i = 0, _a = this.Domains; _i < _a.length; _i++) {
            var domain = _a[_i];
            //if (!string.IsNullOrEmpty(domain)) {
            if (domain != undefined && domain !== "") {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Domain, domain);
            }
        }
        writer.WriteEndElement(); //Domains
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.RequestedSettings);
        for (var _b = 0, _c = this.Settings; _b < _c.length; _b++) {
            var setting = _c[_b];
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Setting, DomainSettingName_1.DomainSettingName[setting]);
        }
        writer.WriteEndElement(); //RequestedSettings
        if (this.requestedVersion) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.RequestedVersion, this.requestedVersion);
        }
        writer.WriteEndElement(); //Request
    };
    GetDomainSettingsRequest.GetDomainSettingsActionUri = EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespace + "/Autodiscover/GetDomainSettings";
    return GetDomainSettingsRequest;
}(AutodiscoverRequest_1.AutodiscoverRequest));
exports.GetDomainSettingsRequest = GetDomainSettingsRequest;
