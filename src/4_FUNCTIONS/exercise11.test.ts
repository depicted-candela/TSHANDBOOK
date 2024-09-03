import calculatesCentroidOfASetOfPoints, { Points } from "./exercise11";

describe('Test callbacks with optional parameters', () => {
    test('With all arguments', () => {
        const points: Points = {points: [{x:0.0, y:0.0}, {x:1.0, y:1.0}, {x:0.0, y:1.0}, {x:1.0, y:0.0}]};
        const centroid = calculatesCentroidOfASetOfPoints(points, (point, index) => console.log("The point is: ", point, "; the position is: ", index));
        expect(centroid).toEqual({x: 0.5, y: 0.5});
    });

    test('With necessary arguments', () => {
        const points: Points = {points: [{x:0, y:0}, {x:1, y:1}, {x:0, y:1}, {x:1, y:0}]};
        const centroid = calculatesCentroidOfASetOfPoints(points, (point) => console.log("The point is: ", point));
        expect(centroid).toEqual({x: 0.5, y: 0.5});
    });

    test('Callback should be called for points without x or y', () => {
        const points: Points = {points: [{x: 0, y: 0}, {x: 1, y: 1}, {invalid: true}, {x: 1, y: 0}]};
        const callbackMock = jest.fn((_point, index) => console.log("Invalid point at index:", index));
        const centroid = calculatesCentroidOfASetOfPoints(points, callbackMock);

        // Expect callback to be called once for the invalid point
        expect(callbackMock).toHaveBeenCalledTimes(1);
        expect(callbackMock).toHaveBeenCalledWith({invalid: true}, 2);

        // The centroid should only include valid points
        expect(centroid).toEqual({x: 0.6666666666666666, y: 0.3333333333333333});
    });

    test('Callback with index as undefined', () => {
        const points: Points = {points: [{x: 0, y: 0}, {missing: "values"}, {x: 1, y: 1}]};
        const callbackMock = jest.fn((point, index) => {
            // Ensure callback is called with undefined index when points lack required properties
            if (!('x' in point && 'y' in point)) {
                expect(index).toBeDefined();
            }
        });
        const centroid = calculatesCentroidOfASetOfPoints(points, callbackMock);

        // Expect the callback to be called once for the missing properties point
        expect(callbackMock).toHaveBeenCalledTimes(1);
        expect(callbackMock).toHaveBeenCalledWith({missing: "values"}, 1);

        // The centroid should only include valid points
        expect(centroid).toEqual({x: 0.5, y: 0.5});
    });
});
