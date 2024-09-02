"use strict";
// src/4_FUNCTIONS/exercise10.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculatesAreaOfAPolygonFromMeters;
function calculatesAreaOfAPolygonFromMeters(polygon, to) {
    if (to === void 0) { to = 'meters'; }
    var areaInSquaredMeters = calculatesAreaOfAPolygonsWithMeters(polygon);
    switch (to) {
        case 'kilometers':
            return areaInSquaredMeters / Math.pow(10, 6);
        case 'centimeters':
            return areaInSquaredMeters * Math.pow(10, 4);
        default:
            return areaInSquaredMeters;
    }
}
function calculatesAreaOfAPolygonsWithMeters(polygon) {
    if (polygon.vertices.length < 3)
        throw new Error('The shape is not a polygon, is a line or a point');
    var vertices = polygon.vertices;
    var howManyVertices = vertices.length;
    var area = vertices
        .map(function (vertex, index) {
        var nextVertex = vertices[(index + 1) % howManyVertices];
        return vertex.x * nextVertex.y - vertex.y * nextVertex.x;
    })
        .reduce(function (sum, value) { return sum + value; }, 0);
    return Math.abs(area) / 2;
}
var triangle = {
    vertices: [
        { x: 0, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 3 },
    ],
};
var area = calculatesAreaOfAPolygonFromMeters(triangle, 'meters');
console.log(area);
