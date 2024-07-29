var longitudes = [40, 55];
var latitudes = [71, 62.7];
var calculateDistance = function (longitudes, latitudes) {
    var R = 6371;
    var dLat = (latitudes[0] - latitudes[1]) * (Math.PI / 180);
    var dLon = (longitudes[0] - longitudes[1]) * (Math.PI / 180);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(latitudes[0] * (Math.PI / 180)) * Math.cos(latitudes[1] * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return distance;
};
console.log(calculateDistance(longitudes, latitudes));
