// src/4_FUNCTIONS/exercise10.test.ts
import calculatesAreaOfAPolygonFromMeters, { Polygon10 } from './exercise10';

describe('calculatesAreaOfAPolygonFromMeters', () => {

    test('calculates the area of a simple triangle in meters', () => {
        const triangle: Polygon10 = {
            vertices: [
                { x: 0, y: 0 },
                { x: 4, y: 0 },
                { x: 4, y: 3 },
            ],
        };
        const area = calculatesAreaOfAPolygonFromMeters(triangle, 'meters');
        expect(area).toEqual(6);
    });

    test('calculates the area of a simple triangle in kilometers', () => {
        const triangle: Polygon10 = {
            vertices: [
                { x: 0, y: 0 },
                { x: 4000, y: 0 },
                { x: 4000, y: 3000 },
            ],
        };
        const area = calculatesAreaOfAPolygonFromMeters(triangle, 'kilometers');
        expect(area).toBeCloseTo(6, 5);
    });

    test('calculates the area of a simple triangle in centimeters', () => {
        const triangle: Polygon10 = {
            vertices: [
                { x: 0, y: 0 },
                { x: 0.4, y: 0 },
                { x: 0.4, y: 0.3 },
            ],
        };
        const area = calculatesAreaOfAPolygonFromMeters(triangle, 'centimeters');
        expect(area).toEqual(600);
    });

    test('throws an error for invalid polygon with less than 3 vertices', () => {
        const invalidPolygon: Polygon10 = {
            vertices: [
                { x: 0, y: 0 },
                { x: 4, y: 0 },
            ],
        };
        expect(() => calculatesAreaOfAPolygonFromMeters(invalidPolygon, 'meters')).toThrow(
            'The shape is not a polygon, is a line or a point'
        );
    });
});
