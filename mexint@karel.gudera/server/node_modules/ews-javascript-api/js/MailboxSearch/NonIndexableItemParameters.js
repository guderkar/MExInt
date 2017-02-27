"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Represents non indexable item parameters base class
 */
var NonIndexableItemParameters = (function () {
    function NonIndexableItemParameters() {
        /**
         * List of mailboxes (in legacy DN format)
         */
        this.Mailboxes = null;
        /**
         * Search archive only
         */
        this.SearchArchiveOnly = false;
    }
    return NonIndexableItemParameters;
}());
exports.NonIndexableItemParameters = NonIndexableItemParameters;
/**
 * Represents get non indexable item statistics parameters.
 *
 * @sealed
 */
var GetNonIndexableItemStatisticsParameters = (function (_super) {
    __extends(GetNonIndexableItemStatisticsParameters, _super);
    function GetNonIndexableItemStatisticsParameters() {
        _super.apply(this, arguments);
    }
    return GetNonIndexableItemStatisticsParameters;
}(NonIndexableItemParameters));
exports.GetNonIndexableItemStatisticsParameters = GetNonIndexableItemStatisticsParameters;
/**
 * Represents get non indexable item details parameters.
 *
 * @sealed
 */
var GetNonIndexableItemDetailsParameters = (function (_super) {
    __extends(GetNonIndexableItemDetailsParameters, _super);
    function GetNonIndexableItemDetailsParameters() {
        _super.apply(this, arguments);
        /**
         * @Nullable Page size
         */
        this.PageSize = null; //Nullable
        /**
         * Page item reference
         */
        this.PageItemReference = null;
        /**
         * @Nullable Search page direction
         */
        this.PageDirection = null; //Nullable
    }
    return GetNonIndexableItemDetailsParameters;
}(NonIndexableItemParameters));
exports.GetNonIndexableItemDetailsParameters = GetNonIndexableItemDetailsParameters;
