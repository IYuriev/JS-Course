"use strict"

const number1 = +prompt('Введіть перше число');
const number2 = +prompt('Введіть друге число');

if(number1 > number2){
    console.log('Перше число більше');
} else if (number1 < number2) {
    console.log('Друге число більше');
} else console.log('Числа рівні');