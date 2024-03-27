"use strict"

const Guest = {
    name: 'John',
    isRegistered: false,
}

const User = {
    isRegistered: true,
    isAdmin: false,
    email: 'email@mail.com',
    __proto__: Guest
}

const Admin = {
    __proto__: User,
    isAdmin: true,
    addProduct(product){
        console.log(`Я адмін, додаю новий продукт - ${product}`)
    },
}

for (const key in Admin) {
    console.log(key);
}