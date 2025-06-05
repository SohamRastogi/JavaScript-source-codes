function orderTea (teaType) {
    function confirmOrder (para1) {
        let str1 = "order confirmed for " + para1 ;
        return str1;
    }
    let ans1 = confirmOrder(teaType);
    return ans1;
}

let answerFinal = orderTea ("chai");
console.log(answerFinal);