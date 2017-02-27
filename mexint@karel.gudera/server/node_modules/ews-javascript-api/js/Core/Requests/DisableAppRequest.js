"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DisableAppResponse_1 = require("../Responses/DisableAppResponse");
var DisableReasonType_1 = require("../../Enumerations/DisableReasonType");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a DisableApp request.
 *
 * @sealed
 */
var DisableAppRequest = (function (_super) {
    __extends(DisableAppRequest, _super);
    /**
     * @internal Initializes a new instance of the **DisableAppRequest** class.
     *
     * @param   {ExchangeService}   	service         The service.
     * @param   {string}   				id              Extension id.
     * @param   {DisableReasonType}   	disableReason   Disable reason.
     */
    function DisableAppRequest(service, id, disableReason) {
        _super.call(this, service);
        /**
         * Extension id
         */
        this.Id = null;
        /**
         * Disable reason
         */
        this.DisableReason = DisableReasonType_1.DisableReasonType.NoReason;
        this.Id = id;
        this.DisableReason = disableReason;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {IPromise<DisableAppResponse>}      Service response  :Promise.
     */
    DisableAppRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    DisableAppRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    DisableAppRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DisableAppResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    DisableAppRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DisableAppRequest;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    DisableAppRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new DisableAppResponse_1.DisableAppResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DisableAppRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ID, this.Id);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.DisableReason, DisableReasonType_1.DisableReasonType[this.DisableReason]);
    };
    return DisableAppRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.DisableAppRequest = DisableAppRequest;
