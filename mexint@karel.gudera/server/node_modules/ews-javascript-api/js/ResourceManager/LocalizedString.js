"use strict";
var LocalizedString = (function () {
    function LocalizedString() {
    }
    LocalizedString.prototype.Equals = function (obj) { throw new Error("LocalizedString.ts - Equals : Not implemented."); };
    //Equals(obj: LocalizedString): boolean{ throw new Error("LocalizedString.ts - Equals : Not implemented.");}
    LocalizedString.prototype.GetHashCode = function () { throw new Error("LocalizedString.ts - GetHashCode : Not implemented."); };
    LocalizedString.prototype.Join = function (separator, value) { throw new Error("LocalizedString.ts - Join : Not implemented."); };
    LocalizedString.prototype.ToString = function () { throw new Error("LocalizedString.ts - ToString : Not implemented."); };
    //ToString(formatProvider: System.IFormatProvider): string{ throw new Error("LocalizedString.ts - ToString : Not implemented.");}
    LocalizedString.prototype.TranslateObject = function (badObject, formatProvider /*System.IFormatProvider */) { throw new Error("LocalizedString.ts - TranslateObject : Not implemented."); };
    return LocalizedString;
}());
exports.LocalizedString = LocalizedString;
