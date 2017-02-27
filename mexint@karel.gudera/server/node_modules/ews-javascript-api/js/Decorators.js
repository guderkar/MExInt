"use strict";
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
function hidden() {
    return enumerable(false);
}
exports.hidden = hidden;
function hideService(constructor) {
    var newConstructor = function () {
        constructor.apply(this);
    };
    Object.defineProperty(newConstructor, "service", {
        enumerable: false
    });
    newConstructor.prototype = Object.create(constructor.prototype);
    newConstructor.prototype.constructor = constructor;
    return newConstructor;
}
exports.hideService = hideService;
