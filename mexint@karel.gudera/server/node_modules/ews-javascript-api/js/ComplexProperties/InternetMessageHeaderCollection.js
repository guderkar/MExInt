"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var InternetMessageHeader_1 = require("./InternetMessageHeader");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of Internet message headers.
 */
var InternetMessageHeaderCollection = (function (_super) {
    __extends(InternetMessageHeaderCollection, _super);
    /**
     * @internal Initializes a new instance of the **InternetMessageHeaderCollection** class.
     */
    function InternetMessageHeaderCollection() {
        _super.call(this);
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {InternetMessageHeader}     InternetMessageHeader instance.
     */
    InternetMessageHeaderCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new InternetMessageHeader_1.InternetMessageHeader(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {InternetMessageHeader}      InternetMessageHeader instance.
     */
    InternetMessageHeaderCollection.prototype.CreateDefaultComplexProperty = function () { return new InternetMessageHeader_1.InternetMessageHeader(); };
    /**
     * Find a specific header in the collection.
     *
     * @param   {string}   name   The name of the header to locate.
     * @return  {InternetMessageHeader}     An InternetMessageHeader representing the header with the specified name; null if no header with the specified name was found.
     */
    InternetMessageHeaderCollection.prototype.Find = function (name) {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var internetMessageHeader = _a[_i];
            if (name.toUpperCase() === internetMessageHeader.Name.toUpperCase()) {
                return internetMessageHeader;
            }
        }
        return null;
    };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {InternetMessageHeader}     complexProperty   The complex property.
     * @return  {string}                    XML element name.
     */
    InternetMessageHeaderCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.InternetMessageHeader; };
    return InternetMessageHeaderCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.InternetMessageHeaderCollection = InternetMessageHeaderCollection;
