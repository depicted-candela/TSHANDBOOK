var getArea = function (shape) {
    switch (shape.kind) {
        case 'Circle':
            return getCircularArea(shape.radius);
        case 'Square':
            return getRectArea(shape.width, shape.height);
        case 'Rectangle':
            return getRectArea(shape.width, shape.height);
        default:
            return 0;
    }
};
var getCircularArea = function (radius) {
    return Math.PI * Math.pow(radius, 2);
};
var getRectArea = function (width, height) {
    if (width && height)
        return width * height;
    if (width && !height)
        return Math.pow(width, 2);
    return Math.pow(height, 2);
};
// Examples to test the functions
var circle = {
    kind: 'Circle',
    radius: 5
};
var square = {
    kind: 'Square',
    width: 4
};
var rectangle = {
    kind: 'Rectangle',
    width: 4,
    height: 6
};
console.log("Circle area: ".concat(getArea(circle))); // Should output the area of the circle
console.log("Square area: ".concat(getArea(square))); // Should output the area of the square
console.log("Rectangle area: ".concat(getArea(rectangle))); // Should output the area of the rectangle
