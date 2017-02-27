"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var SearchFolderParameters = (function (_super) {
    __extends(SearchFolderParameters, _super);
    function SearchFolderParameters() {
        _super.apply(this, arguments);
    }
    SearchFolderParameters.prototype.InternalToJson = function (service) { throw new Error("SearchFolderParameters.ts - InternalToJson : Not implemented."); };
    SearchFolderParameters.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("SearchFolderParameters.ts - LoadFromJson : Not implemented."); };
    SearchFolderParameters.prototype.PropertyChanged = function (complexProperty) { throw new Error("SearchFolderParameters.ts - PropertyChanged : Not implemented."); };
    SearchFolderParameters.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("SearchFolderParameters.ts - ReadAttributesFromXml : Not implemented."); };
    SearchFolderParameters.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("SearchFolderParameters.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    SearchFolderParameters.prototype.Validate = function () { throw new Error("SearchFolderParameters.ts - Validate : Not implemented."); };
    SearchFolderParameters.prototype.WriteAttributesToXml = function (writer) { throw new Error("SearchFolderParameters.ts - WriteAttributesToXml : Not implemented."); };
    SearchFolderParameters.prototype.WriteElementsToXml = function (writer) { throw new Error("SearchFolderParameters.ts - WriteElementsToXml : Not implemented."); };
    return SearchFolderParameters;
}(ComplexProperty_1.ComplexProperty));
exports.SearchFolderParameters = SearchFolderParameters;
//}
