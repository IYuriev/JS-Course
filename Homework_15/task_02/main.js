"use strict"

function delay(fn, sec) {
    return function() {
        setTimeout(fn, sec * 1000);
    };
}

function sayHi() {
    console.log("Hi!");
}

const delayedSayHi = delay(sayHi, 5);

sayHi();
delayedSayHi();