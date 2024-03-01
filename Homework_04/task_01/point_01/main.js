"use strict"

const number1 = +prompt('Введіть перше число');
const number2 = +prompt('Введіть друге число');

const message = (number1 > number2) ? 'Перше число більше' :
                (number1 < number2) ? 'Друге число більше' : 'Числа рівні';

console.log(message);