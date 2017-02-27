"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetRoomListsResponse_1 = require("../Responses/GetRoomListsResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetRoomList request.
 *
 * @sealed
 */
var GetRoomListsRequest = (function (_super) {
    __extends(GetRoomListsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetRoomListsRequest** class.
     *
     * @param   {service}   service   The service.
     */
    function GetRoomListsRequest(service) {
        _super.call(this, service);
    }
    /**
     * @internal Executes this request.
     *
     * @return  {IPromise<GetRoomListsResponse>}      Service response  :Promise.
     */
    GetRoomListsRequest.prototype.Execute = function () {
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
    GetRoomListsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetRoomListsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetRoomListsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetRoomListsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetRoomListsRequest;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetRoomListsRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetRoomListsResponse_1.GetRoomListsResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetRoomListsRequest.prototype.WriteElementsToXml = function (writer) {
        // Don't have parameter in request
    };
    return GetRoomListsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetRoomListsRequest = GetRoomListsRequest;
