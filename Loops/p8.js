let cities = ["Berlin" , "Tokyo" , "Sydney" , "Paris"];
let travelledCities = [];

cities.forEach(function (city) {
    if(city == "Sydney") {
        return ;
    }
    travelledCities.push(city);
});

console.log(travelledCities);