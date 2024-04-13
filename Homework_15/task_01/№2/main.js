"use strict"

const repeat = (msg) => {
    setInterval(() => {
        console.log(msg);
    }, 2000)
}

repeat('Привіт');