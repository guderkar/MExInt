"use strict";
require('reflect-metadata');
exports.AttachableAttributeMetadata = "AttachableAttribute";
function AttachableAttribute(value) {
    if (value === void 0) { value = false; }
    return function (target) {
        Reflect.defineMetadata("AttachableAttribute", value, target.prototype);
    };
}
exports.AttachableAttribute = AttachableAttribute;
