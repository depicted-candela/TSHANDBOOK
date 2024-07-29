var points2d = [
    { coordinates: { x: 10, y: 11 } },
    { coordinates: { x: 10, y: 11 }, label1: 'The label 1' },
    { coordinates: { x: 10, y: 11 }, label2: 'The label 2' },
    { coordinates: { x: 10, y: 11 }, label1: 'The label 1', label2: 'The label 2' }
];
var printsPointProperties = function (points2d) {
    for (var _i = 0, points2d_1 = points2d; _i < points2d_1.length; _i++) {
        var point2d = points2d_1[_i];
        console.log("The coordinates are (".concat(point2d.coordinates.x, ", ").concat(point2d.coordinates.y, ")") + (point2d.label1 && point2d.label2 ? "The labels are" : " There aren't labels"));
        point2d.label1 && console.log(point2d.label1);
        point2d.label2 && console.log(point2d.label2);
    }
};
printsPointProperties(points2d);
