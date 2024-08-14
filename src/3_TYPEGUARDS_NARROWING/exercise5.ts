import { det, inv, matrix, multiply, add } from 'mathjs';

interface Point3DImp {
    x: number;
    y: number;
    z: number;
}

export class Point3D {
    constructor(public x: number, public y: number, public z: number) {}
}

interface Line3DImp {
    startPoint: Point3DImp;
    endPoint: Point3DImp;
}

export class Line3D {
    constructor(public startPoint: Point3D, public endPoint: Point3D) {}
}

interface PlaneImp {
    A: number;
    B: number;
    C: number;
    D: number;
}

export const findIntersections = (
    spatialObject1: Point3DImp | Line3DImp | PlaneImp,
    spatialObject2: Point3DImp | Line3DImp | PlaneImp) => {

        const compared: number = detectsObjectType(spatialObject1);
        switch(compared) {
            case 0:
                const point: Point3D = spatialObject1 as Point3D;
                findIntersectionsWithPoint(point, spatialObject2);
            case 1:
                const line: Line3D = spatialObject1 as Line3D;
                findIntersectionsWithLine(line, spatialObject2);
        }

    }

const detectsObjectType = (
    spatialObject: Point3DImp | Line3DImp | PlaneImp): number => {
        return spatialObject instanceof Point3D ? 0 : spatialObject instanceof Line3D ? 1 : -1;
    }

const findIntersectionsWithPoint = (point: Point3DImp, object: Point3DImp | Line3DImp | PlaneImp) => {
    const toCompare: number = detectsObjectType(object);
    switch(toCompare) {
        case 0:
            return whereAreTwoPointsIntersected(point, object as Point3D);
        case 1:
            return whereAreAPointAndALineIntersected(point, object as Line3D);
        default:
            break;
    }
}

const findIntersectionsWithLine = (line: Line3DImp, object: Point3DImp | Line3DImp | PlaneImp) => {
    const toCompare: number = detectsObjectType(object);
    switch(toCompare) {
        case 0:
            return whereAreAPointAndALineIntersected(object as Point3D, line);
        case 1:
            return whereAreTwoLinesIntersected(line, object as Line3D);
        default:
            break;
    }
}

const whereAreTwoPointsIntersected = (point1: Point3DImp, point2: Point3DImp) => {
    return ((point1.x === point2.x) && (point1.x === point2.x)) ? [point1] : [];
}

const whereAreAPointAndALineIntersected = (point: Point3DImp, line: Line3DImp) => {
    const tx = (point.x - line.startPoint.x) / (line.endPoint.x - line.startPoint.x);
    const ty = (point.y - line.startPoint.y) / (line.endPoint.y - line.startPoint.y);
    const tz = (point.z - line.startPoint.z) / (line.endPoint.z - line.startPoint.z);
    if (tx === ty && ty === tz) return [point];
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
        [line1.startPoint.x - line2.startPoint.x],
        [line1.startPoint.y - line2.startPoint.y]
    ];
    const matrixAdjustmentWithBothStartingPoints = matrix(adjustmentWithBothStartingPoints);
    return multiply(invMatrix, matrixAdjustmentWithBothStartingPoints)
}

const detectsWhereTwoIntersectedLinesAreIntersected = (t: number, s: number, line1: Line3DImp, line2: Line3DImp) => {
    var leftMatrix = matrix([line1.startPoint.x, line1.startPoint.y, line1.startPoint.z]);
    var rightMatrix = matrix([line1.endPoint.x - line1.startPoint.x, line1.endPoint.x - line1.startPoint.y, line1.endPoint.z - line1.startPoint.z])
    const point1 = add(leftMatrix, multiply(t, rightMatrix));
    var leftMatrix = matrix([line2.startPoint.x, line2.startPoint.y, line2.startPoint.z]);
    var rightMatrix = matrix([line2.endPoint.x - line2.startPoint.x, line2.endPoint.x - line2.startPoint.y, line2.endPoint.z - line2.startPoint.z])
    const point2 = add(leftMatrix, multiply(s, rightMatrix));
    if ((point1.get([0]) === point2.get([0])) && (point1.get([1]) === point2.get([1])) && (point1.get([2]) === point2.get([2]))) return point1;
    return [];
}

const createsMatrixForTwoParamentricEquations = (line1: Line3DImp, line2: Line3DImp) => {
    const a11 = line2.endPoint.x - line2.startPoint.x;
    const a12 = line1.endPoint.x - line1.startPoint.x;
    const a21 = line2.endPoint.x - line2.startPoint.x;
    const a22 = line1.endPoint.x - line1.startPoint.x;
    const matrix = [
        [a11, a12],
        [a21, a22]
    ];
    return matrix;
}

findIntersections(new Point3D(1, 2, 3), new Point3D(1, 2, 3));