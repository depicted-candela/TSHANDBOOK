import callSignatureRectangularArea, {Rectangle} from './exercise2';


describe('Test for a call signatures that must print the area of a rectangle with given width and height', () => {
    test('First', () => {
        function printsRectangularArea(rectangle: Rectangle) {
            return rectangle.width * rectangle.height;
        }
        printsRectangularArea.description = 'Area of a rectangle with given width and height';
        expect(2).toEqual(callSignatureRectangularArea(printsRectangularArea));
    })
})