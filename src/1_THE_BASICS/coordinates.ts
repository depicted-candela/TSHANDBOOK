const latitude : number = 5.04;
const longitude : number = -74.08;

const getCoordinateString = (longitude: number, latitude: number): string => {
    return `(${longitude}, ${latitude})`
}

console.log(getCoordinateString(longitude, latitude));