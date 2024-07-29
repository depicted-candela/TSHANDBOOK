var labeledOrSimpleCoordinate = function (coordinate, label) {
    console.log("Coordinate ".concat([coordinate.x, coordinate.y]));
    label && console.log("with label: ".concat(label));
    !label && console.log("without label");
};
labeledOrSimpleCoordinate({ x: 10, y: 11 });
labeledOrSimpleCoordinate({ x: 10, y: 11 }, null);
labeledOrSimpleCoordinate({ x: 10, y: 11 }, 'name');
