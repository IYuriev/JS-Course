"use strict"

const vehicle = {
    ride(){
        console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`);
    }
}

const car = {
    name: 'автомобілі',
    speed: 60,
    __proto__: vehicle,
}

const bycicle = {
    name: 'велосипеді',
    speed: 20,
    __proto__: vehicle,
}

car.ride();
bycicle.ride();