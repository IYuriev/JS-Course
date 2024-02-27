"use strict"

const message = prompt('Введіть будь-яке повідомлення');

if(message === null){
    alert('Відміна вводу');
} else if(message === ''){
    alert('Ви нічого не написали');
} else console.log(message);