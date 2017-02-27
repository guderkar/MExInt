"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetUserRetentionPolicyTagsResponse_1 = require("../Responses/GetUserRetentionPolicyTagsResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetUserRetentionPolicyTagsRequest request.
 *
 * @sealed
 */
var GetUserRetentionPolicyTagsRequest = (function (_super) {
    __extends(GetUserRetentionPolicyTagsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetUserRetentionPolicyTagsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetUserRetentionPolicyTagsRequest(service) {
        _super.call(this, service);
    }
    /**
     * @internal Executes this request.
     *
     * @return  {IPromise<GetUserRetentionPolicyTagsResponse>}      Service response  :Promise.
     */
    GetUserRetentionPolicyTagsRequest.prototype.Execute = function () {
        return this.InternalExecute();
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetUserRetentionPolicyTagsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetUserRetentionPolicyTagsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserRetentionPolicyTagsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetUserRetentionPolicyTagsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserRetentionPolicyTags;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetUserRetentionPolicyTagsRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetUserRetentionPolicyTagsResponse_1.GetUserRetentionPolicyTagsResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetUserRetentionPolicyTagsRequest.prototype.WriteElementsToXml = function (writer) {
        // Don't have parameter in request.
    };
    return GetUserRetentionPolicyTagsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetUserRetentionPolicyTagsRequest = GetUserRetentionPolicyTagsRequest;
