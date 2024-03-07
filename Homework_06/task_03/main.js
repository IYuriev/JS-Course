"use strict"

let sumOfNumbers = (number) => {
    let stringNumber = number.toString();
    let amount = stringNumber.length;
    let result = 0;
    for(let i = 0; i < amount; i++){
        result += Number(stringNumber.at(i));
    }
    return result;
}
console.log(sumOfNumbers(12256));