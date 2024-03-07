"use strict"

let generateNumberinLimit = (start, end) => {
    let randomNumber = Math.random() * end;
    while(randomNumber < start){
        randomNumber = Math.random() * end;
    }
    return randomNumber.toFixed(0);
}
console.log(generateNumberinLimit(24, 50));