"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExchangeCredentials_1 = require("./ExchangeCredentials");
var WebCredentials = (function (_super) {
    __extends(WebCredentials, _super);
    function WebCredentials() {
        _super.apply(this, arguments);
    }
    WebCredentials.prototype.AdjustUrl = function (url) { throw new Error("WebCredentials.ts - AdjustUrl : Not implemented."); };
    return WebCredentials;
}(ExchangeCredentials_1.ExchangeCredentials));
exports.WebCredentials = WebCredentials;
