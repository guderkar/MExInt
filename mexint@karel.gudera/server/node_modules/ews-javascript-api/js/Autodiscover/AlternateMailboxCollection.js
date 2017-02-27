"use strict";
var XmlElementNames_1 = require("../Core/XmlElementNames");
var AlternateMailboxCollection = (function () {
    function AlternateMailboxCollection() {
        this.Entries = []; //System.Collections.Generic.List<AlternateMailbox>;
    }
    AlternateMailboxCollection.LoadFromXml = function (reader) { throw new Error("Not implemented. depricated use LoadFromJson"); };
    AlternateMailboxCollection.LoadFromJson = function (obj) {
        var instance = new AlternateMailboxCollection();
        var element = XmlElementNames_1.XmlElementNames.AlternateMailbox;
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];
        for (var i = 0; i < responses.length; i++) {
            instance.Entries.push(responses[i]);
        }
        return instance;
    };
    return AlternateMailboxCollection;
}());
exports.AlternateMailboxCollection = AlternateMailboxCollection;
