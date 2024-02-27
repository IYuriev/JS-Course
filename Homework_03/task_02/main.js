"use strict"

const myPassword = 'Difficult password';
const password = prompt('Введіть пароль');

if(password === myPassword){
    alert('Ласкаво просимо!');
} else {
    alert('Пароль не вірний');
}