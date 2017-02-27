"use strict";
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var SortDirection_1 = require("../Enumerations/SortDirection");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var OrderByCollection = (function () {
    function OrderByCollection() {
        this.___implementsInterface = ["IEnumerable", "IEnumerable<PropertyDefinitionSortDirectionPair>", "IJsonSerializable"];
        //Item: PropertyDefinitionSortDirectionPair;/*System.Collections.Generic.KeyValuePair<PropertyDefinitionBase, SortDirection>*/
        this.propDefSortOrderPairList = []; /*System.Collections.Generic.List<T>*/
    }
    Object.defineProperty(OrderByCollection.prototype, "Count", {
        get: function () { return this.propDefSortOrderPairList.length; },
        enumerable: true,
        configurable: true
    });
    OrderByCollection.prototype.__thisIndexer = function (index) {
        return this.propDefSortOrderPairList[index];
    };
    OrderByCollection.prototype.Add = function (propertyDefinition, sortDirection) {
        if (this.Contains(propertyDefinition)) {
            throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyAlreadyExistsInOrderByCollection, propertyDefinition.GetPrintableName()));
        }
        this.propDefSortOrderPairList.push({ key: propertyDefinition, value: sortDirection }); //new PropertyDefinitionSortDirectionPair() not seamless in javascript
    };
    OrderByCollection.prototype.Clear = function () {
        this.propDefSortOrderPairList.splice(0);
    };
    OrderByCollection.prototype.Contains = function (propertyDefinition) {
        this.propDefSortOrderPairList.forEach(function (pair, index) {
            debugger; // check if equality works or need to use any property
            if (pair.key === propertyDefinition)
                return true;
        });
        return false;
    };
    OrderByCollection.prototype.GetEnumerator = function () { throw new Error("OrderByCollection.ts - GetEnumerator : Not implemented."); };
    OrderByCollection.prototype.Remove = function (propertyDefinition) {
        var oldCount = this.Count;
        this.propDefSortOrderPairList = this.propDefSortOrderPairList.filter(function (value) { return value.key !== propertyDefinition; });
        //var count = this.propDefSortOrderPairList.RemoveAll((pair) => pair.Key.Equals(propertyDefinition));
        return oldCount > this.Count;
    };
    OrderByCollection.prototype.RemoveAt = function (index) {
        this.propDefSortOrderPairList.splice(index, 1);
    };
    OrderByCollection.prototype.TryGetValue = function (propertyDefinition, sortDirection) {
        for (var _i = 0, _a = this.propDefSortOrderPairList; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair.key == propertyDefinition) {
                sortDirection.outValue = pair.value;
                return true;
            }
        }
        sortDirection.outValue = SortDirection_1.SortDirection.Ascending; // out parameter has to be set to some value.
        return false;
    };
    OrderByCollection.prototype.WriteToXml = function (writer, xmlElementName) {
        if (this.Count > 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, xmlElementName);
            for (var _i = 0, _a = this.propDefSortOrderPairList; _i < _a.length; _i++) {
                var keyValuePair = _a[_i];
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FieldOrder);
                writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Order, keyValuePair.value);
                keyValuePair.key.WriteToXml(writer);
                writer.WriteEndElement(); // FieldOrder
            }
            writer.WriteEndElement();
        }
    };
    return OrderByCollection;
}());
exports.OrderByCollection = OrderByCollection;
