"use strict"

const getEntries = (obj) => {
    let array = [];
    
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let newArray = new Array;
        newArray.push(Object.keys(obj)[i]);
        newArray.push(Object.values(obj)[i]);
        array.push(newArray);
    }
    return array;
}

let actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"
    };

console.log(getEntries(actor));