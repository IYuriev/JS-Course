"use strict"

let calculator = {
    read,
    sum,
    mul,
}

function read(num1, num2) {
    calculator.num1 = num1;
    calculator.num2 = num2;
}

function sum() {
    console.log(this.num1 + this.num2);
}

function mul() {
    console.log(this.num1 * this.num2);
}

calculator.read(2, 3);
calculator.sum();
calculator.mul();