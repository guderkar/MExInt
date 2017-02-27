"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClientAccessTokenType_1 = require("../Enumerations/ClientAccessTokenType");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a client token access request
 */
var ClientAccessTokenRequest = (function (_super) {
    __extends(ClientAccessTokenRequest, _super);
    function ClientAccessTokenRequest(id, tokenType, scope) {
        if (id === void 0) { id = null; }
        if (tokenType === void 0) { tokenType = ClientAccessTokenType_1.ClientAccessTokenType.CallerIdentity; }
        if (scope === void 0) { scope = null; }
        _super.call(this);
        this.id = id;
        this.tokenType = tokenType;
        this.scope = scope;
    }
    Object.defineProperty(ClientAccessTokenRequest.prototype, "Id", {
        /**
         * Gets the App Id.
         */
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientAccessTokenRequest.prototype, "TokenType", {
        /**
         * Gets token type.
         */
        get: function () {
            return this.tokenType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientAccessTokenRequest.prototype, "Scope", {
        /**
         * Gets the token scope.
         */
        get: function () {
            return this.scope;
        },
        enumerable: true,
        configurable: true
    });
    return ClientAccessTokenRequest;
}(ComplexProperty_1.ComplexProperty));
exports.ClientAccessTokenRequest = ClientAccessTokenRequest;
