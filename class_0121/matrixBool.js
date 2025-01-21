"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matrix1 = [
    [true, false, false],
    [true, true, true]
];
const matrix2 = [
    [false, true],
    [true, true],
    [true, false]
];
const result = [];
for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix2[j].length; j++) {
        let temp = false;
        for (let k = 0; k < matrix1[i].length; k++) {
            temp = temp || (matrix1[i][k] && matrix2[k][j]);
        }
        result[i].push(temp);
    }
}
console.log(result);
const swapMatrix = [];
for (let i = 0; i < matrix2[i].length; i++) {
    swapMatrix.push([]);
    for (let j = 0; j < matrix2.length; j++) {
        swapMatrix[i].push(matrix2[j][i]);
    }
}
const r = matrix1.map((m1Row) => {
    return swapMatrix.map((m2Row) => {
        return m1Row.reduce((acc, cur, i) => {
            return acc || (m1Row[i] && m2Row[i]);
        }, false);
    });
});
console.log(r);
