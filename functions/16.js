const sumPositiveNumbers = (arr) => {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum ;
};

let ans = sumPositiveNumbers([1,2,3,4,-1,-2]);
console.log(ans);
