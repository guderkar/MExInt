"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceLocalException_1 = require("./ServiceLocalException");
var ServiceXmlDeserializationException = (function (_super) {
    __extends(ServiceXmlDeserializationException, _super);
    function ServiceXmlDeserializationException() {
        _super.apply(this, arguments);
    }
    return ServiceXmlDeserializationException;
}(ServiceLocalException_1.ServiceLocalException));
exports.ServiceXmlDeserializationException = ServiceXmlDeserializationException;
