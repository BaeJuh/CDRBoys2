class LinkedList {
    constructor(id) {
        this.id = id;
        this.head = null;
        this.tail = null;
    }

    insertNode(node) {
        const nodeData = {index: this.nodeCount(), data: node};


    }

    removeItem(index) {

    }

    nodeCount() {
        // count node from head
        let [curNode, count] = [this.head, 0];
        while (curNode !== null) {
            curNode = curNode.next;
            count += 1;
        }

        return count;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this._next = null;
        this._prev = null;
    }
    get next() {
        return this._next;
    }
    set next(node) {
        this._next = node;
    }
    get prev() {
        return this._prev;
    }
    set prev(node) {
        this._prev = node;
    }
}