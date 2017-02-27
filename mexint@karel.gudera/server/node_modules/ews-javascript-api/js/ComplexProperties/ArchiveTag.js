"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var RetentionTagBase_1 = require("./RetentionTagBase");
/**
 * Represents the archive tag of an item or folder.
 */
var ArchiveTag = (function (_super) {
    __extends(ArchiveTag, _super);
    function ArchiveTag(isExplicit, retentionId) {
        if (isExplicit === void 0) { isExplicit = false; }
        if (retentionId === void 0) { retentionId = null; }
        _super.call(this, XmlElementNames_1.XmlElementNames.ArchiveTag);
        this.IsExplicit = isExplicit;
        this.RetentionId = retentionId;
    }
    return ArchiveTag;
}(RetentionTagBase_1.RetentionTagBase));
exports.ArchiveTag = ArchiveTag;
