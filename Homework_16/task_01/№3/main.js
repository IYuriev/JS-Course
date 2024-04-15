"use strict"

new Promise((resolve, reject) => {
    let random = Math.random();
    setTimeout(() => {
        if(random < 0) {
            resolve(`Result: ${random}`);
        } else {
            reject('Error!');
        }

    }, 2000)
    
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})