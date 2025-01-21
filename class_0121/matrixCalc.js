"use strict";
const matrix = [
    [3, -1, -2],
    [-4, 2, 1],
    [1, 4, -3]
];
const largeA = [];
for (let i = 0; i < matrix.length; i++) {
    largeA.push([...matrix[i]]);
    for (let j = 0; j < matrix[i].length - 1; j++) {
        largeA[i].push(matrix[i][j]);
    }
}
console.log(largeA);
