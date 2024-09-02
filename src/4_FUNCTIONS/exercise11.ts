interface Point11 {
    x: number;
    y: number;
};

export interface Points {
    points: any[];
};

function calculatesCentroidOfASetOfPoints(points: Points, callback: (point: Point11 | undefined, index?: number) => void) {
    let x = 0.0, y = 0.0, counter = 0.0;
    for (let i = 0; i < points.points.length; i++) {
        const point: Point11 = points.points[i];
        if (!('x' in point && 'y' in point)) {
            callback(point, i);
            continue;
        }
        x += point.x;
        y += point.y;
        counter++;
    }
    return {x: x / counter, y: y / counter};
}

export default calculatesCentroidOfASetOfPoints;