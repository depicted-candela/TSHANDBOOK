var printsSimpleORLabeled2DPoint_6 = function (point) {
    console.log("The coordinates (".concat(point.coordinates.x, ", ").concat(point.coordinates.y, ")"));
    if ('label' in point)
        console.log("with labels:\n ".concat(point.label));
};
var labeledPoint1 = { coordinates: { x: 10, y: 11 }, label: "label" };
var labeledPoint2 = { coordinates: { x: 10, y: 11 }, label: 'string' };
var labeledPoint3 = { coordinates: { x: 10, y: 11 }, label: 'name' };
printsSimpleORLabeled2DPoint_6(labeledPoint1);
printsSimpleORLabeled2DPoint_6(labeledPoint2);
printsSimpleORLabeled2DPoint_6(labeledPoint3);
