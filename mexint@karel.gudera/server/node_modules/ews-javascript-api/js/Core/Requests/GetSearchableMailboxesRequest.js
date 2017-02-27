"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetSearchableMailboxesResponse_1 = require("../Responses/GetSearchableMailboxesResponse");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetSearchableMailboxesRequest request.
 */
var GetSearchableMailboxesRequest = (function (_super) {
    __extends(GetSearchableMailboxesRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetSearchableMailboxesRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetSearchableMailboxesRequest(service) {
        _super.call(this, service);
        /**
         * Search filter
         */
        this.SearchFilter = null;
        /**
         * Expand group membership
         */
        this.ExpandGroupMembership = false;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {IPromise<GetDiscoverySearchConfigurationResponse>}      Service response  :Promise.
     */
    GetSearchableMailboxesRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetSearchableMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetSearchableMailboxesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetSearchableMailboxesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetSearchableMailboxesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetSearchableMailboxes;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetSearchableMailboxesRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetSearchableMailboxesResponse_1.GetSearchableMailboxesResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetSearchableMailboxesRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SearchFilter, this.SearchFilter || ExtensionMethods_1.StringHelper.Empty);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ExpandGroupMembership, this.ExpandGroupMembership);
    };
    return GetSearchableMailboxesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetSearchableMailboxesRequest = GetSearchableMailboxesRequest;
