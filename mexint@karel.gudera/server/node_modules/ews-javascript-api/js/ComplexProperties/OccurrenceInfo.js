"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemId_1 = require("./ItemId");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Encapsulates information on the occurrence of a recurring appointment.
 */
var OccurrenceInfo = (function (_super) {
    __extends(OccurrenceInfo, _super);
    /**
     *  @internal Initializes a new instance of the **OccurrenceInfo** class.
     */
    function OccurrenceInfo() {
        _super.call(this);
        this.itemId = null;
        this.start = null;
        this.end = null;
        this.originalStart = null;
    }
    Object.defineProperty(OccurrenceInfo.prototype, "ItemId", {
        /**
         * Gets the Id of the occurrence.
         */
        get: function () {
            return this.itemId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OccurrenceInfo.prototype, "Start", {
        /**
         * Gets the start date and time of the occurrence.
         */
        get: function () {
            return this.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OccurrenceInfo.prototype, "End", {
        /**
         * Gets the end date and time of the occurrence.
         */
        get: function () {
            return this.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OccurrenceInfo.prototype, "OriginalStart", {
        /**
         * Gets the original start date and time of the occurrence.
         */
        get: function () {
            return this.originalStart;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    OccurrenceInfo.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.ItemId:
                    this.itemId = new ItemId_1.ItemId();
                    this.itemId.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.Start:
                    this.start = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.End:
                    this.end = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.OriginalStart:
                    this.originalStart = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    return OccurrenceInfo;
}(ComplexProperty_1.ComplexProperty));
exports.OccurrenceInfo = OccurrenceInfo;
