interface Shape {
    kind: 'Circle' | 'Square' | 'Rectangle';
    radius?: number;
    width?: number;
    height?: number;
}

const getArea = (shape: Shape) => {
    switch(shape.kind) {
        case 'Circle':
            return getCircularArea(shape.radius!);
        case 'Square':
            return getRectArea(shape.width, shape.height);
        case 'Rectangle':
            return getRectArea(shape.width, shape.height);
        default:
            return 0;
    }
}

const getCircularArea = (radius: number) => {
    return Math.PI * radius ** 2;
}   

const getRectArea = (width?: number, height?: number) => {
    if (width && height) return width * height;
    if (width && !height) return width ** 2;
    return height! ** 2;
}

// Examples to test the functions
const circle: Shape = {
    kind: 'Circle',
    radius: 5
};

const square: Shape = {
    kind: 'Square',
    width: 4
};

const rectangle: Shape = {
    kind: 'Rectangle',
    width: 4,
    height: 6
};

console.log(`Circle area: ${getArea(circle)}`); // Should output the area of the circle
console.log(`Square area: ${getArea(square)}`); // Should output the area of the square
console.log(`Rectangle area: ${getArea(rectangle)}`); // Should output the area of the rectangle