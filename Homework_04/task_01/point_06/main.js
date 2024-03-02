"use strict"

const number = 3;
let result;

for(let i = 1; i <= 10; i++){
    result = number * i;
    console.log(`${number} помножити на ${i} дорівнює ${result}`);
}

let j = 1;
let result2;

while(j <= 10){
    result2 = number * j;
    console.log(`${number} помножити на ${j} дорівнює ${result2}`);
    j++;
}