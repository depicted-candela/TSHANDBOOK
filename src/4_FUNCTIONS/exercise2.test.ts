import callSignatureRectangularArea, { CalculatesRectangularArea } from './exercise2';


describe('Test for a call signatures that must print the area of a rectangle with given width and height', () => {
    test('First', () => {
        function printsRectangularArea(width: number, height: number) {
            return width * height;
        }
        printsRectangularArea.description = 'Area of a rectangle with given width and height';
        expect(1).toEqual(callSignatureRectangularArea(printsRectangularArea));
    })
})