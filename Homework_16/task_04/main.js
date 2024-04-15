"use strict"

console.log('start');

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }   
}

const promise = (n) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fibonacci(n));
        }, 0)
    })
}

promise(44).then((result) => {
        console.log(result);
})

console.log('end');