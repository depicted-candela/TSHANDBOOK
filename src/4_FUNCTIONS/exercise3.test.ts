import triangle from "./exercise3";

describe('Computes the area of a triangle within a constant with inner function getArea using this', () => {
    test('Test 1', () => {
        expect(triangle.getArea()).toEqual(0.5);
    })
})