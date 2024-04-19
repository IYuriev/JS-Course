"use strict"

const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log("Клік");
})

button.addEventListener('contextmenu', () => {
    console.log("Правий клік");
})

button.addEventListener('dblclick', () => {
    console.log("Подвійний клік");
})

document.addEventListener('keyup', (event) => {
    alert(event.key);
})