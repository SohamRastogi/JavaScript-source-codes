const filterEvenNumbers = (arr) => {
    let ans = [];
    for(let i = 0 ; i < arr.length ; i ++) {
        if(arr[i] % 2 == 0) {
            ans.push(arr[i]);
        }
    }   
    return ans;
};

let res = filterEvenNumbers([1,2,3,4,5,6]);
console.log(res);
