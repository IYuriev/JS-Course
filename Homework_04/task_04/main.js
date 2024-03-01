"use strict"

const rows = +prompt('Введіть кількість рядків');
let stars = '*'
let totalStars = '*';

for(let i = 1; i <= rows; i++){
    console.log(totalStars);
    totalStars += stars;
}