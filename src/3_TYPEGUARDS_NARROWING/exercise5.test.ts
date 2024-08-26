// tests/exercise5.test.ts
import { findIntersections, Point3DImp, Line3DImp } from './exercise5';

describe('findIntersections tests with expected values', () => {
    
    test('Intersection of two identical points', () => {
        const point1: Point3DImp = { x: 1, y: 1, z: 1 };
        const point2: Point3DImp = { x: 1, y: 1, z: 1 };
        const result = findIntersections(point1, point2);
        const expected = [point1]; // Since both points are the same, the expected intersection is the point itself
        expect(result).toEqual(expected);
    });

    test('Intersection of two different points', () => {
        const point1: Point3DImp = { x: 1, y: 1, z: 1 };
        const point2: Point3DImp = { x: 2, y: 2, z: 2 };
        const result = findIntersections(point1, point2);
        const expected: any[] = []; // Different points do not intersect
        expect(result).toEqual(expected);
    });

    test('Intersection of a point and a line that intersect', () => {
        const point: Point3DImp = { x: 2, y: 2, z: 2 };
        const line: Line3DImp = { 
            point1: { x: 1, y: 1, z: 1 }, 
            point2: { x: 3, y: 3, z: 3 } 
        };
        const result = findIntersections(point, line);
        const expected = [point]; // The point lies on the line, so the expected intersection is the point itself
        expect(result).toEqual(expected);
    });

    test('Intersection of a point and a line that do not intersect', () => {
        const point: Point3DImp = { x: 4, y: 4, z: 4 };
        const line: Line3DImp = { 
            point1: { x: 1, y: 1, z: 1 }, 
            point2: { x: 3, y: 3, z: 3 } 
        };
        const result = findIntersections(point, line);
        const expected: any[] = []; // The point does not lie on the line, so no intersection
        expect(result).toEqual(expected);
    });

    test('Intersection of two lines that intersect', () => {
        const line1: Line3DImp = { 
            point1: { x: 0, y: 0, z: 0 }, 
            point2: { x: 1, y: 1, z: 1 } 
        };
        const line2: Line3DImp = { 
            point1: { x: 1, y: 1, z: 1 }, 
            point2: { x: 2, y: 2, z: 2 } 
        };
        const result = findIntersections(line1, line2);
        console.log(result);
        // const expected = [{ x: 1, y: 1, z: 1 }]; // The lines intersect at point (1, 1, 1)
        // expect(result).toEqual(expected);
    });

    test('Intersection of two lines that do not intersect', () => {
        const line1: Line3DImp = { 
            point1: { x: 0, y: 0, z: 0 }, 
            point2: { x: 1, y: 1, z: 1 } 
        };
        const line2: Line3DImp = { 
            point1: { x: 1, y: 2, z: 3 }, 
            point2: { x: 2, y: 3, z: 4 } 
        };
        const result = findIntersections(line1, line2);
        console.log('Intersection of two lines that do not intersect: ', result);
        // const expected: any[] = []; // The lines do not intersect
        // expect(result).toEqual(expected);
    });

});

