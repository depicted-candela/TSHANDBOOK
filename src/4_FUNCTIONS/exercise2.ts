export type CalculatesRectangularArea = {
    description: string;
    (width: number, height: number): number; 
}

export default function callSignatureRectanlgularArea(fn: CalculatesRectangularArea) {
    return fn(1, 1);
}