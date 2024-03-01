"use strict"

const userMassage = prompt('Введіть будь-яке повідомлення');

switch(userMassage){
    case null:
        alert('Відміна вводу');
        break;
    case '':
        alert('Ви нічого не написали');
        break;
    default:
        console.log(userMassage);        
        break;
}