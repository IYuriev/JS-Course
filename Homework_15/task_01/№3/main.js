"use strict"

let id2 = setTimeout(function repeat() {
    console.log('Hi')
    id2 = setTimeout(repeat, 2000)
}, 2000)