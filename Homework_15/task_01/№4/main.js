"use strict"

const boom = (count) => {
    let id3 = setInterval(() => {
       if (count === 0) {
        console.log('Boom!!');
        clearInterval(id3);
       } else {
        console.log(count);
        count--;
       }
    }, 1000)
}

boom(5);