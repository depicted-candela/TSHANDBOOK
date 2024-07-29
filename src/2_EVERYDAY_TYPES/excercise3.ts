type Point2D_3 = {
    coordinates: {
        x: number;
        y: number;
    };
    label1?: string;
    label2?: string;
}

const points2d: Point2D_3[] = [
    {coordinates: {x: 10, y: 11}},
    {coordinates: {x: 10, y: 11}, label1: 'The label 1'},
    {coordinates: {x: 10, y: 11}, label2: 'The label 2'},
    {coordinates: {x: 10, y: 11}, label1: 'The label 1', label2: 'The label 2'}
];

const printsPointProperties = (points2d: Point2D_3[]) => {
    for (const point2d of points2d) {
        console.log(`The coordinates are (${point2d.coordinates.x}, ${point2d.coordinates.y})` + (point2d.label1 && point2d.label2? `The labels are` : ` There aren't labels`));
        point2d.label1 && console.log(point2d.label1);
        point2d.label2 && console.log(point2d.label2);
    }
}

printsPointProperties(points2d);