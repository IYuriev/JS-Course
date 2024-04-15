"use strict"

const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    }) 
}

delay(3000).then(() => alert('виконалось через 3 секунди'));