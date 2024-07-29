type Point2D_4 = {
    coordinates: {
        x: number;
        y: number;
    }
}

type Label = {
    name: string;
}

type ObjectForMap = {
    object: Point2D_4 | Label;
}

const printsMapObject = (objectForMap: ObjectForMap) => {
    const object = objectForMap.object;
    if ('name' in object) console.log(`Is a label with name: ${object.name}`);
    if ('coordinates' in object) console.log(`Is a poing with coordinates: ${object.coordinates.x}, ${object.coordinates.y}`);
};

const label: Label = {name: 'label'};
const point: Point2D_4 = {coordinates: {x: 10, y: 11}};
printsMapObject({object: label});
printsMapObject({object: point});