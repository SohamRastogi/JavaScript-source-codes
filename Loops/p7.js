let teaCollections = ["earl grey" , "green tea" , "chai" , "oolong tea"];
let availableTeas = [];

teaCollections.forEach(function(tea) {
    if(tea == "chai") {
        return;
    }
    availableTeas.push(tea);
});

console.log(availableTeas);