"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalendarActionResults_1 = require("../../../Misc/CalendarActionResults");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var MessageDisposition_1 = require("../../../Enumerations/MessageDisposition");
var ResponseObject_1 = require("./ResponseObject");
/**
 * Represents the base class for all calendar-related response messages.
 *
 * @typeparam   {TMessage}     The type of message that is created when this response message is saved.
 */
var CalendarResponseMessageBase = (function (_super) {
    __extends(CalendarResponseMessageBase, _super);
    /**
    * @internal Initializes a new instance of the **CalendarResponseMessageBase** class.
    *
    * @param   {Item}   referenceItem   The reference item.
    */
    function CalendarResponseMessageBase(referenceItem) {
        _super.call(this, referenceItem);
    }
    CalendarResponseMessageBase.prototype.Save = function (destinationFolderIdOrName) {
        var destinationFolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId_1.FolderId(destinationFolderIdOrName);
            }
            else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalCreate(destinationFolderId, MessageDisposition_1.MessageDisposition.SaveOnly).then(function (results) {
            return new CalendarActionResults_1.CalendarActionResults(results);
        });
    };
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    CalendarResponseMessageBase.prototype.Send = function () {
        return this.InternalCreate(null, MessageDisposition_1.MessageDisposition.SendOnly).then(function (results) {
            return new CalendarActionResults_1.CalendarActionResults(results);
        });
    };
    CalendarResponseMessageBase.prototype.SendAndSaveCopy = function (destinationFolderIdOrName) {
        var destinationFolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId_1.FolderId(destinationFolderIdOrName);
            }
            else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalCreate(destinationFolderId, MessageDisposition_1.MessageDisposition.SendAndSaveCopy).then(function (results) {
            return new CalendarActionResults_1.CalendarActionResults(results);
        });
    };
    return CalendarResponseMessageBase;
}(ResponseObject_1.ResponseObject));
exports.CalendarResponseMessageBase = CalendarResponseMessageBase;
