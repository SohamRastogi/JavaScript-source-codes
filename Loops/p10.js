let teaTypes = ["chai" , "green tea" , "black tea" , "jasmine tea" , "herbal tea"];
let shortTeas = [];

for(const ele of teaTypes) {
    let len = ele.length;
    if(len > 10) break;

    shortTeas.push(ele);
}

console.log(shortTeas);

let str = "soham rastogi";
console.log(str.length);
