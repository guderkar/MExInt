"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var FailedSearchMailbox_1 = require("../../MailboxSearch/FailedSearchMailbox");
var SearchableMailbox_1 = require("../../MailboxSearch/SearchableMailbox");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the GetSearchableMailboxes response.
 *
 * @sealed
 */
var GetSearchableMailboxesResponse = (function (_super) {
    __extends(GetSearchableMailboxesResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetSearchableMailboxesResponse** class.
     */
    function GetSearchableMailboxesResponse() {
        _super.call(this);
        this.searchableMailboxes = [];
        /**
         * Failed mailboxes
         */
        this.FailedMailboxes = null;
    }
    Object.defineProperty(GetSearchableMailboxesResponse.prototype, "SearchableMailboxes", {
        /**
         * Searchable mailboxes result
         */
        get: function () {
            return this.searchableMailboxes;
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
    GetSearchableMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.searchableMailboxes.splice(0);
        //super.ReadElementsFromXmlJsObject(jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.SearchableMailboxes]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.SearchableMailboxes], XmlElementNames_1.XmlElementNames.SearchableMailbox); _i < _a.length; _i++) {
                var searchableMailboxObject = _a[_i];
                this.searchableMailboxes.push(SearchableMailbox_1.SearchableMailbox.LoadFromXmlJsObject(searchableMailboxObject, service));
            }
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes]) {
            this.FailedMailboxes = FailedSearchMailbox_1.FailedSearchMailbox.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes], service);
        }
    };
    return GetSearchableMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetSearchableMailboxesResponse = GetSearchableMailboxesResponse;
