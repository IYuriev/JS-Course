"use strict"

function showResults(promise1, promise2, promise3) {
    Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
}

const promise1 = new Promise((resolve) => {
    resolve('Hi!');
});

const promise2 = new Promise((resolve, reject) => {
    reject('Bye!');
});

const promise3 = new Promise((resolve) => {
    resolve('Hello!');
});

showResults(promise2, promise1, promise3);
