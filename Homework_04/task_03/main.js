"use strict"

const factorial = +prompt('Введіть число');
let result = 1;

for(let i = 1; i <= factorial; i++){
    result *= i;
}
console.log(result);