"use strict"

function showInfo() {
    return `${this.level} ${this.position} заробляє ${this.salary}`;
}

let employee = {
	salary: 2000,
	taxes: 200,
	position: "front-end developer",
	level: "middle",
    showInfo,
}

for(let key in employee){
    if(typeof employee[key] === 'number'){
        employee[key] *= 2;
    }
}

console.log(employee.showInfo());

let employee2 = {
	salary: 1500,
	taxes: 150,
	position: "back-end developer",
	level: "junior",
    showInfo,
}

console.log(employee2.showInfo());