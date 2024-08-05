var printsIsPoint = function (point) {
    if (isPoint(point))
        return "(".concat(point.x, ", ").concat(point.y, "): is a point");
    return "(".concat(point.x, ", ").concat(point.y, "): is not a point");
};
var isPoint = function (point) {
    return point !== null && typeof point === 'object' && typeof point.x === 'number' && typeof point.y === 'number';
};
var arrayOfElements = [
    { x: 1, y: 2 }, // Valid Point
    { x: 1, y: "2" }, // Invalid Point (y is not a number)
    { x: "1", y: 2 }, // Invalid Point (x is not a number)
    { x: 1 }, // Invalid Point (missing y)
    { y: 2 }, // Invalid Point (missing x)
    { x: null, y: 2 }, // Invalid Point (x is null)
    { x: 1, y: undefined }, // Invalid Point (y is undefined)
    {}, // Invalid Point (empty object)
    null, // Invalid Point (null)
    undefined, // Invalid Point (undefined)
    "string", // Invalid Point (string)
    12345, // Invalid Point (number)
    true, // Invalid Point (boolean)
    { x: 3.14, y: 42 } // Valid Point (valid numbers including float)
];
for (var _i = 0, arrayOfElements_1 = arrayOfElements; _i < arrayOfElements_1.length; _i++) {
    var element = arrayOfElements_1[_i];
    console.log(printsIsPoint(element));
}
