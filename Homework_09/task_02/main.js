"use strict"

let mergeArrays = (...rest) => {
    let arrayString = rest.join();
    let set = new Set(arrayString.split(','));
    let arrayFromSet = Array.from(set);
    return arrayFromSet;
}

console.log(mergeArrays([1, 2], [2, 2, 3], [1, 1, 2, 4]));
console.log(mergeArrays([1, 2, 3 , 4, 5], [5, 6]));