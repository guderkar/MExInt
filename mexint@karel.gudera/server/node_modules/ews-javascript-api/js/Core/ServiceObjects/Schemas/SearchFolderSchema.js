"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../XmlElementNames");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var SearchFolderParameters_1 = require("../../../ComplexProperties/SearchFolderParameters");
var FolderSchema_1 = require("./FolderSchema");
/**
 * Field URIs for search folders.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.SearchParameters = "folder:SearchParameters";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for search folders.
 */
var SearchFolderSchema = (function (_super) {
    __extends(SearchFolderSchema, _super);
    function SearchFolderSchema() {
        _super.apply(this, arguments);
    }
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    SearchFolderSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(SearchFolderSchema, SearchFolderSchema.SearchParameters);
    };
    /**
     * Defines the **SearchParameters** property.
     */
    SearchFolderSchema.SearchParameters = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("SearchParameters", XmlElementNames_1.XmlElementNames.SearchParameters, FieldUris.SearchParameters, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new SearchFolderParameters_1.SearchFolderParameters(); });
    /**
     * @internal Instance of **SearchFolderSchema**
     */
    SearchFolderSchema.Instance = new SearchFolderSchema();
    return SearchFolderSchema;
}(FolderSchema_1.FolderSchema));
exports.SearchFolderSchema = SearchFolderSchema;
