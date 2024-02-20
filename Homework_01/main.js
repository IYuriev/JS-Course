// Задача 1
let age = 17;
let name = 'Ілля';

console.log(age);
console.log(name);

name = 'Ілля Юрьєв';

console.log(name);


// Задача 2
alert("Мене звати " + name + ", мені " + age + " років");



// Задача 3
age = prompt('Скільки вам років?');
name = prompt('Як вас звуть?');

alert(`Мене звати ${name}, мені ${age} років`);
 

// Задача 4
let number1, number2;

number1 = +prompt('Введіть перше число');
number2 = +prompt('Введіть друге число');

let sum = number1 + number2;
let sub = number1 - number2;
let mul = number1 * number2;
let div = number1 / number2;

console.log(sum, sub, mul, div);