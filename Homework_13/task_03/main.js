"use strict"

let actor = {};
Object.defineProperties(actor, {
    name: {
        value: 'Tom Hardy',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    age: {
        value: 44,
        configurable: false,
        writable: true,
        enumerable: true,
    },
    gender: {
        value: 'Male',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    nationality: {
        value: 'British',
        writable: false,
        configurable: true,
        enumerable: true,
    },
    lastFilm: {
        value: 'Venom: Let There Be Carnage',
        writable: true,
        enumerable: false,
        configurable: true,
    },
})

//delete actor.age;
//actor.nationality = 'American';

console.log(Object.values(actor));