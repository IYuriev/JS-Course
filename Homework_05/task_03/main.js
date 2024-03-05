"use strict"

let sumOrConcatination = (value1 = 15, value2 = 15) => {
    let result = value1 + value2;
    if(typeof value1 === 'string' || typeof value2 === 'string'){
        console.log(`Результат конкатенації: ${result}`);
    } else if(typeof value1 === 'number' && typeof value2 === 'number'){
        console.log(`Результат суми: ${result}`);
    } else {
        console.log(`Некоректні аргументи`);
    }
}
sumOrConcatination(11, 90);
sumOrConcatination('message', 123);
sumOrConcatination();