"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor(id, storage = []) {
        this.id = id;
        this.storage = storage;
    }
    push(item) { this.storage.push(item); }
    pop() { return this.storage.shift(); }
}
class NumberQueue extends Queue {
    constructor(id) {
        super(id);
    }
    push(item) {
        super.push(item);
    }
    pop() {
        return super.pop();
    }
}
const queue = new NumberQueue("queue");
queue.push(0);
queue.push(-"1");
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
