function reverseArray (arr) {  
    let ans = [];
    for(let i = arr.length - 1 ; i >= 0 ; i --){
        ans.push(arr[i]);
    }
    return ans;
};

let res = reverseArray([1,2,3,4]);
console.log(res);
