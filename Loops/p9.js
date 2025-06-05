let nums = [2,5,7,9];
let doubledNums = [];

for(let i = 0 ; i < nums.length ; i ++) {
    if(nums[i] == 7) continue;

    let newNum = nums[i] * 2;
    doubledNums.push(newNum);
}

console.log(doubledNums);

