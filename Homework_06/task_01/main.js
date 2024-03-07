"use strict"

let capitalize = (str) => {
    let strUpperCase = str.substring(0, 1).toUpperCase();
    let strLowerCase = str.substring(1).toLowerCase();
    return strUpperCase + strLowerCase;
}

let reserveString = (str) => {
    let finalWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        finalWord += str.at(i);
    }
    return finalWord;
}

let convertToBinary = (num) => {
    return num.toString(2);
}

let generateRandomFloat = (n) => {
    let randomNum = Math.random() * 100;
    return randomNum.toFixed(n);
}


console.log(capitalize('hOw ARE yoU?'));
console.log(reserveString('Hello World'));
console.log(convertToBinary(15));
console.log(generateRandomFloat(2));