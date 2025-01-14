class DoubleLinkedListContainer {
    constructor(id) {
        this.id = id;
        this.nodeLength = 0;
        this.firstNode = null;
        this.lastNode = null;
        this.variableId = 0;
    }

    pushNode(nodeValue) {
        class Node {
            constructor(id, value) {
                this.id = id;
                this.value = value;
                this.prevNode = null;
                this.nextNode = null;
            }
        }
        if (this.nodeLength === 0) {
            const node = new Node(this.variableId, nodeValue);
            //"ㅁ"(firstNode) 퍼스트 노드 설정
            this.firstNode = node;
        } else if (this.nodeLength === 1) {
            const node = new Node(this.variableId, nodeValue);
            // "ㅁ" "ㅁ"
            // "ㅁ" => "ㅁ" 첫번째 노드의 뒷 노드 설정
            this.firstNode.nextNode = node;
            //"ㅁ" <= "ㅁ" 두번째 노드의 앞 노드 설정
            node.prevNode = this.firstNode;
            //"ㅁ" "ㅁ"(lastNode) 라스트 노드 설정
            this.lastNode = node;
        } else {
            // 노드가 2개이상 일때
            const node = new Node(this.variableId, nodeValue);
            //"ㅁ" "ㅁ" => "ㅁ" 라스트노드의 뒷 노드 설정
            this.lastNode.nextNode = node;
            //"ㅁ" "ㅁ" <= "ㅁ" 신규노드의 앞 노드를 라스트로 설정
            node.prevNode = this.lastNode;
            //라스트 노드를 신규등록노드로 변경
            this.lastNode = node;
            this.lastNode.nextNode = null;
        }
        this.nodeLength++;
        this.variableId++;
    }
    shiftNode() {
        const returnValue = this.firstNode.value;
        // 노드개수가 0일때
        if (this.nodeLength === 0) {
            return "";
            // 노드개수가 1개일때때
        } else if (this.nodeLength === 1) {
            // First, last node 초기화화
            this.firstNode = null;
            this.lastNode = null;
            this.nodeLength--;
            return returnValue;
            // 2개이상일때 
        } else {
            this.firstNode.nextNode.prevNode = null;
            this.firstNode = this.firstNode.nextNode;

            this.nodeLength--;
        }

        return returnValue;
    }
}

class Queue {
    constructor(id) {
        this.id = id;
        this.storage = new DoubleLinkedListContainer("dllc");
    }

    push(item) {
        this.storage.pushNode(item);
    }
    shift() {
        return this.storage.shiftNode();
    }
}

const queue = new Queue("queue");
queue.push("test1");
queue.push("test2");
queue.push("test3");
queue.push("test4");
queue.push("test5");

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
queue.push("test6");
queue.push("test7")

console.log(queue.storage);
