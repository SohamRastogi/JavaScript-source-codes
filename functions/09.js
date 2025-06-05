function removeDuplicates(arr) { 
    let ans = [] ;
    for(let i = 0 ; i < arr.length ; i ++) { 
        let flag = 0;
        for(let j = 0 ; j < ans.length ; j ++) {
            if(arr[i] == ans[j]) {
                flag = 1;
            }
        }
        if(flag == 0) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

let res = removeDuplicates([1,2,2,3,4,5,5,6,7,8,8,9,10,10,10,10]);
console.log(res);