"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WSSecurityBasedCredentials_1 = require("./WSSecurityBasedCredentials");
var TokenCredentials = (function (_super) {
    __extends(TokenCredentials, _super);
    function TokenCredentials() {
        _super.apply(this, arguments);
    }
    return TokenCredentials;
}(WSSecurityBasedCredentials_1.WSSecurityBasedCredentials));
exports.TokenCredentials = TokenCredentials;
