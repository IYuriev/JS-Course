"use strict"

function delay(fn, sec) {
    return setTimeout(() => {
        fn();
    }, sec * 1000);
}

function sayHi() {
	console.log("Hi!");
}

sayHi();
delay(sayHi, 3);