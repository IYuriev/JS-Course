const number1 = +prompt('Введіть перше число');
const number2 = +prompt('Введіть друге число');

const rem = (number1 % number2);
const pow = (number1 ** number2);

console.log(`Залишок від ділення ${number1}, на ${number2} дорівнює ${rem}.`);
console.log(`Результат зведеня ${number1}, у ступінь ${number2} дорівнює ${pow}.`);