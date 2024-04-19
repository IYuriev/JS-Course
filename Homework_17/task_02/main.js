"use strict"

const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const result = document.querySelector('.result')

const addButton = document.querySelectorAll('button')[0];
const minusButton = document.querySelectorAll('button')[1];
const multiplyButton = document.querySelectorAll('button')[2];
const divideButton = document.querySelectorAll('button')[3];
const equalButton = document.querySelectorAll('button')[4];

addButton.addEventListener('click', () => {  
    result.value = (+value1.value) + (+value2.value);
})

minusButton.addEventListener('click', () => {
    result.value = (+value1.value) - (+value2.value);
})

multiplyButton.addEventListener('click', () => {
    result.value = (+value1.value) * (+value2.value);
})

divideButton.addEventListener('click', () => {
    result.value = (+value1.value) / (+value2.value);
})

equalButton.addEventListener('click', () => {
    result.value = (+value1.value) === (+value2.value);
})