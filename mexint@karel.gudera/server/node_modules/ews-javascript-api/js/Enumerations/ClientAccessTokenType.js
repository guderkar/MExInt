"use strict";
(function (ClientAccessTokenType) {
    ClientAccessTokenType[ClientAccessTokenType["CallerIdentity"] = 0] = "CallerIdentity";
    ClientAccessTokenType[ClientAccessTokenType["ExtensionCallback"] = 1] = "ExtensionCallback";
    ClientAccessTokenType[ClientAccessTokenType["ScopedToken"] = 2] = "ScopedToken";
})(exports.ClientAccessTokenType || (exports.ClientAccessTokenType = {}));
var ClientAccessTokenType = exports.ClientAccessTokenType;
