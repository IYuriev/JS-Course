"use strict";


let shoppingCart = {
    items: [],
    totalPrice: 0,
    addItem,
    removeItem,
    calculateTotalPrice,
}

function addItem(title, price) {
    this.items.push({ title, price });
    this.totalPrice += price;
    return this;
}

function removeItem(title) {
    const index = this.items.findIndex(item => item.title === title);
    if (index !== -1) {
        this.totalPrice -= this.items[index].price;
        this.items.splice(index, 1);
    }
}

function calculateTotalPrice() {
    console.log(this.totalPrice);
}

shoppingCart.addItem("iPhone", 1500);
shoppingCart.addItem("Книга", 30);
shoppingCart.addItem("Чашка", 5);
shoppingCart.removeItem("Чашка");
shoppingCart.calculateTotalPrice();

shoppingCart.addItem("iPhone", 1500).addItem("Книга", 30).addItem("Чашка", 5).removeItem("Чашка");
shoppingCart.calculateTotalPrice();