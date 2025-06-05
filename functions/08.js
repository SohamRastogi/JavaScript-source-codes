function findMax (arr) { 
    let max = -100000;
    for(let i = 0 ; i  < arr.length ; i ++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};

let res = findMax([1,2,5,4,3,0]);
console.log(res);