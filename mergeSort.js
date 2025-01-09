// const copiedArr = [21, 10, 12, 20, 25, 13, 15, 22];
const copiedArr = [38, 27, 43, 3, 9, 82, 10, 9, 55];

const len = copiedArr.reduce((acc, cur) => {
    return acc + 1;
}, 0);

const merge = (arrA = [], arrB = []) => {
    const result = [];
    let [posA, posB] = [0, 0];

    const processCount = arrA.length + arrB.length;

    for (let i = 0; i < processCount; i++) {
        if (arrA[posA] <= arrB[posB] || posB === arrB.length) {
            result.push(arrA[posA]);
            posA += 1;
            continue;
        }
        if (arrB[posB] <= arrA[posA] || posA === arrA.length) {
            result.push(arrB[posB]);
            posB += 1;
            continue;
        }
    }

    return result;
}

let arr = copiedArr.map(v => [v]);
// console.log(arr)

while (true) {
    let mergeArr = [];
    let temp = null;

    for (let i = 0; i < arr.length; i += 2) {
        temp = merge(arr[i], arr[i + 1]);

        mergeArr.push(temp);
    }
    console.log("----------");
    console.log(mergeArr);
    console.log("----------");
    arr=mergeArr;
    if (temp.length === len) {
        break;
    }
    
}

// console.log(arr)