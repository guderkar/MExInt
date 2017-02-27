"use strict";
require('reflect-metadata');
function RequiredServerVersionAttribute(version) {
    return function (target) {
        Reflect.defineMetadata("AttachableAttribute", version, target);
    };
}
exports.RequiredServerVersionAttribute = RequiredServerVersionAttribute;
