"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClientAccessTokenType_1 = require("../../Enumerations/ClientAccessTokenType");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the response to a GetClientAccessToken operation.
 *
 * @sealed
 */
var GetClientAccessTokenResponse = (function (_super) {
    __extends(GetClientAccessTokenResponse, _super);
    function GetClientAccessTokenResponse(id, tokenType) {
        if (id === void 0) { id = null; }
        if (tokenType === void 0) { tokenType = ClientAccessTokenType_1.ClientAccessTokenType.CallerIdentity; }
        _super.call(this);
        this.TokenValue = null;
        this.TTL = 0;
        this.Id = id;
        this.TokenType = tokenType;
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetClientAccessTokenResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Token]) {
            var jsObject = responseObject[XmlElementNames_1.XmlElementNames.Token];
            this.Id = jsObject[XmlElementNames_1.XmlElementNames.Id];
            this.TokenType = ClientAccessTokenType_1.ClientAccessTokenType[jsObject[XmlElementNames_1.XmlElementNames.TokenType]];
            this.TokenValue = jsObject[XmlElementNames_1.XmlElementNames.TokenValue];
            this.TTL = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.TTL]);
        }
    };
    return GetClientAccessTokenResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetClientAccessTokenResponse = GetClientAccessTokenResponse;
