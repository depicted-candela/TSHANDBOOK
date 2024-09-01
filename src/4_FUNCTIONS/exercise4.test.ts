import returnsShapeWithMaximumArea, {Circle, Rectangle, callSignatureShapeArea, calculatesShapeArea} from './exercise4';

describe('Test for the usage of Generic types in signatures to give flexibility enough to get many types by the same function', () => {
    test('Test 1', () => {
        const rectangle: Rectangle = {width: 1, height: 1};
        const circle: Circle = {radius: 1};
        callSignatureShapeArea(calculatesShapeArea, circle);
        callSignatureShapeArea(calculatesShapeArea, rectangle);
        const arrayOfShapes: (Circle | Rectangle)[] = [rectangle, circle];
        const shapeWithMaximumArea = returnsShapeWithMaximumArea(arrayOfShapes as {area: number}[]);
        expect(shapeWithMaximumArea).toEqual(circle);
    })
})