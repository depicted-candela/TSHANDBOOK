interface Shape {
    kind: string;
    width?: number;
    height?: number;
}

interface Circle extends Shape {
    kind: 'Circle';
    radius: number;
}

interface Square extends Shape {
    kind: 'Square';
}

interface Rectangle extends Shape {
    kind: 'Rectangle';
    width: number;
    height: number;
}

const getArea = (shape: Circle | Square | Rectangle ): number | string => {
    switch (shape.kind) {
        case 'Circle':
            return getCircularArea(shape.radius);
        case 'Square':
            return getSquareArea(shape.width, shape.height);
        case 'Rectangle':
            return getRectArea(shape.width!, shape.height!);
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
const circle: Circle = {
    kind: 'Circle',
    radius: 5
};

const completeSquare: Square = {
    kind: 'Square',
    width: 4,
    height: 4
};

const erroneousSquare: Square = {
    kind: 'Square',
    width: 4,
    height: 6
};

const squareWithWidth: Square = {
    kind: 'Square',
    width: 4
};

const squareWithHeight: Square = {
    kind: 'Square',
    height: 4
};

const rectangle: Rectangle = {
    kind: 'Rectangle',
    width: 4,
    height: 6
};

const printsArea = (shape: Circle | Rectangle | Square): void => {
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
