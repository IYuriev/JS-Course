"use strict"

const showDelay = (msg) => {
    setTimeout(() => {
        console.log(msg)
    }, 2000)
}

showDelay('Hello world');