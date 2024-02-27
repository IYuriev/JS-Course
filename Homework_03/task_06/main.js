"use strict"

const month = +prompt('Введіть номер місяця');

if(month % 1 !== 0 || month > 12 || month <= 0){
    alert('Hекоректний номер місяця')
}

if(month === 1 || month === 2 || month === 12){
    alert('Зима');
} else if(month === 3 || month === 4 || month === 5){
    alert('Весна');
} else if(month === 6 || month === 7 || month === 8){
    alert('Літо');
} else if(month === 9 || month === 10 || month === 11){
    alert('Осінь');
}    