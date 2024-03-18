"use strict"

let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];

let res = array.forEach((element) => {
    console.log(element);
});

let arrayMultipliedByFive = array.map((item) => {
    return item * 5;
})

console.log(arrayMultipliedByFive);


let sort = (array) => {
    let compareNumbers = (a, b) => {
        return a - b;
    }
    array.sort(compareNumbers);
    return array;
}

let sortReverse = (array) => {
    let compareNumbers = (a, b) => {
        return b - a;
    }
    array.sort(compareNumbers);
    return array;
}

console.log(sort(array));
console.log(sortReverse(array));


let result = array.reduce((acc, item) => {
    return acc += item;
}, 0)

console.log(result);