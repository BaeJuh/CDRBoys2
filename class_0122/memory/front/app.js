class Front {
    constructor(id) {
        this.id = id;
    }
    $(target) {
        return document.getElementById(target);
    }
    init() {
        const html = `
            <canvas id="canvas" class="canvas" width="400" height="400"></canvas>
        `;
        const css = `
            <style>
                .canvas {
                border: 1px solid black}
            </style>    
        `;
        this.$("main").innerHTML += (html + css);
    }

    draw() {
        class Canvas {
            constructor(id) {
                this.id = `canvas${id}`;

                this.canvas = null;
                this.pen = null;
            }
            init() {
                this.canvas = document.getElementById("canvas");
                this.pen = this.canvas.getContext("2d");
            }
            printDot(x, y) {
                this.pen.fillRect(this.canvas.width / 2 + x, this.canvas.height / 2 - y, 1, 1);
            }

            printText(x, y, text) {
                this.pen.fillText(text, this.canvas.width / 2 + x, this.canvas.height / 2 - y);
            }

            circle() {
                for (let i = 0; i < 360; i += 0.5) {
                    const x = Math.cos(Math.PI * i / 180) * ((this.canvas.width - 1) / 2);
                    const y = Math.sin(Math.PI * i / 180) * ((this.canvas.width - 1) / 2);

                    this.printDot(x, y);
                }
                for (let i=0; i<this.canvas.height/2; i++) {
                    this.printDot(0, i);
                }
            }

            memory(memoryData) {
                const { freemem, totalmem } = memoryData;

                const degree = 90 - (((totalmem - freemem) / totalmem) * 360);
                console.log(degree);

                const x = Math.cos(Math.PI * degree / 180) * ((this.canvas.width - 1) / 2);
                const y = Math.sin(Math.PI * degree / 180) * ((this.canvas.width - 1) / 2);

                this.printText(x, y, `${((totalmem - freemem) / (2**30)).toFixed(2)} 기가`);
                this.drawLine([0, 0], [x, y]);
            }

            drawLine(pos1 = [0, 0], pos2) {
                let [[x1, y1], [x2, y2]] = [pos1, pos2];

                (x1 > x2) && ([[x1, y1], [x2, y2]] = [[x2, y2], [x1, y1]]);

                if (y1 === y2) {
                    (y1 > y2) && ( [y1, y2] = [y2, y1] );

                    for (let i = y1; i<=y2; i++) {
                        this.printDot(0, i)
                    }
                }

                for (let i = x1; i < x2; i++) {
                    const y = ((y1 - y2) / (x1 - x2)) * i;
                    this.printDot(i, y);
                }
            }

            run(memoryData) {
                this.init();
                this.circle();
                this.memory(memoryData);
            }
        }

        const circle = new Canvas(this.id);
        // circle.run();

        this.getMemoryData(circle);
    }

    getMemoryData(circle) {
        const fetchData = async() => {
            const res = await fetch("../Back/memory.json")
            const memoryData = await res.json();

            // console.log(memoryData);
            circle.run(memoryData);
        }
        
        fetchData();
        setInterval(() => {
            fetchData();
        }, 2000);
    }

    run() {
        this.init();
        this.draw();
    }
}

const front = new Front("front");
front.run();