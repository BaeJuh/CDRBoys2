"use strict";
const matrix1 = [
    [2, 1, 4, 0],
    [-7, 3, 6, 1],
    [8, -4, -2, 3],
    [1, 9, 4, -2]
];
const matrix2 = [
    [7, -1, 2, 4],
    [2, 8, -5, 1],
    [-3, -4, 2, -2],
    [9, 6, -2, 0]
];
const result = matrix2.map((row, row_i) => {
    return row.map((num, i) => {
        return num - matrix1[row_i][i];
    });
});
console.log(result);
