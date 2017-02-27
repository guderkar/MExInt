"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmailAddress_1 = require("../../ComplexProperties/EmailAddress");
var EmailAddressCollection_1 = require("../../ComplexProperties/EmailAddressCollection");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a GetRoomLists operation.
 */
var GetRoomListsResponse = (function (_super) {
    __extends(GetRoomListsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetRoomListsResponse** class.
     */
    function GetRoomListsResponse() {
        _super.call(this);
        this.roomLists = new EmailAddressCollection_1.EmailAddressCollection();
    }
    Object.defineProperty(GetRoomListsResponse.prototype, "RoomLists", {
        /**
         * Gets all room list returned
         */
        get: function () {
            return this.roomLists;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetRoomListsResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.roomLists.Clear();
        var responses = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames_1.XmlElementNames.RoomLists], XmlElementNames_1.XmlElementNames.Address);
        for (var _i = 0, responses_1 = responses; _i < responses_1.length; _i++) {
            var response = responses_1[_i];
            var emailAddress = new EmailAddress_1.EmailAddress();
            emailAddress.LoadFromXmlJsObject(response, service);
            this.roomLists.Add(emailAddress);
        }
    };
    return GetRoomListsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetRoomListsResponse = GetRoomListsResponse;
