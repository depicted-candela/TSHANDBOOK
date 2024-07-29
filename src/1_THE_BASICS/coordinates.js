var latitude = 5.04;
var longitude = -74.08;
var getCoordinateString = function (longitude, latitude) {
    return "(".concat(longitude, ", ").concat(latitude, ")");
};
console.log(getCoordinateString(longitude, latitude));
