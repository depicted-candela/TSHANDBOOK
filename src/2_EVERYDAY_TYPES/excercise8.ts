type Coordinate_8 = {
    x: number;
    y: number;
}

const labeledOrSimpleCoordinate = (coordinate: Coordinate_8, label?: string | null) => {
    console.log(`Coordinate ${[coordinate.x, coordinate.y]}`);
    label && console.log(`with label: ${label}`);
    !label && console.log("without label");
}

labeledOrSimpleCoordinate({x: 10, y:11});
labeledOrSimpleCoordinate({x: 10, y:11}, null);
labeledOrSimpleCoordinate({x: 10, y:11}, 'name');