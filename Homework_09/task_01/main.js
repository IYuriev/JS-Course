"use strict"

let map = new Map();

map.set('Hello', 'string')
   .set(123, 'number')
   .set(false, 'boolean')
   .set({}, 'object')
   .set(Symbol('error'), 'Symbol')
   .set(undefined, 'undefined')
   .set(null, 'null')
   .set(321n, 'bigInt');

map.forEach((value, key) => {
    console.log(key, value);
});


let entriesMap = map.entries();
let object = Object.fromEntries(entriesMap);

console.log(object);

let mapEntries = Object.entries(object);
let map2 = new Map(mapEntries)

console.log(map2);