"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var UninstallAppResponse_1 = require("../Responses/UninstallAppResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal  Represents a UninstallApp request.
 *
 * @sealed
 */
var UninstallAppRequest = (function (_super) {
    __extends(UninstallAppRequest, _super);
    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {ExchangeService}   service   The service.
     * @param   {string}   			id        Extension ID
     */
    function UninstallAppRequest(service, id) {
        _super.call(this, service);
        /**
         * Extension ID
         */
        this.ID = null;
        this.ID = id;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {IPromise<UninstallAppResponse>}      Service response  :Promise.
     */
    UninstallAppRequest.prototype.Execute = function () {
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
    UninstallAppRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    UninstallAppRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UninstallAppResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    UninstallAppRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UninstallAppRequest;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    UninstallAppRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new UninstallAppResponse_1.UninstallAppResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UninstallAppRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ID, this.ID);
    };
    return UninstallAppRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.UninstallAppRequest = UninstallAppRequest;
