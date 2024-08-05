interface Point {
    x: number;
    y: number;
}

const printsIsPoint = (point: any) => {
    if (isPoint(point)) return `(${point.x}, ${point.y}): is a point`;
    return `(${point.x}, ${point.y}): is not a point`;
}

const isPoint = (point: any): point is Point => {
    return point !== null && typeof point === 'object' && typeof point.x === 'number' && typeof point.y === 'number';
}

const arrayOfElements: any[] = [
    { x: 1, y: 2 },             // Valid Point
    { x: 1, y: "2" },           // Invalid Point (y is not a number)
    { x: "1", y: 2 },           // Invalid Point (x is not a number)
    { x: 1 },                   // Invalid Point (missing y)
    { y: 2 },                   // Invalid Point (missing x)
    { x: null, y: 2 },          // Invalid Point (x is null)
    { x: 1, y: undefined },     // Invalid Point (y is undefined)
    {},                         // Invalid Point (empty object)
    null,                       // Invalid Point (null)
    undefined,                  // Invalid Point (undefined)
    "string",                   // Invalid Point (string)
    12345,                      // Invalid Point (number)
    true,                       // Invalid Point (boolean)
    { x: 3.14, y: 42 }          // Valid Point (valid numbers including float)
]

for (let element of arrayOfElements) {
    console.log(printsIsPoint(element));
}