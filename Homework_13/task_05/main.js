"use strict"

let car1 = {
    model: "Mersedes",
    price: 50000,

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.model;
        }
        if (hint === 'number') {
            return this.price;
        }
        if (hint === 'default') {
            return this.price;
        }
    }

};
    
let car2 = {
    model: "Audi",
    price: 40000,

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.model;
        }
        if (hint === 'number') {
            return this.price;
        }
        if (hint === 'default') {
            return this.price;
        }
    }
};

console.log(car1 + car2);
alert(car1); 
alert(car2); 