"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getArea = function (shape) {
    switch (shape.kind) {
        case 'Circle':
            return getCircularArea(shape.radius);
        case 'Square':
            return getSquareArea(shape.width, shape.height);
        case 'Rectangle':
            return getRectArea(shape.width, shape.height);
        default:
            return 0;
    }
};
var getCircularArea = function (radius) {
    return Math.PI * Math.pow(radius, 2);
};
var getSquareArea = function (width, height) {
    if (width && height && width !== height)
        return "The shape was badly made because ".concat(width, " !== ").concat(height);
    if (width)
        return Math.pow(width, 2);
    if (height)
        return Math.pow(height, 2);
    return 0;
};
var getRectArea = function (width, height) {
    if (width && height)
        return width * height;
    return 0;
};
// Examples to test the functions
var circle = {
    kind: 'Circle',
    radius: 5
};
var completeSquare = {
    kind: 'Square',
    width: 4,
    height: 4
};
var erroneousSquare = {
    kind: 'Square',
    width: 4,
    height: 6
};
var squareWithWidth = {
    kind: 'Square',
    width: 4
};
var squareWithHeight = {
    kind: 'Square',
    height: 4
};
var rectangle = {
    kind: 'Rectangle',
    width: 4,
    height: 6
};
var printsArea = function (shape) {
    var area = getArea(shape);
    if (typeof area === "string") {
        console.log(area);
        return;
    }
    if (shape.kind === 'Circle')
        console.log("Circle area: ".concat(area));
    if (shape.kind === 'Square')
        console.log("Square area: ".concat(area));
    console.log("Rectangle area: ".concat(area));
};
printsArea(circle);
printsArea(completeSquare);
printsArea(erroneousSquare);
printsArea(squareWithWidth);
printsArea(squareWithHeight);
printsArea(rectangle);
