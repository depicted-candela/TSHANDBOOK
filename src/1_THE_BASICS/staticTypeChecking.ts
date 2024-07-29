interface Point {
    x: number;
    y: number;
}

interface Points {
    points: Point[];
}

const calculateSlope = (points: Points): number | string => {
    if (points.points.length != 2) return '+2 points not allowed';
    const point1 = points.points[0];
    const point2 = points.points[1];
    if (point1.x === point2.x && point1.y === point2.y) {
        return 'two overlapped points does not have slope';
    }
    if (point1.x.valueOf() === point2.x.valueOf()) {
        return 'slope is undefined for vertical lines'
    }
    return (points.points[0].y - points.points[1].y) / (points.points[0].x - points.points[1].x);
}

const printSlope = (slope: number | string) => {
    if (typeof slope === "string") {
        console.log(slope);
        return;
    }
    console.log(`The slope is ${slope}`);
}

printSlope(calculateSlope({points: [{x: 10, y: 11}, {x: 11, y: 12}]}));
printSlope(calculateSlope({points: [{x: 10, y: 11}, {x: 10, y: 12}]}));
printSlope(calculateSlope({points: [{x: 10, y: 11}, {x: 10, y: 11}]}));