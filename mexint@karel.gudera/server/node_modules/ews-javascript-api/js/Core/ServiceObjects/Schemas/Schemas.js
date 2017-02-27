"use strict";
/**
 * Schemas - container for all schema objects
 */
var Schemas = (function () {
    function Schemas() {
    }
    Schemas.throwError = function () {
        throw "Bootstrapcode not initiated this Schema";
    };
    return Schemas;
}());
exports.Schemas = Schemas;
