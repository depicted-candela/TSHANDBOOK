enum Quadrants {
    TOPRIGHT = 1,
    TOPLEFT = 2,
    BOTTOMLEFT = 3,
    BOTTOMRIGHT = 4,
    UNKNOWN = 0,
}

type Point2D_7 = {
    x: number;
    y: number;
}

const extractsQuadrantFromPoint = (point: Point2D_7) => {
    if (point.x > 0 && point.y > 0) return Quadrants.TOPRIGHT;
    if (point.x > 0 && point.y < 0) return Quadrants.BOTTOMRIGHT;
    if (point.x < 0 && point.y < 0) return Quadrants.BOTTOMLEFT;
    if (point.x < 0 && point.y > 0) return Quadrants.TOPLEFT;
    return Quadrants.UNKNOWN;
}

const point1 = {x: 1, y: 2};
const point2 = {x: -1, y: 2};
const point3 = {x: 1, y: -2};
const point4 = {x: -1, y: -2};
const point5 = {x: 0, y: -3};
const point6 = {x: -3, y: 0};
const point7 = {x: 0, y: 0};

console.log(extractsQuadrantFromPoint(point1));
console.log(extractsQuadrantFromPoint(point2));
console.log(extractsQuadrantFromPoint(point3));
console.log(extractsQuadrantFromPoint(point4));
console.log(extractsQuadrantFromPoint(point5));
console.log(extractsQuadrantFromPoint(point6));
console.log(extractsQuadrantFromPoint(point7));