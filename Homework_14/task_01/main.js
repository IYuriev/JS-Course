"use strict"

const print = (start, end) => {
    console.log(start);
    if (start >= end) {
        return;
    }
    print(++start, end);
}

console.log('----First func----');
print(1, 5);

const fuctorial = (num) => {
    if (num === 1) {
        return 1;
    }

    return num * fuctorial(num - 1);
}

console.log('----Second func----');
console.log(fuctorial(5));

const createMultBy = (num) => {
    return function(num2) {
        return num * num2;
    }
}

const multBy5 = createMultBy(5);
const multBy2 = createMultBy(2);
console.log('----Third func----');

console.log(multBy5(4));
console.log(multBy5(6));

console.log(multBy2(4)); 
console.log(multBy2(6)); 