"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../XmlElementNames");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var Suggestion_1 = require("../../ComplexProperties/Availability/Suggestion");
var ServiceResponse_1 = require("./ServiceResponse");
var SuggestionsResponse = (function (_super) {
    __extends(SuggestionsResponse, _super);
    function SuggestionsResponse() {
        _super.apply(this, arguments);
        this.daySuggestions = []; //System.Collections.ObjectModel.Collection<Suggestion>;
    }
    Object.defineProperty(SuggestionsResponse.prototype, "Suggestions", {
        get: function () { return this.daySuggestions; } //System.Collections.ObjectModel.Collection<Suggestion>;
        ,
        enumerable: true,
        configurable: true
    });
    SuggestionsResponse.prototype.LoadSuggestedDaysFromXml = function (jsonProperty, service) {
        var SuggestionArrayObj = jsonProperty[XmlElementNames_1.XmlElementNames.SuggestionDayResultArray];
        if (typeof SuggestionArrayObj === 'undefined')
            throw new Error("SuggestionsResponse.ts - LoadSuggestedDaysFromXml - invalid object returned ");
        var suggestions = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(SuggestionArrayObj, XmlElementNames_1.XmlElementNames.SuggestionDayResult);
        for (var _i = 0, suggestions_1 = suggestions; _i < suggestions_1.length; _i++) {
            var suggestion = suggestions_1[_i];
            var daySuggestion = new Suggestion_1.Suggestion();
            daySuggestion.LoadFromXmlJsObject(suggestion, service);
            this.daySuggestions.push(daySuggestion);
        }
    };
    return SuggestionsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SuggestionsResponse = SuggestionsResponse;
