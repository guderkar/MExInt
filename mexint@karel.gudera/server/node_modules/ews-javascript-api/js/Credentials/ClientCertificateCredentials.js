"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExchangeCredentials_1 = require("./ExchangeCredentials");
var ClientCertificateCredentials = (function (_super) {
    __extends(ClientCertificateCredentials, _super);
    function ClientCertificateCredentials() {
        _super.apply(this, arguments);
    }
    ClientCertificateCredentials.prototype.PrepareWebRequest = function (request) { throw new Error("ClientCertificateCredentials.ts - PrepareWebRequest : Not implemented."); };
    return ClientCertificateCredentials;
}(ExchangeCredentials_1.ExchangeCredentials));
exports.ClientCertificateCredentials = ClientCertificateCredentials;
