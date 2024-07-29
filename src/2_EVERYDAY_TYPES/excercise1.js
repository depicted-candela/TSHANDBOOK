var isWithinA2DBoundary = function (point, boundary) {
    if (point.isWithin !== undefined) { // what happens if we use ==! instead of !==
        if (point.isWithin) {
            console.log("The point is in");
        }
        else {
            console.log("The point is out");
        }
        return;
    }
    if (boundary.type === 'vertical') {
        checkWithinVerticalBoundary(point, boundary);
    }
    else if (boundary.type === 'horizontal') {
        checkWithHorizontalBoundary(point, boundary);
    }
    isWithinA2DBoundary(point, boundary); // recursive calling
};
var checkWithinVerticalBoundary = function (point, boundary) {
    point.isWithin = (boundary.direction === 'leftToRight' && point.x >= boundary.point.x) ||
        (boundary.direction === 'rightToLeft' && point.x <= boundary.point.x);
};
var checkWithHorizontalBoundary = function (point, boundary) {
    point.isWithin = (boundary.direction === 'upward' && point.y >= boundary.point.x) ||
        (boundary.direction === 'downward' && point.y <= boundary.point.y);
};
var point2d = {
    x: 1,
    y: 2,
    label: 'A point'
};
var outPoint2d = {
    x: -1,
    y: -1,
    label: 'A point'
};
var verticalBoundary = {
    point: { x: 0, y: 1, label: 'A vertical boundary' },
    type: 'vertical',
    direction: 'leftToRight'
};
var horizontalBoundary = {
    point: { x: 0, y: 1, label: 'A horizontal boundary' },
    type: 'horizontal',
    direction: 'upward'
};
console.log("Inside");
isWithinA2DBoundary(point2d, verticalBoundary);
isWithinA2DBoundary(point2d, horizontalBoundary);
console.log("Outside");
isWithinA2DBoundary(outPoint2d, verticalBoundary);
isWithinA2DBoundary(outPoint2d, horizontalBoundary);
