const mat1: number[][] = [
    [0, 6, 1],
    [3, 5, 2]
];

const mat2: number[][] = [
    [1, 0, 2],
    [9, 3, 8],
    [4, 7, 5]
];

const Mul:any = [];

for(let i=0; i<mat1.length; i++) {
    Mul.push([]);
    for(let j=0; j<mat1.length; j++) {
        let temp:number = 0;
        for(let k=0; k<mat1[0].length; k++) {
            temp += ( mat1[i][k] + mat2[k][j] );
        }
        Mul[i].push(temp);
    }
}

console.log(Mul);

// mat[i].reduce(acc, cur, index => {
//  acc + 
// })