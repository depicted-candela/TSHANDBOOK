var Point3D = /** @class */ (function () {
    function Point3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Point3D;
}());
var Line3D = /** @class */ (function () {
    function Line3D(StartPoint, EndPoint) {
        this.StartPoint = StartPoint;
        this.EndPoint = EndPoint;
    }
    return Line3D;
}());
var Plane = /** @class */ (function () {
    function Plane(A, B, C, D) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
    }
    return Plane;
}());
var findIntersections = function (spatialObject1, spatialObject2) {
    console.log("AAAAAAAAAAAAAAAAA");
    if (spatialObject1 instanceof Point3D) {
        console.log(spatialObject1);
    }
    console.log("VVVVVVVVVVVVVVV");
};
findIntersections(new Point3D(1, 2, 3), new Point3D(1, 2, 3));
