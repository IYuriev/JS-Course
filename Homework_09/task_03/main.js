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
    let mapValues = map.values();
    return Array.from(mapValues);
}

console.log(aclean(array));