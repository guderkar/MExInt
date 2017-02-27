"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Exception_1 = require("./Exception");
var JsonSerializationNotImplementedException = (function (_super) {
    __extends(JsonSerializationNotImplementedException, _super);
    function JsonSerializationNotImplementedException() {
        _super.apply(this, arguments);
    }
    return JsonSerializationNotImplementedException;
}(Exception_1.Exception));
exports.JsonSerializationNotImplementedException = JsonSerializationNotImplementedException;
