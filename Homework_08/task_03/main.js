"use strict"

let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];
let result = [];

let unique = (strings) => {
    for(let message of strings){
        if(!result.includes(message)){
            result.push(message);
        }
    }
    return result;
}

console.log(unique(strings));