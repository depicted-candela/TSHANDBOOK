var printCoordinate = function (coordinate) {
    console.log("The coordinates are: (".concat(coordinate.longitude, ", ").concat(coordinate.latitude, ")"));
    if (coordinate.label)
        console.log("With label as: ".concat(coordinate.label));
};
printCoordinate({ longitude: 40, latitude: 5, label: 'a' });
printCoordinate({ longitude: 41, latitude: 5 });
