function isItTruthy (input) {   
    let value = Boolean(input);
    if(value) {
        return "It's truthy!";
    }
    else { 
        return "It's falsey!";
    }
};

console.log(isItTruthy(1)) ;