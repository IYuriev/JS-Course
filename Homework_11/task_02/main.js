"use strict"

const user = {
    _name: '',
    _age: 0,

    get age(){
        return this._age;
    },
    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        } else {
            console.log('Error age');
        }
    },

    get name(){
        return this._name;
     },
    set name(newName){
        if (!(newName.length < 2)){
            this._name = newName;
        } else {
            console.log('Error name');
        }
    },
}

user.age = -1;
user.name = 'A';
user.age = 18;
user.name = 'Peter';
console.log(`My name is ${user._name} I'm ${user._age} years old`);