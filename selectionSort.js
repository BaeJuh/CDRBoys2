const copiedArr = [5, 3, 2, 4, 7];
const len = copiedArr.reduce((acc, cur) => {
    return acc + 1;
}, 0);

for (let i=0; i<len-1; i++) {
    let minPos = i;
    for (let j=i+1; j<len; j++) {
        // if (copiedArr[j] < copiedArr[minPos] ) {
        //     minPos = j;
        // }
        (copiedArr[j] < copiedArr[minPos] ) && (minPos = j);
    }
    [copiedArr[i], copiedArr[minPos]] = [copiedArr[minPos], copiedArr[i]];
}

console.log("result : " + copiedArr);