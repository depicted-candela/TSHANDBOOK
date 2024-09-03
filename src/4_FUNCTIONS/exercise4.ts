export interface Rectangle {
    width: number;
    height: number;
    area?: number;
}

export interface Circle {
    radius: number;
    area?: number;
}

export type CalculatesShapeArea = {
    description: string;
    (shape: Rectangle | Circle): number; 
}

export function callSignatureShapeArea(fn: CalculatesShapeArea, shape: Circle | Rectangle) {
    if ('width' in shape && 'height' in shape) return fn(shape);
    if ('radius' in shape) return fn(shape);
}

export const calculatesShapeArea: CalculatesShapeArea = Object.assign(
    (shape: Rectangle | Circle) => {
        const isRectangle = 'width' in shape && 'height' in shape;
        const isCircle = 'radius' in shape;

        if (!isCircle && !isRectangle) {
            throw new Error('This is neither a circle nor a rectangle');
        }
        if (isRectangle) {
            shape.area = shape.height * shape.width;
            return shape.area;
        }
        if (isCircle) {
            shape.area = shape.radius ** 2 * Math.PI;
            return shape.area;
        }
        throw new Error('Unexpected shape type');
    },
    { description: 'Calculates shape area'}
);

// The reduce function is recursive
export default function returnsShapeWithMaximumArea<Type extends { area : number }>(arrayOfShapes: Type[]): Type {
    return arrayOfShapes.reduce((previousShape, currentShape) => {
        return currentShape.area > previousShape.area ? currentShape : previousShape;  
    })
}