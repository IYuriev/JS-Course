"use strict"

const cook = (customers) => {
    for (const name in customers) {
        let array = new Array;
        let time = 0;
        for (const item of customers[name]) {
            array.push(item.name);
            if (item.time > time) {
                time = item.time;
            }
        }
        setTimeout(() => {
            console.log(`Шановний відвідувач, ${name} ваше замовлення готове: ${array.join(', ')}. Смачного!`)
        }, time)
       }
}


const customers = {
    "Katy Perry": [
     { name: "Borsh", time: 5000 },
     { name: "vareniki", time: 1000 },
     { name: "uzvar", time: 500 },
    ],
    "Cristiano Ronaldo": [
     { name: "Soup", time: 7000 },
     { name: "porridge", time: 1000 },
     { name: "water", time: 100 },
    ],
    "Jason Statham": [
     { name: "fried potatoes", time: 6000 },
     { name: "steak", time: 10000 },
     { name: "juice", time: 100 },
    ],
};


cook(customers);