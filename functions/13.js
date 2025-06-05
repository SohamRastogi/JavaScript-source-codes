function countVowels(str) {
    let cnt = 0 ;
    for(let i = 0 ; i < str.length ; i ++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') cnt++;
        else if(str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') cnt++;
    }

    return cnt;
}

let result = countVowels("sohamRAstogi");
console.log(result);