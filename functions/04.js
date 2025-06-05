function makeTea(typeOfTea) {
    return `order from makeTea function : ${typeOfTea}`;
}

function processTeaOrder (teaFunction) {
    return teaFunction("earl grey");
}

let order = processTeaOrder (makeTea);
console.log(order);