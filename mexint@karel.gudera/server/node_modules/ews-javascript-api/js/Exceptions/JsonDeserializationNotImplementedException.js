"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceLocalException_1 = require("./ServiceLocalException");
var JsonDeserializationNotImplementedException = (function (_super) {
    __extends(JsonDeserializationNotImplementedException, _super);
    function JsonDeserializationNotImplementedException() {
        _super.apply(this, arguments);
    }
    return JsonDeserializationNotImplementedException;
}(ServiceLocalException_1.ServiceLocalException));
exports.JsonDeserializationNotImplementedException = JsonDeserializationNotImplementedException;
