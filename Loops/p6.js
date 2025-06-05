let worldCities = {
    "Sydney" : 5000000 ,
    "Tokyo" : 9000000,
    "Berlin" : 3500000 ,
    "Paris" : 2200000 
};
let largeCities = [];

for(const ele in worldCities) {
    if(worldCities[ele] >= 3000000) {
        largeCities.push(ele);
    }
}

console.log(largeCities);