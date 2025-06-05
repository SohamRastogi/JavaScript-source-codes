function printMultiplicationTable(n) {
    let ans = [];
    for (let i = 1 ; i <= 10 ; i ++) {
        let res = n * i;
        let str = `${n} * ${i} = ${n*i}`;
        ans.push(str);
    }
    return ans;
}

let value = printMultiplicationTable(5);
console.log(value);
