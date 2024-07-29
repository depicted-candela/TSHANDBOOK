type Point2D_5 = {
    coordinates: {x: number; y: number};
}

interface Labeled2DPoint extends Point2D_5 {
    label: string;
}

const printsSimpleORLabeled2DPoint = (point: Point2D_5 | Labeled2DPoint) => {
    console.log(`The coordinates (${point.coordinates.x}, ${point.coordinates.y})`);
    if ('label' in point) console.log(`with labels:\n ${point.label}`);
}

const simplePoint: Point2D_5 = {coordinates: {x: 10, y: 11}};
const labeledPoint: Labeled2DPoint = {coordinates: {x: 10, y: 11}, label: 'name'};

printsSimpleORLabeled2DPoint(simplePoint);
printsSimpleORLabeled2DPoint(labeledPoint);