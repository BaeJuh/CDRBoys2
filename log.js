"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logFormula = (x, y, z) => {
    return (x || (!x && y && z) || (y && z)) ? "1" : "0";
};
const result = [];
const allEvent = (count, oneEvent = []) => {
    const boolEvent = [true, false];
    let temp = [...oneEvent];

    if (temp.length === count) {
        result.push(temp);
        return;
    } else {
        boolEvent.forEach((bool) => {
            temp.push(bool);
            allEvent(count, temp);
            temp = [...oneEvent];
        });
    }
};
allEvent(3);
// console.log(result);

const boolTable = {
    x: [true, false],
    y: [true, false],
    z: [true, false]
}
const boolArr = [
    [true, false],
    [true, false],
    [true, false]
];

const resultArr = [];

const shuffle = (rotate = [], data) => {
    // if (rotate.length === 3) {
    //     resultArr.push(rotate);
    //     return;
    // } else {
    // if (Array.isArray(data)) {
    //     for (let i = 0; i < 2; i++) {
    //         const temp = [...rotate];
    //         console.log(i)
    //         temp.push(data[rotate.length][i]); // [0-2][0-1]
    //         shuffle(temp, data);
    //     }
    // } else {
    //     for (const key in data) {
    //         const temp = [...rotate];
    //         temp.push( data[key][rotate.length] );
    //         shuffle(temp, data[key]);
    //     }
    // }

    // }
    for (const key in data) {
        if (rotate.length === 3) {
            resultArr.push(rotate);
            return;
        } else {
            for (let i = 0; i < 2; i++) {
                const temp = [...rotate];
                temp.push(data[key][i]); // [0-2][0-1]
                shuffle(temp, data);
            }
        }
    }
}

shuffle([], boolTable);
console.log(resultArr);

