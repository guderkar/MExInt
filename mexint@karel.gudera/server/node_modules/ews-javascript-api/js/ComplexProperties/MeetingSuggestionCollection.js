"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var MeetingSuggestion_1 = require("./MeetingSuggestion");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of MeetingSuggestion objects.
 */
var MeetingSuggestionCollection = (function (_super) {
    __extends(MeetingSuggestionCollection, _super);
    function MeetingSuggestionCollection(collection) {
        var _this = this;
        if (collection === void 0) { collection = null; }
        _super.call(this);
        if (collection != null) {
            collection.forEach(function (suggestion) { _this.InternalAdd(suggestion); });
        }
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {MeetingSuggestion}     MeetingSuggestion.
     */
    MeetingSuggestionCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new MeetingSuggestion_1.MeetingSuggestion(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {MeetingSuggestion}      MeetingSuggestion.
     */
    MeetingSuggestionCollection.prototype.CreateDefaultComplexProperty = function () { return new MeetingSuggestion_1.MeetingSuggestion(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {MeetingSuggestion}     complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    MeetingSuggestionCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgMeetingSuggestion; };
    return MeetingSuggestionCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.MeetingSuggestionCollection = MeetingSuggestionCollection;
