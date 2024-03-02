"use strict"

const start = +prompt('Введіть перше число');
const finish = +prompt('Введіть друге число');

for(let i = start; i <= finish; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

let j = start;

while(j <= finish){
    if(j % 5 === 0){
        console.log(j);
    }
    j++;
}