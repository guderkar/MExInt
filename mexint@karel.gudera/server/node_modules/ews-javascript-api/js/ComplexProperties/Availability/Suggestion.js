"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SuggestionQuality_1 = require("../../Enumerations/SuggestionQuality");
var TimeSuggestion_1 = require("./TimeSuggestion");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var DateTime_1 = require("../../DateTime");
var EwsServiceJsonReader_1 = require("../../Core/EwsServiceJsonReader");
var ComplexProperty_1 = require("../ComplexProperty");
var Suggestion = (function (_super) {
    __extends(Suggestion, _super);
    function Suggestion() {
        _super.call(this);
        this.date = null;
        this.quality = SuggestionQuality_1.SuggestionQuality.Excellent;
        this.timeSuggestions = []; /*System.Collections.ObjectModel.Collection<TimeSuggestion>;*/
    }
    Object.defineProperty(Suggestion.prototype, "Date", {
        get: function () {
            return this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Suggestion.prototype, "Quality", {
        get: function () {
            return this.quality;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Suggestion.prototype, "TimeSuggestions", {
        get: function () {
            return this.timeSuggestions;
        },
        enumerable: true,
        configurable: true
    });
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("Suggestion.ts - LoadFromJson : Not implemented."); }
    Suggestion.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        this.date = DateTime_1.DateTime.Parse(jsonProperty[XmlElementNames_1.XmlElementNames.Date]);
        this.quality = SuggestionQuality_1.SuggestionQuality[jsonProperty[XmlElementNames_1.XmlElementNames.DayQuality]];
        var suggestionArrayObj = jsonProperty[XmlElementNames_1.XmlElementNames.SuggestionArray];
        var suggestions = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(suggestionArrayObj, XmlElementNames_1.XmlElementNames.Suggestion);
        for (var _i = 0, suggestions_1 = suggestions; _i < suggestions_1.length; _i++) {
            var suggestion = suggestions_1[_i];
            var timeSuggestion = new TimeSuggestion_1.TimeSuggestion();
            timeSuggestion.LoadFromXmlJsObject(suggestion, service);
            this.timeSuggestions.push(timeSuggestion);
        }
    };
    return Suggestion;
}(ComplexProperty_1.ComplexProperty));
exports.Suggestion = Suggestion;
