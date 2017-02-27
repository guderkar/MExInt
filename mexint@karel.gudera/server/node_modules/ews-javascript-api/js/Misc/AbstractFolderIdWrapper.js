"use strict";
var AbstractFolderIdWrapper = (function () {
    function AbstractFolderIdWrapper() {
    }
    AbstractFolderIdWrapper.prototype.GetFolder = function () { return null; };
    //InternalToJson(service: ExchangeService): void { throw new Error("AbstractFolderIdWrapper.ts - InternalToJson : Not implemented."); }
    //object IJsonSerializable.ToJson(ExchangeService service)
    //{
    //      return this.InternalToJson(service);
    //}
    AbstractFolderIdWrapper.prototype.Validate = function (version) { };
    AbstractFolderIdWrapper.prototype.WriteToXml = function (writer) { throw new Error("AbstractFolderIdWrapper.ts - WriteToXml - abstract; must implemented."); };
    return AbstractFolderIdWrapper;
}());
exports.AbstractFolderIdWrapper = AbstractFolderIdWrapper;
