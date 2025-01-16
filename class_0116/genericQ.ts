class Queue<T> {
    protected storage: Array<T> = [];
    push(item: T) {
        this.storage.push(item);
    }
    pop() {
        return this.storage.shift();
    }
}

const numberQueue = new Queue<number>();
numberQueue.push(0);
numberQueue.push(+"1");

console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());

const stringQueue = new Queue<string>();
stringQueue.push("hello");
stringQueue.push("world");

console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());

const objQueue = new Queue<{name: string, age: number}>();
objQueue.push({name: "Bae", age: 27});
objQueue.push({name: "Juhwan", age: 20});

console.log(objQueue.pop());
console.log(objQueue.pop());
console.log(objQueue.pop());

export {}