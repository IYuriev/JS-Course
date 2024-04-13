"use strict"

class Timer {
    constructor() {
        this.i = 0;
        this.id = null;
    }

    start() {
            this.id = setInterval(() => {
            this.i++;
            console.log(this.i);
        }, 1000)
    }

    stop() {
        clearInterval(this.id);
        this.i = 0;
        console.log(`Таймер сброшений`);
    }

    pause() {
        clearInterval(this.id);
    }

    show() {
        console.log(`Поточний лічильник: ${this.i}`);
    }
}

const newTimer = new Timer;

newTimer.start(); 

setTimeout(() => {
 newTimer.pause();
}, 5000);


setTimeout(() => {
 newTimer.start();
}, 7000);


setTimeout(() => {
 newTimer.stop();
 newTimer.show();
}, 9000);