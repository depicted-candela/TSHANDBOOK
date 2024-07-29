var geojsonpoint = { type: "Feature",
    geometry: { type: "Point", coordinates: [1, 2] },
    properties: { name: "Our first geojson point" }
};
var printGeoJSONPoint = function (geojsonpoint) {
    console.log("The coordinates are ".concat(geojsonpoint.geometry.coordinates));
};
printGeoJSONPoint(geojsonpoint);
