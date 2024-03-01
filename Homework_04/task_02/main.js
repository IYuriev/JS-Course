"use strict"

let i = 1;
let sum = 0;

while(i <= 5){
    const number = +prompt('Введіть число');
    sum += number;
    i++
}
console.log(sum);