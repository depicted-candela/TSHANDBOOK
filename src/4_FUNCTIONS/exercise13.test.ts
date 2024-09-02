import constructShapes, { ShapeConstructorFunction, Shape } from './exercise13';

describe('ShapeConstructorFunction', () => {
    it('should create a shape object with kind and radius', () => {
        const shape = new (ShapeConstructorFunction as any)('circle', 5);
        expect(shape.kind).toBe('circle');
        expect(shape.radius).toBe(5);
    });

    it('should create a shape object with kind, height, and width', () => {
        const shape = new (ShapeConstructorFunction as any)('rectangle', undefined, 10, 20);
        expect(shape.kind).toBe('rectangle');
        expect(shape.height).toBe(10);
        expect(shape.width).toBe(20);
    });

    it('should create a shape object with kind, height, and base', () => {
        const shape = new (ShapeConstructorFunction as any)('triangle', undefined, 10, undefined, 15);
        expect(shape.kind).toBe('triangle');
        expect(shape.height).toBe(10);
        expect(shape.base).toBe(15);
    });
});

describe('constructShapes', () => {
    const constructor = ShapeConstructorFunction as any as { new(...args: any[]): Shape };

    it('should construct a circle shape', () => {
        const shape = constructShapes(constructor, 'circle', 5);
        expect(shape.kind).toBe('circle');
        expect(shape.radius).toBe(5);
    });

    it('should construct a rectangle shape', () => {
        const shape = constructShapes(constructor, 'rectangle', 10, 20);
        expect(shape.kind).toBe('rectangle');
        expect(shape.height).toBe(10);
        expect(shape.width).toBe(20);
    });

    // it('should construct a triangle shape', () => {
    //     const shape = constructShapes(constructor, 'triangle', 10, 15);
    //     expect(shape.kind).toBe('triangle');
    //     expect(shape.height).toBe(10);
    //     expect(shape.base).toBe(15);
    // });

    it('should throw an error for invalid radius value for a circle', () => {
        expect(() => constructShapes(constructor, 'circle', -5)).toThrow('Invalid values for radius of circle');
    });

    it('should throw an error for invalid dimensions of a rectangle', () => {
        expect(() => constructShapes(constructor, 'rectangle', 0, 20)).toThrow('Invalid values for dimensions of rectangle');
        expect(() => constructShapes(constructor, 'rectangle', 10, 0)).toThrow('Invalid values for dimensions of rectangle');
    });

    it('should throw an error for invalid dimensions of a triangle', () => {
        expect(() => constructShapes(constructor, 'triangle', 0, 15)).toThrow('Invalid values for dimensions of triangle');
        expect(() => constructShapes(constructor, 'triangle', 10, 0)).toThrow('Invalid values for dimensions of triangle');
    });
});
