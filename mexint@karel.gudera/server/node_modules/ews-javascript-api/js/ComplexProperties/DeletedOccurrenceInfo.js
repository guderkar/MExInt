"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Encapsulates information on the deleted occurrence of a recurring appointment.
 */
var DeletedOccurrenceInfo = (function (_super) {
    __extends(DeletedOccurrenceInfo, _super);
    /**
     * @internal Initializes a new instance of the **DeletedOccurrenceInfo** class.
     */
    function DeletedOccurrenceInfo() {
        _super.call(this);
        /**
         * The original start date and time of the deleted occurrence.
         *
         * @remarks The EWS schema contains a Start property for deleted occurrences but it's really the original start date and time of the occurrence.
         */
        this.originalStart = null;
    }
    Object.defineProperty(DeletedOccurrenceInfo.prototype, "OriginalStart", {
        /**
         * Gets the original start date and time of the deleted occurrence.
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
    DeletedOccurrenceInfo.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.Start]) {
            this.originalStart = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[XmlElementNames_1.XmlElementNames.Start]);
        }
    };
    return DeletedOccurrenceInfo;
}(ComplexProperty_1.ComplexProperty));
exports.DeletedOccurrenceInfo = DeletedOccurrenceInfo;
