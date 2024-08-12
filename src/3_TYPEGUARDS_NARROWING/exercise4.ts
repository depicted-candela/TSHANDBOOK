interface Point {
    x: number;
    y: number;
}

interface Line {
    startPoint: Point;
    endPoint: Point;
}

interface Polygon {
    points: Point[];
    lines: Line[];
}

const classifyObject = (object: any) => {
    if ('x' in object && 'y' in object) return 'Point';
    if ('startPoint' in object && 'endPoint' in object) return 'Line';
    if ('points' in object && 'lines' in object) return 'Polygon';
}

const p1: Point = {x:0, y:1};
const p2: Point = {x:0, y:2};
const p3: Point = {x:1, y:2};
const l1: Line = {startPoint: p1, endPoint: p2};
const l2: Line = {startPoint: p1, endPoint: p3};
const l3: Line = {startPoint: p2, endPoint: p3};
const poly: Polygon = {points: [p1, p2, p3], lines: [l1, l2, l3]};

console.log(classifyObject(p1));
console.log(classifyObject(l1));
console.log(classifyObject(poly));