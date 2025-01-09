const copiedArr = [7, 4, 5, 1, 3];
const len = copiedArr.reduce((acc, cur) => {
    return acc + 1;
}, 0);

for (let i=0; i<len-1; i++) {
    for (let j=0; j<len-i; j++) {
        // if ( copiedArr[j] > copiedArr[j+1] ) {
        //     [copiedArr[j], copiedArr[j+1]] = [copiedArr[j+1], copiedArr[j]];
        //     console.log(copiedArr)
        // }

        (copiedArr[j] > copiedArr[j+1]) && ([copiedArr[j], copiedArr[j+1]] = [copiedArr[j+1], copiedArr[j]]);
    }
}

console.log("result : " + copiedArr);