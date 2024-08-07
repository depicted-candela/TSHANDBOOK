"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPerimeter = function (shape) {
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
};
var getTrianglePerimeter = function (triangle) {
    return triangle.side1 + triangle.side2 + triangle.side3;
};
var getRectanglePerimeter = function (rectangle) {
    return rectangle.height + rectangle.width;
};
var getSquarePerimeter = function (square) {
    if (square.height && square.width && square.width !== square.height)
        return "The shape was badly made because ".concat(square.width, " !== ").concat(square.height);
    return square.height ? square.height * 2 : square.width ? square.width * 2 : "The shape was badly made because ".concat(square.width, " !== ").concat(square.height);
};
var getCirclePerimeter = function (circle) {
    return Math.PI * circle.radius;
};
