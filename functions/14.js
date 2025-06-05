const squareNumbers = (arr) => {
    let answer = [];
    for(let i = 0; i < arr.length ; i ++) {
        let value = arr[i];
        let fval = value * value;
        answer.push(fval);
    }
    return answer;
};

let res = squareNumbers([1,2,3,4]);
console.log(res);