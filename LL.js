class Node {
    constructor(id) {
        this.id = id;
        this._value = null;
    }
    set value(value) { this._value = value; }
    get value() { return this._value; }
}

class DoublyLinkedList extends Node {
    constructor(id) {
        super(id);
        this.next = null;
        this.prev = null;
    }

    setNext(node) {
        this.next = node;
    }

    setPrev(node) {
        this.prev = node;
    }

    getNext() {
        return this.next;
    }

    getPrev() {
        return this.prev;
    }
}

class Queue {
    constructor(id) {
        this.id = id;
        this.first = null;
        this.last = null;

        this.length = 0;
    }

    push(data) {
        const newNode = new DoublyLinkedList(this.length);
        newNode.value = data;
        if (this.first === null && this.last === null) { // 최초상태
            newNode.setNext(null);
            newNode.setPrev(null);
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.setNext(newNode);
            this.last = newNode;
            this.last.setNext(null);
        }
        this.length ++;
    }

    shift() {
        if (this.first === null && this.last === null || false) {
            return null;
        } else {
            const result = this.first.value;
            this.first = this.first.getNext();
            if (this.first === null) { 
                this.last = null;
                return result; 
            }
            this.first.setPrev(null);

            this.length --;
            return result;
        }
    }
}

const queue = new Queue("?");
queue.push("1");
queue.push("2");
queue.push("3");

while (true) {
    const testing = queue.shift();
    if (testing === null) { break; }
    else { console.log(testing); }
}