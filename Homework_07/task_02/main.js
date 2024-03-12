"use strict"

let phone = prompt('Введіть номер телефона');
let contacts = {
    phone,
    email: 'email@gmail.com',
}

let person = {
    firstName: 'Illia',
    lastName: 'Yuriev',
}

person.contacts = contacts;

console.log(person);