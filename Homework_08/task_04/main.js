"use strict"


let popularNumber = (array) => {
    let toSortArray = (a, b) => {
        return a - b;
    };

    let sortedArray =  array.toSorted(toSortArray);
    
    let result = sortedArray.reduce((prev, curr) => {
        let amountPrev = array.filter((item) => {
            return item === prev;
        }).length;
        let amountCurr = array.filter((item) => {
            return item === curr;
        }).length;

        return (amountCurr >= amountPrev) ? curr : prev;
    })
    return result;
}

console.log(popularNumber([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));