const arr = [1, 2, 3];

(function () {
    iter = arguments[Symbol.iterator]();

    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
})(1, 2);

const iterator = arr[Symbol.iterator]();

for (;;) {
    const {value, done} = iterator.next();

    if (done) break;

    console.log(value);
}