"use strict";

const addColor = document.querySelector('.color');
const createButton = document.querySelector('button');

const reservedColors = [];

addColor.addEventListener('keyup', (event) => {
    reservedColors.push(event.target.value);
});

createButton.addEventListener('click', () => {
    const color = reservedColors[reservedColors.length - 1];

    if (isCorrectColor(color)) {
        const button = document.createElement('button');
        button.innerHTML = color;

        button.addEventListener('click', () => {
            document.body.style.backgroundColor = color;
        });

        document.body.append(button);
    } else {
        alert('Цей колір не є зарезервованим у CSS');
    }
});

const isCorrectColor = (colorName) => {
    let div = document.createElement("div");
    div.style.color = "transparent";
    div.style.color = colorName;

    return div.style.color !== "transparent";
};