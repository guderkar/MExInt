"use strict";
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ProtocolConnectionCollection = (function () {
    //private connections: ProtocolConnection[];//System.Collections.Generic.List<ProtocolConnection>;
    function ProtocolConnectionCollection() {
        this.Connections = []; //System.Collections.Generic.List<ProtocolConnection>;
    }
    ProtocolConnectionCollection.LoadFromXml = function (reader) { throw new Error("Not implemented. - depricated for JS api, use LoadFromJson"); };
    ProtocolConnectionCollection.LoadFromJson = function (obj) {
        var instance = new ProtocolConnectionCollection();
        var element = XmlElementNames_1.XmlElementNames.ProtocolConnection;
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];
        for (var i = 0; i < responses.length; i++) {
            instance.Connections.push(responses[i]);
        }
        return instance;
    };
    return ProtocolConnectionCollection;
}());
exports.ProtocolConnectionCollection = ProtocolConnectionCollection;
