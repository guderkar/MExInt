"use strict";
var AbstractItemIdWrapper = (function () {
    function AbstractItemIdWrapper() {
    }
    AbstractItemIdWrapper.prototype.GetItem = function () { return null; };
    AbstractItemIdWrapper.prototype.IternalToJson = function (service) { throw new Error("AbstractItemIdWrapper.ts - IternalToJson : Not implemented."); };
    AbstractItemIdWrapper.prototype.WriteToXml = function (writer) { };
    return AbstractItemIdWrapper;
}());
exports.AbstractItemIdWrapper = AbstractItemIdWrapper;
