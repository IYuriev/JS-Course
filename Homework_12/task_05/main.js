"use strict"

class Customer {
    constructor(name) {
        this.name = name;
        this.shoppingCart = [];
        this.sum = 0;
    }

    addProduct(product) {
        if (product instanceof DiscountProduct) {
            product.calculateDiscountPrice();
        }
        this.shoppingCart.push(product);
        this.sum += product.price;
    }

    removeProduct(product) {
        for (let i = 0; i < this.shoppingCart.length; i++){
            if (product === this.shoppingCart[i]) {
                this.shoppingCart.splice(i, 1);
                this.sum -= product.price;
                break;
            }
        }
    }

    buy() {
        const finishedShoppingCart = this.shoppingCart.map(product => product.name).join(', ')
        console.log(`${this.name} купив товари: ${finishedShoppingCart} на суму ${this.sum}`)
        this.sum = 0;
        this.shoppingCart.length = 0;
    }
}

class Product {
    constructor(title, price){
        this.name = title;
        this.price = price;
    }
}

class DiscountProduct extends Product {
    constructor(title, price, percent) {
        super(title, price);
        this.discountPercent = percent;
    }

    calculateDiscountPrice() {
        this.price *= (1 - this.discountPercent / 100);
    }
}

const eggs = new Product("Яйця", 50);
const porridge = new Product("Гречка", 40);
const sausage = new DiscountProduct("Ковбаса", 120, 5); 
const dumplings = new DiscountProduct("Пельмені", 90, 10); 
const customer = new Customer('Tom Holland');

customer.addProduct(eggs);
customer.addProduct(porridge);
customer.addProduct(sausage);
customer.addProduct(dumplings);
customer.removeProduct(porridge);
customer.buy(); 