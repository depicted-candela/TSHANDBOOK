var printsMapObject = function (objectForMap) {
    var object = objectForMap.object;
    if ('name' in object)
        console.log("Is a label with name: ".concat(object.name));
    if ('coordinates' in object)
        console.log("Is a poing with coordinates: ".concat(object.coordinates.x, ", ").concat(object.coordinates.y));
};
var label = { name: 'label' };
var point = { coordinates: { x: 10, y: 11 } };
printsMapObject({ object: label });
printsMapObject({ object: point });
