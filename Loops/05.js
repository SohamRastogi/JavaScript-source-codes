let arr = [2, 4, 6];

let mult_nums = [];

for(let i = 0; i < arr.length ; i ++){
    arr[i] = arr[i]*2;
    mult_nums.push(arr[i]);
    arr[i] = arr[i] / 2;
}

console.log(arr);
console.log(mult_nums);