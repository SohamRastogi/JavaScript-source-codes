function flattenArray (arr) { 
    let ans = [];
    for(let i = 0 ; i < arr.length ; i ++){ 
        let value = arr[i]; 
        for(let j = 0 ; j < value.length ; j ++){
            ans.push(value[j]);
        }
    }
    return ans;
};

let res = flattenArray ( [ [1,2] , [3,4,5,6] , [1,2,2,3] , [3,3,4,5] , [1]] );
console.log(res);