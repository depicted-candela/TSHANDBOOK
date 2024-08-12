var classifyObject = function (object) {
    if ('x' in object && 'y' in object)
        return 'Point';
    if ('startPoint' in object && 'endPoint' in object)
        return 'Line';
    if ('points' in object && 'lines' in object)
        return 'Polygon';
};
var p1 = { x: 0, y: 1 };
var p2 = { x: 0, y: 2 };
var p3 = { x: 1, y: 2 };
var l1 = { startPoint: p1, endPoint: p2 };
var l2 = { startPoint: p1, endPoint: p3 };
var l3 = { startPoint: p2, endPoint: p3 };
var poly = { points: [p1, p2, p3], lines: [l1, l2, l3] };
console.log(classifyObject(p1));
console.log(classifyObject(l1));
console.log(classifyObject(poly));
