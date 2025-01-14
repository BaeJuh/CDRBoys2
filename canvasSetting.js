class Graph {
    constructor(id) {
        this.id = id;

        this.canvas = null;
        this.pen = null;

        this.scale = 30;
    }

    init() {
        const canvas = document.createElement("canvas");
        [canvas.width, canvas.height] = [500, 500];
        canvas.id = "canvas";
        canvas.className = "canvas";
        canvas.style = "border: 1px solid red";

        document.getElementById("main").appendChild(canvas);
        this.canvas = canvas;
        this.pen = canvas.getContext("2d");
    }

    printDot(x, y) {
        this.pen.fillRect(this.canvas.width / 2 + (x * this.scale), this.canvas.height / 2 - (y * this.scale), 1, 1);
    }

    axis() {
        for (let i = 0; i < this.canvas.width / 2; i += (1 / this.scale)) {
            this.printDot(i, 0);
            this.printDot(-i, 0);
        }
        for (let i = 0; i < this.canvas.height / 2; i += (1 / this.scale)) {
            this.printDot(0, i);
            this.printDot(0, -i);
        }
        for (let x = 1; x < this.canvas.width / this.scale; x++) {
            for (let j = 0; j < 5; j++) {
                this.printDot(x, j / (this.scale));
                this.printDot(x, -j / (this.scale));
                this.printDot(-x, j / (this.scale));
                this.printDot(-x, -j / (this.scale));
            }
        }
        for (let y = 1; y < this.canvas.width / this.scale; y++) {
            for (let j = 0; j < 5; j++) {
                this.printDot(j / (this.scale), y);
                this.printDot(-j / (this.scale), y);
                this.printDot(j / (this.scale), -y);
                this.printDot(-j / (this.scale), -y);
            }
        }
    }

    run() {
        this.init();
        this.axis();
    }
}

const graph = new Graph("main");
graph.run();