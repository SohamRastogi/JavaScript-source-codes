const findLongestWord = (arr) => {
    let max = -1;
    let idx = -1;
    for(let i = 0 ; i < arr.length ; i ++) {
        let res = arr[i].length;
        if(max < res) {
            max = res;
            idx = i;
        }
    }
    return arr[idx];
};

let ans = findLongestWord(["soham" , "rastogi" , "alpha" , "beta" , "gamma" , "delta"]);
console.log(ans); 
