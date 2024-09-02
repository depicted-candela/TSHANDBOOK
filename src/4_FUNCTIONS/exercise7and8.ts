export interface Shape {
    x: number;
    y: number;
}

export interface Differential {
    dx: number;
    dy: number;
}

function translate(shape: Shape, fixedMovement: number): void;
function translate(shape: Shape, differentialMovement: Differential): void;
function translate(shape: Shape, fixedMovementOrDifferentialMovement?: number | Differential) {
    if (typeof fixedMovementOrDifferentialMovement === 'number') {
        shape.x += fixedMovementOrDifferentialMovement;
        shape.y += fixedMovementOrDifferentialMovement;
        return;
    }
    shape.x += fixedMovementOrDifferentialMovement?.dx!;
    shape.y += fixedMovementOrDifferentialMovement?.dy!;
}

export default translate;