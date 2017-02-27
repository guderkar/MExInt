"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var ManagedFolderInformation = (function (_super) {
    __extends(ManagedFolderInformation, _super);
    function ManagedFolderInformation() {
        _super.apply(this, arguments);
    }
    ManagedFolderInformation.prototype.LoadFromJson = function (jsonProperty /*JsonObject*/, service) { throw new Error("ManagedFolderInformation.ts - LoadFromJson : Not implemented."); };
    ManagedFolderInformation.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ManagedFolderInformation.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return ManagedFolderInformation;
}(ComplexProperty_1.ComplexProperty));
exports.ManagedFolderInformation = ManagedFolderInformation;
//}
