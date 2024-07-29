const xCoordinates: number[] = [-72.0, -70.1, -69.5, -72.1, -71.0];
const xLabelCoordinates: string[] = ["1", "2", "3", "4", "5"];

let counter: number = 0;
for (const x of xCoordinates) {
    console.log(`The coordinate x ${x} has the label ${xLabelCoordinates[counter]}`);
}

const sumAllXCoordinates = (xCoordinates: number[]) => {
    let counter: number = 0;
    for (const x of xCoordinates) {
        counter+=x;
    }
    return counter;
}

console.log(`The sum of all coordinates ${sumAllXCoordinates(xCoordinates)}`);