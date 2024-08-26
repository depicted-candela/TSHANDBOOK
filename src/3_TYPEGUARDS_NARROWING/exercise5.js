"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIntersections = void 0;
var mathjs_1 = require("mathjs");
var findIntersections = function (spatialObject1, spatialObject2) {
    var compared = detectsObjectType(spatialObject1);
    switch (compared) {
        case 0:
            var point = spatialObject1;
            return findIntersectionsWithPoint(point, spatialObject2);
        case 1:
            var line = spatialObject1;
            return findIntersectionsWithLine(line, spatialObject2);
        default:
            throw new TypeError("The type of the object is neither a Point3D nor a Line3D");
    }
};
exports.findIntersections = findIntersections;
var detectsObjectType = function (spatialObject) {
    var is3DLine = false;
    var is3DPoint = 'x' in spatialObject && 'y' in spatialObject && 'z' in spatialObject;
    if (!is3DPoint)
        is3DLine = 'point1' in spatialObject && 'point2' in spatialObject;
    return is3DPoint ? 0 : is3DLine ? 1 : -1;
};
var findIntersectionsWithPoint = function (point, object) {
    var toCompare = detectsObjectType(object);
    switch (toCompare) {
        case 0:
            return whereAreTwoPointsIntersected(point, object);
        case 1:
            return whereAreAPointAndALineIntersected(point, object);
        default:
            break;
    }
};
var findIntersectionsWithLine = function (line, object) {
    var toCompare = detectsObjectType(object);
    switch (toCompare) {
        case 0:
            return whereAreAPointAndALineIntersected(object, line);
        case 1:
            return whereAreTwoLinesIntersected(line, object);
        default:
            break;
    }
};
var whereAreTwoPointsIntersected = function (point1, point2) {
    return ((point1.x === point2.x) && (point1.x === point2.x)) ? [point1] : [];
};
var whereAreAPointAndALineIntersected = function (point, line) {
    var _a = determinesEquationOfLineIn3D(line), a = _a.a, b = _a.b, c = _a.c;
    var px = (point.x - line.point1.x) / a;
    var py = (point.y - line.point1.y) / b;
    var pz = (point.z - line.point1.z) / c;
    var isOnLine = px === py && px === pz;
    if (isOnLine && pointIsInFiniteLine(line, point))
        return [point];
    return [];
};
var whereAreTwoLinesIntersected = function (line1, line2) {
    var determinantOfParametricEquations = calculatesDeterminantOfParametricEquations(line1, line2);
    if (determinantOfParametricEquations === 0)
        return [];
    var parametersForTwoParametricEquations = solvesLinearSystemForTwoParametricEquations(line1, line2);
    var s = parametersForTwoParametricEquations.get([0]);
    var t = parametersForTwoParametricEquations.get([1]);
    if ((s < 0 && s > 1) && (t < 0 && t > 1))
        return [];
    return detectsWhereTwoIntersectedLinesAreIntersected(t, s, line1, line2);
};
var calculatesDeterminantOfParametricEquations = function (line1, line2) {
    var matrix = createsMatrixForTwoParamentricEquations(line1, line2);
    return (0, mathjs_1.det)(matrix);
};
var solvesLinearSystemForTwoParametricEquations = function (line1, line2) {
    var parametricMatrix = createsMatrixForTwoParamentricEquations(line1, line2);
    var invMatrix = (0, mathjs_1.inv)(parametricMatrix);
    var adjustmentWithBothStartingPoints = [
        [line1.point1.x - line2.point1.x],
        [line1.point1.y - line2.point1.y]
    ];
    var matrixAdjustmentWithBothStartingPoints = (0, mathjs_1.matrix)(adjustmentWithBothStartingPoints);
    return (0, mathjs_1.multiply)(invMatrix, matrixAdjustmentWithBothStartingPoints);
};
var detectsWhereTwoIntersectedLinesAreIntersected = function (t, s, line1, line2) {
    var leftMatrix = (0, mathjs_1.matrix)([line1.point1.x, line1.point1.y, line1.point1.z]);
    var rightMatrix = (0, mathjs_1.matrix)([line1.point2.x - line1.point1.x, line1.point2.x - line1.point1.y, line1.point2.z - line1.point1.z]);
    var point1 = (0, mathjs_1.add)(leftMatrix, (0, mathjs_1.multiply)(t, rightMatrix));
    var leftMatrix = (0, mathjs_1.matrix)([line2.point1.x, line2.point1.y, line2.point1.z]);
    var rightMatrix = (0, mathjs_1.matrix)([line2.point2.x - line2.point1.x, line2.point2.x - line2.point1.y, line2.point2.z - line2.point1.z]);
    var point2 = (0, mathjs_1.add)(leftMatrix, (0, mathjs_1.multiply)(s, rightMatrix));
    if ((point1.get([0]) === point2.get([0])) && (point1.get([1]) === point2.get([1])) && (point1.get([2]) === point2.get([2])))
        return point1;
    return [];
};
var createsMatrixForTwoParamentricEquations = function (line1, line2) {
    var a11 = line2.point2.x - line2.point1.x;
    var a12 = line1.point2.x - line1.point1.x;
    var a21 = line2.point2.x - line2.point1.x;
    var a22 = line1.point2.x - line1.point1.x;
    var matrix = [
        [a11, a12],
        [a21, a22]
    ];
    return matrix;
};
var determinesEquationOfLineIn3D = function (line) {
    var a = line.point2.x - line.point1.x;
    var b = line.point2.y - line.point1.y;
    var c = line.point2.z - line.point1.z;
    return { a: a, b: b, c: c };
};
var pointIsInFiniteLine = function (line, point) {
    var isBetween = function (val, end1, end2) {
        return (val >= Math.min(end1, end2)) && (val <= Math.max(end1, end2));
    };
    return isBetween(point.x, line.point1.x, line.point2.x) &&
        isBetween(point.y, line.point1.y, line.point2.y) &&
        isBetween(point.z, line.point1.z, line.point2.z);
};
