class Matrix {
    constructor(id) {
        this.id = id;
    } 

    multiplication(A, B) {
        const result = [];

        for (let i=0; i<A.length; i++) {
            result.push([]);
            for (let j=0; j<A.length; j++) {
                let temp = 0
                for(let k=0; k<A[0].length; k++) {
                    temp += ( A[i][k] * B[k][j] );
                }
                result[i].push(temp);
            }
        }

        return result;
    }
}

const A = [
    [1, 2, 3],
    [4, 5, 6]
];

const B = [
    [7, 10],
    [8, 11],
    [9, 12]
];

const matrix = new Matrix("main");
console.log(
    matrix.multiplication(A, B)
)