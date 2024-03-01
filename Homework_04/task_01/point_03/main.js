"use strict"

const month = +prompt('Введіть номер місяця');

const isWinter = (month === 1 || month === 2 || month === 12);
const isSpring = (month === 3 || month === 4 || month === 5);
const isSummer = (month === 6 || month === 7 || month === 8);
const isAutumn = (month === 9 || month === 10 || month === 11);

switch(true){
    case isWinter:
        alert('Зима');
        break;
    case isSpring:
        alert('Весна');
        break;
    case isSummer:
        alert('Літо');
        break;
     case isAutumn:
         alert('Осінь');
         break;
    default:
        alert('Некоректний номер місяця');
        break;
}