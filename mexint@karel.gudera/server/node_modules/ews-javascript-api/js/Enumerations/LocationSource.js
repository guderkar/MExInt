"use strict";
(function (LocationSource) {
    LocationSource[LocationSource["None"] = 0] = "None";
    LocationSource[LocationSource["LocationServices"] = 1] = "LocationServices";
    LocationSource[LocationSource["PhonebookServices"] = 2] = "PhonebookServices";
    LocationSource[LocationSource["Device"] = 3] = "Device";
    LocationSource[LocationSource["Contact"] = 4] = "Contact";
    LocationSource[LocationSource["Resource"] = 5] = "Resource";
})(exports.LocationSource || (exports.LocationSource = {}));
var LocationSource = exports.LocationSource;
