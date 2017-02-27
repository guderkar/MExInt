"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a CreateUserConfiguration request.
 *
 * @sealed
 */
var CreateUserConfigurationRequest = (function (_super) {
    __extends(CreateUserConfigurationRequest, _super);
    /**
     * @internal Initializes a new instance of the **CreateUserConfigurationRequest** class.
     *
     * @param   {ExchangeService}       service   The service.
     */
    function CreateUserConfigurationRequest(service) {
        _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        this.userConfiguration = null;
    }
    Object.defineProperty(CreateUserConfigurationRequest.prototype, "UserConfiguration", {
        /**
         * Gets or sets the user configuration.
         *
         * @value   The userConfiguration.
         */
        get: function () {
            return this.userConfiguration;
        },
        set: function (value) {
            this.userConfiguration = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {ServiceResponse}	Service response.
     */
    CreateUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new ServiceResponse_1.ServiceResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    CreateUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    CreateUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    CreateUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.CreateUserConfigurationResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    CreateUserConfigurationRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.CreateUserConfigurationResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    CreateUserConfigurationRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.CreateUserConfiguration;
    };
    /**
     * @internal Validate the request.
     */
    CreateUserConfigurationRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.userConfiguration, "userConfiguration");
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    CreateUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) {
        // Write UserConfiguation element
        this.userConfiguration.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.UserConfiguration);
    };
    return CreateUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.CreateUserConfigurationRequest = CreateUserConfigurationRequest;
