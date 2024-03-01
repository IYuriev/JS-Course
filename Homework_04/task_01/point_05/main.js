"use strict"

let start = +prompt('Введіть перше число');
const finish = +prompt('Введіть друге число');

for(let i = start; start <= finish; start++){
    if(start % 5 === 0){
        console.log(start);
    }
}