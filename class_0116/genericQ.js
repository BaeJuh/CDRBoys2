"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.storage = [];
    }
    push(item) {
        this.storage.push(item);
    }
    pop() {
        return this.storage.shift();
    }
}
const numberQueue = new Queue();
numberQueue.push(0);
numberQueue.push(+"1");
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed());
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed());
console.log((_c = numberQueue.pop()) === null || _c === void 0 ? void 0 : _c.toFixed());
const stringQueue = new Queue();
stringQueue.push("hello");
stringQueue.push("world");
console.log((_d = stringQueue.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase());
console.log((_e = stringQueue.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase());
console.log((_f = stringQueue.pop()) === null || _f === void 0 ? void 0 : _f.toUpperCase());
const objQueue = new Queue();
objQueue.push({ name: "Bae", age: 27 });
objQueue.push({ name: "Juhwan", age: 20 });
console.log(objQueue.pop());
console.log(objQueue.pop());
console.log(objQueue.pop());
