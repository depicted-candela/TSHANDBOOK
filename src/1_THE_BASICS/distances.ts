const longitudes: number[] = [40, 55];
const latitudes: number[] = [71, 62.7]

const calculateDistance = (longitudes: number[], latitudes: number[]): number => {
    const R = 6371;
    const dLat = (latitudes[0] - latitudes[1]) * (Math.PI / 180);
    const dLon = (longitudes[0] - longitudes[1]) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(latitudes[0] * (Math.PI / 180)) * Math.cos(latitudes[1] * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

console.log(calculateDistance(longitudes, latitudes));