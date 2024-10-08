interface Shape {
    area: () => number;
}

export interface Circle extends Shape {
    radius: number;
}

export interface Rectangle extends Shape {
    width: number;
    height: number;
}

export interface LabelsForShape {
    color: string;
    name: string;
}

export default function mergeShapeWithItsLabels<S extends Shape, L extends LabelsForShape, LS extends S & L>(shape: S, labels: L): LS {
    const shapeWithArea = 'area' in shape;
    const labelsWithProperties = 'color' in labels && 'name' in labels;
    if (!shapeWithArea) throw new Error('The object for the argument shape is not a shape');
    if (!labelsWithProperties) throw new Error('The object for the argument labels is not a correct set of labels');
    return {...shape, ...labels} as unknown as LS;
}