type Point2D = {
    x: number;
    y: number;
    label: string;
    isWithin?: boolean;
};

type Boundary =
    | {
        point: Point2D;
        type: 'vertical';
        direction: 'leftToRight' | 'rightToLeft';
    }
    | {
        point: Point2D;
        type: 'horizontal';
        direction: 'upward' | 'downward';
    };

const isWithinA2DBoundary = (point: Point2D, boundary: Boundary) => {
    if (point.isWithin !== undefined) { // what happens if we use ==! instead of !==
        if (point.isWithin) {
            console.log("The point is in");
        } else {
            console.log("The point is out");
        }
        return;
    }
    if (boundary.type === 'vertical') {
        checkWithinVerticalBoundary(point, boundary);
    } else if (boundary.type === 'horizontal') {
        checkWithHorizontalBoundary(point, boundary);
    }
    isWithinA2DBoundary(point, boundary); // recursive calling
}

const checkWithinVerticalBoundary = (point: Point2D, boundary: Boundary) => {
    point.isWithin = (boundary.direction === 'leftToRight' && point.x >= boundary.point.x) ||
    (boundary.direction === 'rightToLeft' && point.x <= boundary.point.x);
}

const checkWithHorizontalBoundary = (point: Point2D, boundary: Boundary) => {
    point.isWithin = (boundary.direction === 'upward' && point.y >= boundary.point.x) ||
    (boundary.direction === 'downward' && point.y <= boundary.point.y);
}

const point2d: Point2D = {
    x: 1,
    y: 2,
    label: 'A point'
};

const outPoint2d: Point2D = {
    x: -1,
    y: -1,
    label: 'A point'
};

const verticalBoundary: Boundary = {
    point: {x: 0, y: 1, label: 'A vertical boundary'},
    type: 'vertical',
    direction: 'leftToRight'
}

const horizontalBoundary: Boundary = {
    point: {x: 0, y: 1, label: 'A horizontal boundary'},
    type: 'horizontal',
    direction: 'upward'
}

console.log("Inside");
isWithinA2DBoundary(point2d, verticalBoundary);
isWithinA2DBoundary(point2d, horizontalBoundary);

console.log("Outside");
isWithinA2DBoundary(outPoint2d, verticalBoundary);
isWithinA2DBoundary(outPoint2d, horizontalBoundary);