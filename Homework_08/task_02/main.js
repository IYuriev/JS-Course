"use strict"

let array = ['Mersedes', 'Audi', 'BMW', 'VolksWagen']

let sortArray = (array) => {
    let compareStrings = (a, b) => {
        return a.length - b.length;
    }
    array.sort(compareStrings);
    return array;
}

console.log(sortArray(array));