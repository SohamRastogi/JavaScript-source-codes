let teaTypes = ["green tea" , "black tea" , "chai" , "oolong tea"];
let selectedTeas = [];

for (let i = 0 ; i < teaTypes.length ; i ++){
    if(teaTypes[i] == "chai") {
        break;
    }
    selectedTeas.push(teaTypes[i]);
}

console.log(selectedTeas);