"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * ## *Not Implemented*
 */
var ExecuteDiagnosticMethodResponse = (function (_super) {
    __extends(ExecuteDiagnosticMethodResponse, _super);
    function ExecuteDiagnosticMethodResponse() {
        _super.apply(this, arguments);
    }
    ExecuteDiagnosticMethodResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ExecuteDiagnosticMethodResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return ExecuteDiagnosticMethodResponse;
}(ServiceResponse_1.ServiceResponse));
exports.ExecuteDiagnosticMethodResponse = ExecuteDiagnosticMethodResponse;
