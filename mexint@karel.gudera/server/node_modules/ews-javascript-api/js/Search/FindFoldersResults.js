"use strict";
/**
 * Represents the results of a folder search operation.
 */
var FindFoldersResults = (function () {
    /**
     * @internal Initializes a new instance of the **FindFoldersResults** class.
     *
     */
    function FindFoldersResults() {
        this.totalCount = 0;
        this.nextPageOffset = null;
        this.moreAvailable = false;
        this.folders = []; //System.Collections.ObjectModel.Collection<Folder>;
    }
    Object.defineProperty(FindFoldersResults.prototype, "TotalCount", {
        /**
         * Gets the total number of folders matching the search criteria available in the searched folder.
         */
        get: function () {
            return this.totalCount;
        },
        set: function (value) {
            this.totalCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindFoldersResults.prototype, "NextPageOffset", {
        /**
         * Gets the offset that should be used with FolderView to retrieve the next page of folders in a FindFolders operation.
         */
        get: function () {
            return this.nextPageOffset;
        },
        set: function (value) {
            this.nextPageOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindFoldersResults.prototype, "MoreAvailable", {
        /**
         * Gets a value indicating whether more folders matching the search criteria.
         */
        get: function () {
            return this.moreAvailable;
        },
        set: function (value) {
            this.moreAvailable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindFoldersResults.prototype, "Folders", {
        /**
         * Gets a collection containing the folders that were found by the search operation.
         */
        get: function () {
            return this.folders;
        },
        enumerable: true,
        configurable: true
    });
    return FindFoldersResults;
}());
exports.FindFoldersResults = FindFoldersResults;
