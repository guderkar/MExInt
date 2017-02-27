"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ConflictType_1 = require("../../Enumerations/ConflictType");
var LegacyFreeBusyStatus_1 = require("../../Enumerations/LegacyFreeBusyStatus");
var ComplexProperty_1 = require("../ComplexProperty");
var Conflict = (function (_super) {
    __extends(Conflict, _super);
    function Conflict(conflictType) {
        _super.call(this);
        this.conflictType = ConflictType_1.ConflictType.IndividualAttendeeConflict;
        this.numberOfMembers = 0;
        this.numberOfMembersAvailable = 0;
        this.numberOfMembersWithConflict = 0;
        this.numberOfMembersWithNoData = 0;
        this.freeBusyStatus = LegacyFreeBusyStatus_1.LegacyFreeBusyStatus.Free;
        this.conflictType = conflictType;
    }
    Object.defineProperty(Conflict.prototype, "ConflictType", {
        get: function () {
            return this.conflictType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conflict.prototype, "NumberOfMembers", {
        get: function () {
            return this.numberOfMembers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conflict.prototype, "NumberOfMembersAvailable", {
        get: function () {
            return this.numberOfMembersAvailable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conflict.prototype, "NumberOfMembersWithConflict", {
        get: function () {
            return this.numberOfMembersWithConflict;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conflict.prototype, "NumberOfMembersWithNoData", {
        get: function () {
            return this.numberOfMembersWithNoData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conflict.prototype, "FreeBusyStatus", {
        get: function () {
            return this.freeBusyStatus;
        },
        enumerable: true,
        configurable: true
    });
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Conflict.ts - LoadFromJson : Not implemented."); }
    Conflict.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NumberOfMembers:
                    this.numberOfMembers = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.NumberOfMembersAvailable:
                    this.numberOfMembersAvailable = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.NumberOfMembersWithConflict:
                    this.numberOfMembersWithConflict = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.NumberOfMembersWithNoData:
                    this.numberOfMembersWithNoData = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.BusyType:
                    this.freeBusyStatus = LegacyFreeBusyStatus_1.LegacyFreeBusyStatus[jsonProperty[key]];
                    break;
                default:
                    break;
            }
        }
    };
    return Conflict;
}(ComplexProperty_1.ComplexProperty));
exports.Conflict = Conflict;
