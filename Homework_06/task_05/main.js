"use strict"

let capitalize = (str) => {
    let strUpperCase = str.substring(0, 1).toUpperCase();
    let strLowerCase = str.substring(1).toLowerCase();
    return strUpperCase + strLowerCase;
}

let toCamelCase = (str) => {
    let parts = str.split('_');
    for(let i = 1; i < parts.length; i++){
        parts[0] += capitalize(parts[i]);
    }
    return parts[0];
}

console.log(toCamelCase('user_first_name'));