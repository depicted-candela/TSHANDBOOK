var printsSimpleORLabeled2DPoint = function (point) {
    console.log("The coordinates (".concat(point.coordinates.x, ", ").concat(point.coordinates.y, ")"));
    if ('label' in point)
        console.log("with labels:\n ".concat(point.label));
};
var simplePoint = { coordinates: { x: 10, y: 11 } };
var labeledPoint = { coordinates: { x: 10, y: 11 }, label: 'name' };
printsSimpleORLabeled2DPoint(simplePoint);
printsSimpleORLabeled2DPoint(labeledPoint);
