"use strict"

const admin = 'Admin';
const password = 'TheMaster';
const login = prompt('Who\'s there?');


if(login === 'Admin'){
    const enterPassword = prompt('Enter password');
    if(enterPassword === password) {
        alert('Welcome!');
    } else if(enterPassword === null){
        alert('Canceled');
    } else alert('Wrong password');   
} else if(login === null){
    alert('Canceled');
} else alert('I don\'t know you');