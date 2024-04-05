"use strict"

const cloneObject = (obj, ...keys) => {
    const copyObject = Object.assign({}, obj);
    for (const key of keys){
        delete copyObject[key];
    }
    console.log(copyObject);
}

let person = {
    name: 'Thomas',
    age: 25,
    email: '123@mail.com',
    salary: 1000,
    nationality: 'American',
    favoriteFilm: 'Titanik',
}

const clonedPerson = cloneObject(person, 'salary', 'favoriteFilm');