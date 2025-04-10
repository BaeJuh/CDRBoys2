const arr = [1, 2, 3];

console.log(Symbol.iterator in arr);

for (const i of arr) {
    console.log(i);
}

const obj = { a: "1", b: "2" };

console.log(Symbol.iterator in obj);
for (const i in obj) {
    console.log(i);
}

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());