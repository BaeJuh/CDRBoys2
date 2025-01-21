const matrix1: boolean[][] = [
    [true, false, false],
    [true, true, true]
];

const matrix2: boolean[][] = [
    [false, true],
    [true, true],
    [true, false]
];

const result: boolean[][] = [];

for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix2[j].length; j++) {
        let temp: boolean = false;
        for (let k = 0; k < matrix1[i].length; k++) {
            temp = temp || (matrix1[i][k] && matrix2[k][j]);
        }
        result[i].push(temp);
    }
}

console.log(result);

const swapMatrix: boolean[][] = [];
for (let i = 0; i < matrix2[i].length; i++) {
    swapMatrix.push([]);
    for (let j = 0; j < matrix2.length; j++) {
        swapMatrix[i].push(matrix2[j][i]);
    }
}

const r: boolean[][] = matrix1.map((m1Row) => {
    return swapMatrix.map((m2Row) => {
        return m1Row.reduce((acc, cur, i) => {
            return acc || (m1Row[i] && m2Row[i]);
        }, false);
    });
});

console.log(r);

export {};