"use strict"

const title = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('keyup', (event) => {
    title.innerHTML = event.target.value;
})