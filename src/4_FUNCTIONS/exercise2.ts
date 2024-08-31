export interface Rectangle {
    width: number;
    height: number;
}

export type CalculatesRectangularArea = {
    description: string;
    (rectangle: Rectangle): number; 
}

export default function callSignatureRectanlgularArea(fn: CalculatesRectangularArea) {
    const rectangle: Rectangle = {width: 1, height: 2}
    return fn(rectangle);
}