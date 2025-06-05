let arr = [1,2,3,4,5];
let small_numbers = [];

for(ele of arr) {
    if(ele == 4){
        break;
    }
    small_numbers.push(ele);
}
console.log(small_numbers);