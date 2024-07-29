type Coordinates = {
    x: number;
    y: number;
}

type Point2D_6 = {
    coordinates: Coordinates;
}

interface Labeled2DPoint_6 extends Point2D_6 {
    label: "label" | "string" | "name";
}

const printsSimpleORLabeled2DPoint_6 = (point: {coordinates: Coordinates, label: "label" | "string" | "name"}) => {
    console.log(`The coordinates (${point.coordinates.x}, ${point.coordinates.y})`);
    if ('label' in point) console.log(`with labels:\n ${point.label}`);
}

const labeledPoint1: Labeled2DPoint_6 = {coordinates: {x: 10, y: 11}, label: "label"};
const labeledPoint2: Labeled2DPoint_6 = {coordinates: {x: 10, y: 11}, label: 'string'};
const labeledPoint3: Labeled2DPoint_6 = {coordinates: {x: 10, y: 11}, label: 'name'};

printsSimpleORLabeled2DPoint_6(labeledPoint1);
printsSimpleORLabeled2DPoint_6(labeledPoint2);
printsSimpleORLabeled2DPoint_6(labeledPoint3);