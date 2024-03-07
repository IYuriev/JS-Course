"use strict"

let reserveString = (str) => {
    let finalWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        finalWord += str.at(i);
    }
    return finalWord;
}

let isPalindrom = (str) => {
    str = str.toLowerCase().replaceAll(' ', '');;
    let reverseStr = reserveString(str);
    let withoutSpace = reverseStr.replaceAll(' ', '');
    return str === withoutSpace;
}

console.log(isPalindrom('І розморозь зором зорі'));