"use strict"

function showInfo(currency = '') {
    return `${this.fullName} на позиції ${this.position} заробляє ${this.salary}${currency}`;
}

let employee1 = {
    fullName: 'Peter Parker',
    position: 'junior front-end developer',
    salary: 500,
}

let employee2 = {
    fullName: 'Tony Stark',
    position: 'middle back-end developer',
    salary: 1250,
}

console.log(showInfo.apply(employee1));
console.log(showInfo.apply(employee2));
console.log(showInfo.apply(employee1, ['$']));
console.log(showInfo.apply(employee2, ['$']));

let showInfoOfEmployee1 = showInfo.bind(employee1);
let showInfoOfEmployee2 = showInfo.bind(employee2);

console.log(showInfoOfEmployee1(['$']));
console.log(showInfoOfEmployee2([' грн.']));