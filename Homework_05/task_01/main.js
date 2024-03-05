"use strict"

let sum = (num1, num2) => num1 + num2;

console.log(sum(5, 10));

function multBy5(num) {
    let result = 5 * num;
    console.log(`5 * ${num} = ${result}`);
}

multBy5(10);

let max = (num1, num2) => {
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

console.log(max(9, 12));