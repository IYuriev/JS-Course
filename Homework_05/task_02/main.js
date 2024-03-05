"use strict"

let pow = (x = 9, n) => {
    let result = x;
    for(let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

console.log(pow());