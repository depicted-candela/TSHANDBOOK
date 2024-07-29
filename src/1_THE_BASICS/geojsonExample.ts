type GeoJSONPoint = {
    type: string;
    geometry: {
        type: string;
        coordinates: number[];
    };
    properties: {
        name: string;
    }
}

const geojsonpoint: GeoJSONPoint = {type: "Feature",
    geometry: {type: "Point", coordinates: [1, 2]},
    properties: {name: "Our first geojson point"}
};

const printGeoJSONPoint = (geojsonpoint: GeoJSONPoint) => {
    console.log(`The coordinates are ${geojsonpoint.geometry.coordinates}`);
}

printGeoJSONPoint(geojsonpoint);