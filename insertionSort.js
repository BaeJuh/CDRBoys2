const copiedArr = [5, 3, 2, 4, 7];
const len = copiedArr.reduce((acc, cur) => {
    return acc + 1;
}, 0);

for (let cur = 1; cur < copiedArr.length; cur++) {
    const key = copiedArr[cur];
    for (let prev = cur - 1; prev >= 0; prev--) {
        // (copiedArr[prev] > key) && ([copiedArr[prev+1], copiedArr[prev]] = [copiedArr[prev], copiedArr[prev+1]]);
        if (copiedArr[prev] > key) {
            console.log(copiedArr, ` key : ${key}`);
            [copiedArr[prev+1], copiedArr[prev]] = [copiedArr[prev], copiedArr[prev+1]]
        }
        
    }
}
console.log("result : " + copiedArr);