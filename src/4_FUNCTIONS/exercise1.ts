export interface Point {
    x: number;
    y: number;
}

const getDistanceBetweenTwoPoints = (a: Point, b: Point) => {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}

export default getDistanceBetweenTwoPoints;