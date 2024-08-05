interface Shape {
    kind: 'Circle' | 'Square' | 'Rectangle';
    radius?: number;
    width?: number;
    height?: number;
}

const getArea = (shape: Shape): number | string => {
    switch (shape.kind) {
        case 'Circle':
            return getCircularArea(shape.radius!);
        case 'Square':
            return getSquareArea(shape.width, shape.height);
        case 'Rectangle':
            return getRectArea(shape.width, shape.height);
        default:
            return 0;
    }
}

const getCircularArea = (radius: number): number => {
    return Math.PI * radius ** 2;
}

const getSquareArea = (width?: number, height?: number): number | string => {
    if (width && height && width !== height) return `The shape was badly made because ${width} !== ${height}`;
    if (width) return width ** 2;
    if (height) return height ** 2;
    return 0;
}

const getRectArea = (width: number, height: number): number | string => {
    if (width && height) return width * height;
    return 0;
}

// Examples to test the functions
const circle: Shape = {
    kind: 'Circle',
    radius: 5
};

const completeSquare: Shape = {
    kind: 'Square',
    width: 4,
    height: 4
};

const erroneousSquare: Shape = {
    kind: 'Square',
    width: 4,
    height: 6
};

const squareWithWidth: Shape = {
    kind: 'Square',
    width: 4
};

const squareWithHeight: Shape = {
    kind: 'Square',
    height: 4
};

const rectangle: Shape = {
    kind: 'Rectangle',
    width: 4,
    height: 6
};

const printsArea = (shape: Shape): void => {
    const area = getArea(shape);
    if (typeof area === "string") {
        console.log(area);
        return;
    }
    if (shape.kind === 'Circle') console.log(`Circle area: ${area}`);
    if (shape.kind === 'Square') console.log(`Square area: ${area}`);
    console.log(`Rectangle area: ${area}`);
}

printsArea(circle);
printsArea(completeSquare);
printsArea(erroneousSquare);
printsArea(squareWithWidth);
printsArea(squareWithHeight);
printsArea(rectangle);
