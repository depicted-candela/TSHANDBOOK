import getDistanceBetweenTwoPoints, {Point} from "./exercise1";


describe('Tests if the distance is well calculated using the function matches the interface Point with the signature', () =>{
    test('With a good signature matching', () => {
        const b: Point= {x:1, y:1};
        const a: Point= {x:0, y:0};
        const distance = getDistanceBetweenTwoPoints(a, b);
        expect(Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2)).toEqual(distance);
    })
});