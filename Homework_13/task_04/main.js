"use strict"

function Animal(voice) {
    this.voice = voice;
    this.say = function() {
        console.log(this.voice);
    }

    Object.defineProperty(this, 'say', {
        enumerable: false,
    })
}

const dog = new Animal('Гав');
dog.say();

for (let key in dog) {
    console.log(key);
}