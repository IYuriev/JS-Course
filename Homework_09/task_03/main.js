"use strict"

let array = ["материк", "мошкара", "апельсин", "спанієль", "мінотавр", "ромашка", "норматив", "метрика"];

let aclean = () => {
    let map = new Map();
    
    array.forEach((item) => {
        let sortedItem = item.split('').sort().join('');
        if(!map.has(sortedItem)){
            map.set(sortedItem, item);
        }
    })
    map.forEach((value) => {
        console.log(value);
    });
    
}

aclean(array);