"use strict"

let fib = (n) => {
    let firstEl = 0;
    let result = 1;
    
    for(let i = 1; i < n; i++){
        result += firstEl;
        firstEl = result - firstEl;
    }
    console.log(result);
}
fib();