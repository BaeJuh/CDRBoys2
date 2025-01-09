class Heap {
    // Max Heap ( parent is bigger than child )
    constructor(id) {
        this.id = id;

        this.storage = [undefined]; // 계산의 편의를 위해 첫 칸 비워둠.
        this.length = 0;
    }

    insertHeap(value) {
        this.storage.push(value);
        let curPos = this.length + 1;

        while (curPos !== 1) {
            const parentPos = Math.floor(curPos / 2);
            if (this.storage[curPos] > this.storage[parentPos]) { [this.storage[curPos], this.storage[parentPos]] = [this.storage[parentPos], this.storage[curPos]]; }
            else { break; }

            curPos = parentPos;
        }

        this.length = this.updateLength(); // 삽입이 완료되면 길이 업데이트
    }

    removeHeap() {
        const root = this.storage[1];
        this.storage[1] = this.storage.pop();
        
        let curPos = 1;


        while (curPos < this.length) {
            const childPos = this.storage[curPos * 2] > this.storage[curPos * 2 + 1] || this.storage[curPos * 2 + 1] === undefined ? curPos * 2 : curPos * 2 + 1; // 자식 중 작은 위치
            if (this.storage[curPos] < this.storage[childPos]) { [this.storage[curPos], this.storage[childPos]] = [this.storage[childPos], this.storage[curPos]]; }
            else { break; }

            curPos = childPos;
        }

        this.length = this.updateLength();
        return root;
    }

    updateLength() {
        return this.storage.reduce(acc => acc += 1, -1);
    }
}

data = [10, 4, 8, 5, 12, 2, 6, 11, 3, 9, 7];

class HeapSort {
    constructor(id) {
        this.id = id;
        this.heap = null;
    }

    initHeap(data) {
        this.heap = new Heap(this.id);
        data.forEach( num => {
            this.heap.insertHeap(num);
        } );
        console.log(this.heap.storage)
    }

    sortProcess() {
        const sortedArray = [];

        while(true) {
            if (this.heap.updateLength === 0) break;
            const num = this.heap.removeHeap();
            console.log(num);
            
            sortedArray.push(num);
        }

        return sortedArray;
    }

    run(data = []) {
        this.initHeap(data);

        return this.sortProcess();
    }
}

const heapSort = new HeapSort("heapSort");
console.log(heapSort.run(data));