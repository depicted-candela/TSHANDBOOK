var calculateSlope = function (points) {
    if (points.points.length != 2)
        return '+2 points not allowed';
    var point1 = points.points[0];
    var point2 = points.points[1];
    if (point1.x === point2.x && point1.y === point2.y) {
        return 'two overlapped points does not have slope';
    }
    if (point1.x.valueOf() === point2.x.valueOf()) {
        return 'slope is undefined for vertical lines';
    }
    return (points.points[0].y - points.points[1].y) / (points.points[0].x - points.points[1].x);
};
var printSlope = function (slope) {
    if (typeof slope === "string") {
        console.log(slope);
        return;
    }
    console.log("The slope is ".concat(slope));
};
printSlope(calculateSlope({ points: [{ x: 10, y: 11 }, { x: 11, y: 12 }] }));
printSlope(calculateSlope({ points: [{ x: 10, y: 11 }, { x: 10, y: 12 }] }));
printSlope(calculateSlope({ points: [{ x: 10, y: 11 }, { x: 10, y: 11 }] }));
