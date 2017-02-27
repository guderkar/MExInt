"use strict";
require('reflect-metadata');
function EwsEnumAttribute(schemaName) {
    return function (target) {
        Reflect.defineMetadata("EwsEnumAttribute", schemaName, target);
    };
}
exports.EwsEnumAttribute = EwsEnumAttribute;
