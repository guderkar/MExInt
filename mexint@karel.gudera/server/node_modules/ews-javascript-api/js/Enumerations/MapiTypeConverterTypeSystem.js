"use strict";
/** shim to store type of data in MapiTypeConverterMapEntry */
(function (MapiTypeConverterTypeSystem) {
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["boolean"] = 0] = "boolean";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["string"] = 1] = "string";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["number"] = 2] = "number";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["DateTime"] = 3] = "DateTime";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["guid"] = 4] = "guid";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["byteArray"] = 5] = "byteArray";
})(exports.MapiTypeConverterTypeSystem || (exports.MapiTypeConverterTypeSystem = {}));
var MapiTypeConverterTypeSystem = exports.MapiTypeConverterTypeSystem;
