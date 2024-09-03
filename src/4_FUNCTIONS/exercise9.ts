export interface Shape {
    x: number;
    y: number;
}

export interface Differential {
    dx: number;
    dy: number;
}

function translate(shape: Shape, movement: Differential | number) {
    if (typeof movement === 'number') {
        shape.x += movement;
        shape.y += movement;
        return;
    }
    shape.x += movement?.dx!;
    shape.y += movement?.dy!;
}

export default translate;