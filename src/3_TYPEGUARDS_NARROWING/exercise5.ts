import { det, inv, matrix, multiply, add } from 'mathjs';

export interface Point3DImp {
    x: number;
    y: number;
    z: number;
}

export interface Line3DImp {
    point1: Point3DImp;
    point2: Point3DImp;
}

export const findIntersections = (
    spatialObject1: Point3DImp | Line3DImp,
    spatialObject2: Point3DImp | Line3DImp) => {

    const compared: number = detectsObjectType(spatialObject1);
    switch (compared) {
        case 0:
            const point: Point3DImp = spatialObject1 as Point3DImp;
            return findIntersectionsWithPoint(point, spatialObject2);
        case 1:
            const line: Line3DImp = spatialObject1 as Line3DImp;
            return findIntersectionsWithLine(line, spatialObject2);
        default:
            throw new TypeError("The type of the object is neither a Point3D nor a Line3D");
    }

}

const detectsObjectType = (
    spatialObject: Point3DImp | Line3DImp): number => {
    let is3DLine = false;
    const is3DPoint = 'x' in spatialObject && 'y' in spatialObject && 'z' in spatialObject;
    if (!is3DPoint) is3DLine = 'point1' in spatialObject && 'point2' in spatialObject;
    return is3DPoint ? 0 : is3DLine ? 1 : -1;
}

const findIntersectionsWithPoint = (point: Point3DImp, object: Point3DImp | Line3DImp) => {
    const toCompare: number = detectsObjectType(object);
    switch (toCompare) {
        case 0:
            return whereAreTwoPointsIntersected(point, object as Point3DImp);
        case 1:
            return whereAreAPointAndALineIntersected(point, object as Line3DImp);
        default:
            break;
    }
}

const findIntersectionsWithLine = (line: Line3DImp, object: Point3DImp | Line3DImp) => {
    const toCompare: number = detectsObjectType(object);
    switch (toCompare) {
        case 0:
            return whereAreAPointAndALineIntersected(object as Point3DImp, line);
        case 1:
            return whereAreTwoLinesIntersected(line, object as Line3DImp);
        default:
            break;
    }
}

const whereAreTwoPointsIntersected = (point1: Point3DImp, point2: Point3DImp) => {
    return ((point1.x === point2.x) && (point1.x === point2.x)) ? [point1] : [];
}

const whereAreAPointAndALineIntersected = (point: Point3DImp, line: Line3DImp): [] | Point3DImp[] => {
    const { a, b, c } = determinesEquationOfLineIn3D(line);
    const px = (point.x - line.point1.x) / a;
    const py = (point.y - line.point1.y) / b;
    const pz = (point.z - line.point1.z) / c;
    const isOnLine = px === py && px === pz;
    if (isOnLine && pointIsInFiniteLine(line, point)) return [point];
    return [];
}

const whereAreTwoLinesIntersected = (line1: Line3DImp, line2: Line3DImp) => {
    const determinantOfParametricEquations = calculatesDeterminantOfParametricEquations(line1, line2);
    if (determinantOfParametricEquations === 0) return [];
    const parametersForTwoParametricEquations = solvesLinearSystemForTwoParametricEquations(line1, line2);
    const s = parametersForTwoParametricEquations.get([0]);
    const t = parametersForTwoParametricEquations.get([1]);
    if ((s < 0 && s > 1) && (t < 0 && t > 1)) return [];
    return detectsWhereTwoIntersectedLinesAreIntersected(t, s, line1, line2);
}

const calculatesDeterminantOfParametricEquations = (line1: Line3DImp, line2: Line3DImp) => {
    const matrix = createsMatrixForTwoParamentricEquations(line1, line2);
    return det(matrix);
}

const solvesLinearSystemForTwoParametricEquations = (line1: Line3DImp, line2: Line3DImp) => {
    const parametricMatrix = createsMatrixForTwoParamentricEquations(line1, line2);
    const invMatrix = inv(parametricMatrix);
    const adjustmentWithBothStartingPoints = [
        [line1.point1.x - line2.point1.x],
        [line1.point1.y - line2.point1.y]
    ];
    const matrixAdjustmentWithBothStartingPoints = matrix(adjustmentWithBothStartingPoints);
    return multiply(invMatrix, matrixAdjustmentWithBothStartingPoints)
}

const detectsWhereTwoIntersectedLinesAreIntersected = (t: number, s: number, line1: Line3DImp, line2: Line3DImp) => {
    var leftMatrix = matrix([line1.point1.x, line1.point1.y, line1.point1.z]);
    var rightMatrix = matrix([line1.point2.x - line1.point1.x, line1.point2.x - line1.point1.y, line1.point2.z - line1.point1.z])
    const point1 = add(leftMatrix, multiply(t, rightMatrix));
    var leftMatrix = matrix([line2.point1.x, line2.point1.y, line2.point1.z]);
    var rightMatrix = matrix([line2.point2.x - line2.point1.x, line2.point2.x - line2.point1.y, line2.point2.z - line2.point1.z])
    const point2 = add(leftMatrix, multiply(s, rightMatrix));
    if ((point1.get([0]) === point2.get([0])) && (point1.get([1]) === point2.get([1])) && (point1.get([2]) === point2.get([2]))) return point1;
    return [];
}

const createsMatrixForTwoParamentricEquations = (line1: Line3DImp, line2: Line3DImp) => {
    const a11 = line2.point2.x - line2.point1.x;
    const a12 = line1.point2.x - line1.point1.x;
    const a21 = line2.point2.x - line2.point1.x;
    const a22 = line1.point2.x - line1.point1.x;
    const matrix = [
        [a11, a12],
        [a21, a22]
    ];
    return matrix;
}

const determinesEquationOfLineIn3D = (line: Line3DImp) => {
    const a = line.point2.x - line.point1.x;
    const b = line.point2.y - line.point1.y;
    const c = line.point2.z - line.point1.z;
    return { a, b, c };
}

const pointIsInFiniteLine = (line: Line3DImp, point: Point3DImp) => {
    const isBetween = (val: number, end1: number, end2: number) => 
        (val >= Math.min(end1, end2)) && (val <= Math.max(end1, end2));
    return isBetween(point.x, line.point1.x, line.point2.x) && 
           isBetween(point.y, line.point1.y, line.point2.y) &&
           isBetween(point.z, line.point1.z, line.point2.z);
}