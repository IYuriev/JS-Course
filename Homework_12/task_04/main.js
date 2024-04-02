"use strict"

class Viacle {
    constructor(speed) {
        this.speed = speed;
    }

    ride() {
        console.log(`Їде зі швидкістю ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`Стоїть. Швидкість ${this.speed}`);
    }
}

class Bicycle extends Viacle {
    constructor(type, speed) {
        super(speed);
        this.type = type;
    }

    ride() {
        super.ride();
        console.log('Крутить педалі');
    }
}

class Bus extends Viacle {
    constructor(type, speed) {
        super(speed);
        this.type = type;
    }
    
    refuel() {
        super.stop();
        console.log('Заправляється');
    }
}

console.log('Bicycle');

const bicycle = new Bicycle("BMX", 25);
bicycle.ride();
bicycle.stop();
console.log(bicycle.type);
console.log(bicycle.speed);
console.log('');

console.log('Bicycle_2');
const bicycle2 = new Bicycle('BMX_2', 15)
bicycle2.ride();
console.log(bicycle2.type);
console.log(bicycle2.speed);
bicycle2.stop();
console.log('');


console.log('Автобус Богдан');
const bus = new Bus('Богдан', 50);
bus.ride();
bus.refuel();
console.log(bus.type);
console.log(bus.speed);
console.log('');

console.log('Автобус Богдан поспішає');
const busHurry = new Bus('Богдан', 110);
busHurry.ride();
console.log(busHurry.type);
console.log(busHurry.speed);