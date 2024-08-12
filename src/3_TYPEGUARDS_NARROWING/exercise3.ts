import Shape, {Square, Rectangle, Circle} from './exercise1'

interface Triangle extends Shape {
    kind: 'Triangle';
    side1: number;
    side2: number;
    side3: number;
}

const getPerimeter = (shape: Triangle | Square | Rectangle | Circle) => {
    switch (shape.kind) {
        case 'Triangle':
            return getTrianglePerimeter(shape);
        case 'Rectangle':
            return getRectanglePerimeter(shape);
        case 'Square':
            return getSquarePerimeter(shape);
        case 'Circle':
            return getCirclePerimeter(shape);
        default:
            return 0;
    }
}

const getTrianglePerimeter = (triangle: Triangle) => {
    return triangle.side1 + triangle.side2 + triangle.side3;
}

const getRectanglePerimeter = (rectangle: Rectangle) => {
    return rectangle.height + rectangle.width;
}

const getSquarePerimeter = (square: Square) => {
    if (square.height && square.width && square.width !== square.height) return `The shape was badly made because ${square.width} !== ${square.height}`;
    return square.height ? square.height * 2 : square.width ? square.width * 2 : `The shape was badly made because ${square.width} !== ${square.height}`;
}

const getCirclePerimeter = (circle: Circle) => {
    return Math.PI * circle.radius ** 2;
}