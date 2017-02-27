"use strict";
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var NameResolution_1 = require("./NameResolution");
var EwsLogging_1 = require("../Core/EwsLogging");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var Strings_1 = require("../Strings");
var ExtensionMethods_1 = require("../ExtensionMethods");
var NameResolutionCollection = (function () {
    function NameResolutionCollection(service) {
        this.service = null;
        this.includesAllResolutions = false;
        this.items = [];
        EwsLogging_1.EwsLogging.Assert(service !== null, "NameResolutionSet.ctor", "service is null.");
        this.service = service;
    }
    Object.defineProperty(NameResolutionCollection.prototype, "Items", {
        get: function () { return this.items; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NameResolutionCollection.prototype, "Session", {
        get: function () {
            return this.service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NameResolutionCollection.prototype, "Count", {
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NameResolutionCollection.prototype, "IncludesAllResolutions", {
        get: function () {
            return this.includesAllResolutions;
        },
        enumerable: true,
        configurable: true
    });
    NameResolutionCollection.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    };
    NameResolutionCollection.prototype.GetEnumerator = function () { throw new Error("NameResolutionCollection.ts - GetEnumerator : Not implemented."); };
    NameResolutionCollection.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("NameResolutionCollection.ts - LoadFromJson : Not implemented."); };
    NameResolutionCollection.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        var totalItemsInView;
        var resolutions;
        for (var key in jsonProperty) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.TotalItemsInView:
                    totalItemsInView = ExtensionMethods_1.Convert.toNumber(jsonProperty[key]);
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.IncludesLastItemInRange:
                    this.includesAllResolutions = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                // This label only exists for Json objects.  The XML doesn't have a "Resolutions"
                // element.  
                // This was necessary becaue of the lack of attributes in JSON
                //
                case XmlElementNames_1.XmlElementNames.Resolution:
                    resolutions = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonProperty, key);
                    for (var _i = 0, resolutions_1 = resolutions; _i < resolutions_1.length; _i++) {
                        var resolution = resolutions_1[_i];
                        var nameResolution = new NameResolution_1.NameResolution(this);
                        nameResolution.LoadFromXmlJsObject(resolution, service);
                        this.items.push(nameResolution);
                    }
                    break;
                default:
                    break;
            }
        }
    };
    return NameResolutionCollection;
}());
exports.NameResolutionCollection = NameResolutionCollection;
