let cities = ["london" , "new york" , "paris" , "berliin"];
let visitedCities = [];

for (let i = 0 ; i < cities.length ; i ++) {
    if(cities[i] == "paris") {
        continue ;
    }
    visitedCities.push(cities[i]);
}

console.log(visitedCities);