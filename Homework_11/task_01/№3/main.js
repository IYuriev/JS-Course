"use strict"

const Animal = {
    sleep(){
        console.log('Я сплю');
    },
}

const Dog = {
    __proto__: Animal,
    showVoice(){
        console.log('Гав!');
    },
}

const Pug = {
    __proto__: Dog,
    name: 'Шарік',
    sayHi(){
        console.log(`Доброго вечора! Мене звати ${this.name}!`);
    },
}

Pug.sleep();
Pug.showVoice();
Pug.sayHi();

Pug.sleep = function() {
    console.log('Я сплю і храплю');
}

Pug.sleep();