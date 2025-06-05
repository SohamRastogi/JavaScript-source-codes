let cityPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
};
let pops = [];

for(let ele in cityPopulation) {
    if(ele == "Berlin") break;
    let val = cityPopulation[ele];
    pops.push(val);
}

console.log(pops);