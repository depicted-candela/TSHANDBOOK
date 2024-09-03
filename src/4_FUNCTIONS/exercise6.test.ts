import mergeShapeWithItsLabels, {Circle, Rectangle, LabelsForShape} from "./exercise6";

describe('Test for simplified merging of shapes (Circles and Rectangles) with Labels', () => {
    test('Test for circle', () => {
        const circle: Circle = {
            radius: 1,
            area: function() {
                return (this.radius ** 2) * Math.PI;
            }
        }; 
        const label: LabelsForShape = {color: 'blue', name: 'circle'};
        const labeledCircle = mergeShapeWithItsLabels(circle, label);
        expect(labeledCircle).toEqual({radius: circle.radius, area: circle.area, color: 'blue', name: 'circle'});
    });
    test('Test for rectangle', () => {
        const rectangle: Rectangle = {
            width: 1,
            height: 1,
            area: function() {
                return this.width * this.height;
            }
        }; 
        const label: LabelsForShape = {color: 'blue', name: 'rectangle'};
        const labeledRectangle = mergeShapeWithItsLabels(rectangle, label);
        expect(labeledRectangle).toEqual({width: rectangle.width, height: rectangle.height, area: rectangle.area, color: 'blue', name: 'rectangle'});
    });
});