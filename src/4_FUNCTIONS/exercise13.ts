export interface Shape {
    kind: string;
    radius?: number;
    height?: number;
    width?: number;
    base?: number;
};

export type ShapeConstructor = {
    new (kind: string, radius?: number, height?: number, width?: number, base?: number): Shape;
};

export function ShapeConstructorFunction(this: Shape, kind: string, radius?: number, height?: number, width?: number, base?: number) {
    this.kind = kind;
    if(radius) this.radius = radius;
    if(width) this.width = width;
    if(height) this.height = height;
    if(base) this.base = base;
};

function constructShapes(constructor: ShapeConstructor, kind: "rectangle", height: number, width: number): Shape;
function constructShapes(constructor: ShapeConstructor, kind: "triangle", height: number, base: number): Shape;
function constructShapes(constructor: ShapeConstructor, kind: "circle", radius: number): Shape;
function constructShapes(constructor: ShapeConstructor, kind: string, dimension1: number, dimension2?: number) {
    switch(kind) {
        case 'circle':
            validsValues(kind, dimension1);
            return new constructor(kind, dimension1);
        case 'rectangle':
            validsValues(kind, dimension1, dimension2);
            return new constructor(kind, undefined, dimension1, dimension2);
        case 'triangle':
            validsValues(kind, dimension1, dimension2);
            return new constructor(kind, undefined, dimension1, undefined, dimension2);
        default: throw new Error('The shape is invalid')
    }
};

function validsValues(kind: string, dimension1: number, dimension2?: number) {
    if (kind === 'circle' && dimension1 < 1) throw new Error(`Invalid values for radius of ${kind}`);
    if (kind === 'triangle' || kind === 'rectangle') {
        if (dimension1 < 1 || dimension2! < 1) throw new Error(`Invalid values for dimensions of ${kind}`);
    }
}

export default constructShapes;