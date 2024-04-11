"use strict"

function memoization(fn) {
    const cache = new Map();
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
      }
    };
}
  
 
function expensiveOperation(n) {
    return n * 2;
}
  
const memoizedExpensiveOperation = memoization(expensiveOperation);
console.log(memoizedExpensiveOperation(5));
console.log(memoizedExpensiveOperation(5));
console.log(memoizedExpensiveOperation(10));
console.log(memoizedExpensiveOperation(10));
  