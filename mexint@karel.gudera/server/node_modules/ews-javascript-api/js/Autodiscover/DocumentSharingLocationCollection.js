"use strict";
var XmlElementNames_1 = require("../Core/XmlElementNames");
var DocumentSharingLocationCollection = (function () {
    function DocumentSharingLocationCollection() {
        this.Entries = []; //System.Collections.Generic.List<DocumentSharingLocation>;
    }
    DocumentSharingLocationCollection.LoadFromXml = function (reader) { throw new Error("Not implemented. Depricated, use LoadFromJson"); };
    DocumentSharingLocationCollection.LoadFromJson = function (obj) {
        var instance = new DocumentSharingLocationCollection();
        var element = XmlElementNames_1.XmlElementNames.AlternateMailbox;
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];
        for (var i = 0; i < responses.length; i++) {
            instance.Entries.push(responses[i]); //skipped processing individual objects in collection against DocumentSharingLocation, fix if there is parsing error later
        }
        return instance;
    };
    return DocumentSharingLocationCollection;
}());
exports.DocumentSharingLocationCollection = DocumentSharingLocationCollection;
