interface Coordinate {
    longitude: number;
    latitude: number;
    label?: string; 
}

const printCoordinate = (coordinate: Coordinate) => {
    console.log(`The coordinates are: (${coordinate.longitude}, ${coordinate.latitude})`);
    if (coordinate.label) console.log(`With label as: ${coordinate.label}`)
}

printCoordinate({longitude: 40, latitude: 5, label: 'a'});
printCoordinate({longitude: 41, latitude: 5});