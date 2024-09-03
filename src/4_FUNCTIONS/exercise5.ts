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

export default function mergeShapeWithItsLabels<S extends Shape, LS extends LabelsForShape>(shape: Shape, labelsForShape: LabelsForShape): S & LS {
    return {...shape, ...labelsForShape } as S & LS;
}