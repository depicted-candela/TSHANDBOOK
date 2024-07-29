import { getDistance, getCenter } from 'geolib';

interface Coordinate {
    latitude: number;
    longitude: number;
}

interface Coordinates {
    coordinates: Coordinate[];
}

const coord1: Coordinate = {latitude: 40, longitude: 71.0};
const coord2: Coordinate = {latitude: 41.2, longitude: 62.7};
const coordinates: Coordinates = {coordinates: [coord1, coord2]};

const distance : number = getDistance(coord1, coord2, 1);

console.log(`The distance between the coordinates ${coord1} and ${coord2} is ${distance}`);

const center : Coordinate | boolean = getCenter(coordinates.coordinates);

if (center) console.log(`The centroid of both coordinates as a whole is (${center.latitude}, ${center.longitude})`);