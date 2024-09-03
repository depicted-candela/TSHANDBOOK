interface Point10 {
    x: number;
    y: number;
}

export interface Polygon10 {
    vertices: Point10[];
}

function calculatesAreaOfAPolygonFromMeters(
    polygon: Polygon10,
    to: 'meters' | 'kilometers' | 'centimeters' = 'meters'
) {
    const areaInSquaredMeters = calculatesAreaOfAPolygonsWithMeters(polygon);
    switch (to) {
        case 'kilometers':
            return areaInSquaredMeters / 10 ** 6;
        case 'centimeters':
            return areaInSquaredMeters * 10 ** 4;
        default:
            return areaInSquaredMeters;
    }
}

function calculatesAreaOfAPolygonsWithMeters(polygon: Polygon10) {
    if (polygon.vertices.length < 3) throw new Error('The shape is not a polygon, is a line or a point');
    const vertices = polygon.vertices;
    const howManyVertices = vertices.length;
    let area = vertices
        .map((vertex, index) => {
            const nextVertex = vertices[(index + 1) % howManyVertices];
            return vertex.x * nextVertex.y - vertex.y * nextVertex.x;
        })
        .reduce((sum, value) => sum + value, 0);
    return Math.abs(area) / 2;
}

export default calculatesAreaOfAPolygonFromMeters;