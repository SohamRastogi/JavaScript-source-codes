let teaTypes = ["chai" , "green tea" , "herbal tea" , "black tea"];
let preferredTeas = [];

for(const ele of teaTypes) {
    if(ele == "herbal tea") continue;
    preferredTeas.push(ele);
}

console.log(preferredTeas);