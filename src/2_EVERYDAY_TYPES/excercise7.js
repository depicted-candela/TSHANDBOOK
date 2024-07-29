var Quadrants;
(function (Quadrants) {
    Quadrants[Quadrants["TOPRIGHT"] = 1] = "TOPRIGHT";
    Quadrants[Quadrants["TOPLEFT"] = 2] = "TOPLEFT";
    Quadrants[Quadrants["BOTTOMLEFT"] = 3] = "BOTTOMLEFT";
    Quadrants[Quadrants["BOTTOMRIGHT"] = 4] = "BOTTOMRIGHT";
    Quadrants[Quadrants["UNKNOWN"] = 0] = "UNKNOWN";
})(Quadrants || (Quadrants = {}));
var extractsQuadrantFromPoint = function (point) {
    if (point.x > 0 && point.y > 0)
        return Quadrants.TOPRIGHT;
    if (point.x > 0 && point.y < 0)
        return Quadrants.BOTTOMRIGHT;
    if (point.x < 0 && point.y < 0)
        return Quadrants.BOTTOMLEFT;
    if (point.x < 0 && point.y > 0)
        return Quadrants.TOPLEFT;
    return Quadrants.UNKNOWN;
};
var point1 = { x: 1, y: 2 };
var point2 = { x: -1, y: 2 };
var point3 = { x: 1, y: -2 };
var point4 = { x: -1, y: -2 };
var point5 = { x: 0, y: -3 };
var point6 = { x: -3, y: 0 };
var point7 = { x: 0, y: 0 };
console.log(extractsQuadrantFromPoint(point1));
console.log(extractsQuadrantFromPoint(point2));
console.log(extractsQuadrantFromPoint(point3));
console.log(extractsQuadrantFromPoint(point4));
console.log(extractsQuadrantFromPoint(point5));
console.log(extractsQuadrantFromPoint(point6));
console.log(extractsQuadrantFromPoint(point7));
