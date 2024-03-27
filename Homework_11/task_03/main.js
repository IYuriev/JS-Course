"use strict"

function Triangle(a, b ,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.getSquare = function(){
    const p = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        console.log(result.toFixed(2));
}

const triangle1 = new Triangle(5, 4, 3);
const triangle2 = new Triangle(5, 5, 2);
const triangle3 = new Triangle(4, 4, 4);

triangle1.getSquare();
triangle2.getSquare(); 
triangle3.getSquare(); 