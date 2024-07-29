var xCoordinates = [-72.0, -70.1, -69.5, -72.1, -71.0];
var xLabelCoordinates = ["1", "2", "3", "4", "5"];
var counter = 0;
for (var _i = 0, xCoordinates_1 = xCoordinates; _i < xCoordinates_1.length; _i++) {
    var x = xCoordinates_1[_i];
    console.log("The coordinate x ".concat(x, " has the label ").concat(xLabelCoordinates[counter]));
}
var sumAllXCoordinates = function (xCoordinates) {
    var counter = 0;
    for (var _i = 0, xCoordinates_2 = xCoordinates; _i < xCoordinates_2.length; _i++) {
        var x = xCoordinates_2[_i];
        counter += x;
    }
    return counter;
};
console.log("The sum of all coordinates ".concat(sumAllXCoordinates(xCoordinates)));
