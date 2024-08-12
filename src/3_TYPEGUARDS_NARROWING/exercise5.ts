interface Point3DImp {
    x: number;
    y: number;
    z: number;
}

class Point3D {
    constructor(public x: number, public y: number, public z: number) {}
}

interface Line3DImp {
    startPoint: Point3DImp;
    endPoint: Point3DImp;
}

class Line3D {
    constructor(public startPoint: Point3D, public endPoint: Point3D) {}
}

interface Vector3DImp {
    xComponent: number;
    yComponent: number;
    zComponent: number;
}

interface PlaneImp {
    A: number;
    B: number;
    C: number;
    D: number;
}

class Plane {
    constructor(public A: number, public B: number, public C: number, public D: number) {}
}

const findIntersections = (
    spatialObject1: Point3DImp | Line3DImp | PlaneImp,
    spatialObject2: Point3DImp | Line3DImp | PlaneImp) => {

        const compared: number = detectsObjectType(spatialObject1);
        switch(compared) {
            case 0:
                const point: Point3D = spatialObject1 as Point3D;
                findIntersectionsWithPoint(point, spatialObject2);
        }

    }

const detectsObjectType = (
    spatialObject: Point3DImp | Line3DImp | PlaneImp): number => {
        return spatialObject instanceof Point3D ? 0 : spatialObject instanceof Line3D ? 1 : spatialObject instanceof Plane ? 2 : -1;
    }

const findIntersectionsWithPoint = (point: Point3DImp, object: Point3DImp | Line3DImp | PlaneImp) => {
    const toCompare: number = detectsObjectType(object);
    switch(toCompare) {
        case 0:
            return whereAreTwoPointsIntersected(point, object as Point3D);
        case 1:
            return whereAreAPointAndALineIntersected(point, object as Line3D);
        case 2:
            return areAPointAndAPlaneIntersected(point, object as Plane);
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
            return whereAreTwoLinesIntersected(point, object as Line3D);
        case 2:
            return whereAreALineAndAPlaneIntersected(point, object as Plane);
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

const whereAreAPointAndAPlaneIntersected = (point: Point3DImp, plane: PlaneImp) => {
    return plane.A * point.x + plane.B * point.y + plane.C * point.z === 0 ? [point] : [];
}

const whereAreTwoLinesIntersected = (line1: Line3DImp, line2: Line3DImp) => {
    const vector3dline1: Vector3DImp =
            {xComponent: line1.endPoint.x - line1.endPoint.x,
            yComponent: line1.endPoint.y - line1.endPoint.y,
            zComponent: line1.endPoint.z - line1.endPoint.z
        };
    const vector3dline2: Vector3DImp =
        {xComponent: line2.endPoint.x - line2.endPoint.x,
        yComponent: line2.endPoint.y - line2.endPoint.y,
        zComponent: line2.endPoint.z - line2.endPoint.z
    };
}

const areTwoLinesIntersected = (line1: Line3DImp, line2: Line3DImp, vector3dline1: Vector3DImp, vector3dline2: Vector3DImp) => {
    
}

findIntersections(new Point3D(1, 2, 3), new Point3D(1, 2, 3));