import translate, {Differential, Shape} from "./exercise7";

describe('Testing overloading for a function that moves a shape differentially or scaled', () => {
    test('Test for differential movement', () => {
        const shape: Shape = {x: 1, y: 1};
        const differential: Differential = {dx: 0.1, dy: 0.1};
        translate(shape, differential);
        expect(shape).toEqual({x: 1.1, y: 1.1});
    });
    test('Test for scaled or fixed movement', () => {
        const shape: Shape = {x: 1, y: 1};
        const fixedOrScaledMovement: number = 0.1;
        translate(shape, fixedOrScaledMovement);
        expect(shape).toEqual({x: 1.1, y: 1.1});
    });
});