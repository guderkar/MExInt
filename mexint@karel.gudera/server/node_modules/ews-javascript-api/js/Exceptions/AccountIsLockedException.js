"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceRemoteException_1 = require("./ServiceRemoteException");
/**
 * Represents an error that occurs when the account that is being accessed is locked and requires user interaction to be unlocked.
 */
var AccountIsLockedException = (function (_super) {
    __extends(AccountIsLockedException, _super);
    /**
     * Initializes a new instance of the  class.
     *
     * @param   {string}        message            Error message text.
     * @param   {Uri}           accountUnlockUrl   URL for client to visit to unlock account.
     * @param   {Exception}     innerException     Inner exception.
     */
    function AccountIsLockedException(message, accountUnlockUrl, innerException) {
        _super.call(this, message, innerException);
        /**
         * Gets the URL of a web page where the user can navigate to unlock his or her account.
         *
         * internal set
         */
        this.AccountUnlockUrl = null;
        this.AccountUnlockUrl = accountUnlockUrl;
    }
    return AccountIsLockedException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.AccountIsLockedException = AccountIsLockedException;
