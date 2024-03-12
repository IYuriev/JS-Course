"use strict"

let data = () => prompt('Введіть дані');

let sumInput = () => {
    let message = data();
    let array = [];
    let result = 0;
    while(message !== '' && message !== null && !isNaN(message)){
        array.push(Number(message));
        message = data();
    }
    for(let numbers of array){
        result += numbers;
    }
    return result;
}

console.log(sumInput());