"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var geolib_1 = require("geolib");
var coord1 = { latitude: 40, longitude: 71.0 };
var coord2 = { latitude: 41.2, longitude: 62.7 };
var coordinates = { coordinates: [coord1, coord2] };
var distance = (0, geolib_1.getDistance)(coord1, coord2, 1);
console.log("The distance between the coordinates ".concat(coord1, " and ").concat(coord2, " is ").concat(distance));
var center = (0, geolib_1.getCenter)(coordinates.coordinates);
if (center)
    console.log("The centroid of both coordinates as a whole is (".concat(center.latitude, ", ").concat(center.longitude, ")"));
