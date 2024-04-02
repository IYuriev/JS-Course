"use strict"

class Car {
    constructor(name, speed) {
        this.model = name;
        this.speed = speed;
    }

    ride() {
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
    }

    gase() {
        this.speed += 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }

    brake() {
        this.speed -= 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }
}

const bmw = new Car("BMW", 50);
console.log('--------BMW--------');
bmw.ride();
bmw.gase(); 
bmw.gase();
bmw.brake(); 
bmw.stop();

console.log('--------Mersedes--------');
const mersedes = new Car('Mersedes', 45);
mersedes.ride();
mersedes.brake();
mersedes.brake();
mersedes.stop();
mersedes.gase(); 
mersedes.gase();
mersedes.gase(); 
mersedes.gase();
mersedes.gase();