let cityBucketList = ["kyoto" , "london" , "cape town" , "vancouver"];
let isPresent;

// does not work :
// if("london" in cityBucketList) {
//     isPresent = true;
// }
// else {
//     isPresent = false;
// }

let isLondonPresent = cityBucketList.includes("london");
console.log(isLondonPresent);