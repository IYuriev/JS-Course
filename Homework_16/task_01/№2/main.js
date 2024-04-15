"use strict"

const delayedMsg = (msg) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg);
        }, 2000)
    })
}

delayedMsg('Hello').then((result) => {
    console.log(result);
})