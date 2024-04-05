"use strict"

const setLength = (obj) => {
    obj.length = Object.keys(obj).length + 1;
    return obj;
}

const person = {
    firstName: 'John',
    lastName: 'Cena',
    age: 46,
    country: 'USA',
}

console.log(setLength(person));