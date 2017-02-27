"use strict";
var ExtensionMethods_1 = require("./ExtensionMethods");
var uuid = require('node-uuid');
/** Guid proxy class */
var Guid = (function () {
    function Guid(str) {
        this.guid = null;
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(str) || str === null) {
            throw new TypeError("Guid.ctor - invalid input");
        }
        str = str.replace("-", "").replace("{", "").replace("}", "").toLowerCase();
        var parsed = uuid.parse(str);
        if (parsed) {
            this.guid = uuid.unparse(parsed);
        }
    }
    Guid.prototype.ToString = function () {
        return this.guid;
    };
    Guid.Parse = function (str) {
        var parsed = uuid.parse(str);
        if (parsed) {
            return new Guid(str);
        }
    };
    Guid.Empty = new Guid('00000000-0000-0000-0000-000000000000');
    return Guid;
}());
exports.Guid = Guid;
