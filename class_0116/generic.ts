abstract class Queue {
    constructor(public id:string ,protected storage: any[] = []) { }

    push(item: any) { this.storage.push(item); }
    pop() { return this.storage.shift(); }
}

class NumberQueue extends Queue {
    constructor( id:string) {
        super(id);
    }
    push(item: number) {
        super.push(item);
    }
    pop(): number {
        return super.pop();
    }
}

const queue = new NumberQueue("queue");

queue.push(0);
queue.push(-"1");

console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());

export {}