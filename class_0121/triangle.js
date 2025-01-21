"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangle {
    constructor(id) {
        this.id = id;
    }
    $(targetId) {
        return document.getElementById(targetId);
    }
    init() {
        const html = `
            <canvas id="canvas" class="canvas" width="300" height="300"></canvas>
        `;
        const css = `
            .canvas {
                border: 1px solid skyblue;
            }
        `;
        this.$("main").innerHTML = `${html}<style>${css}</style>`;
    }
    drawTriangle(a, b, c) {
        class Canvas {
            constructor(id) {
                this.SCALE = 50;
                this.id = id;
                this.canvas = null;
                this.pen = null;
            }
            $(targetId) {
                return document.getElementById(targetId);
            }
            initCanvas() {
                var _a;
                this.canvas = this.$("canvas");
                this.pen = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getContext("2d");
            }
            printDot(x, y) {
                var _a;
                (_a = this.pen) === null || _a === void 0 ? void 0 : _a.fillRect(10 + (x * this.SCALE), this.canvas.height - 10 - (y * this.SCALE), 1, 1);
            }
            crossLine() {
                for (let i = 0; i < (this.canvas.width / this.SCALE); i += (1 / this.SCALE)) {
                    this.printDot(i, 0);
                }
                for (let i = 0; i < (this.canvas.height / this.SCALE); i += (1 / this.SCALE)) {
                    this.printDot(0, i);
                }
            }
            drawTriangle(a, b, c) {
                this.pen.fillStyle = "green";
                const [crossX, crossY] = this.findPos(a, b, c);
                console.log(crossX, crossY);
            }
            findPos(a, b, c) {
                const epsilon = 0.01; // 허용 오차
                for (let i = 0; i <= 90; i += 0.1) {
                    const b_x = Math.cos((Math.PI * i) / 180) * b;
                    const b_y = Math.sin((Math.PI * i) / 180) * b;
                    const c_x = Math.cos((Math.PI * (180 - i)) / 180) * c + a;
                    const c_y = Math.sin((Math.PI * (180 - i)) / 180) * c;
                    if (Math.abs(b_x - c_x) < epsilon) {
                        console.log(`Intersection found at angle: ${i}`);
                        return [b_x, b_y];
                    }
                }
                return null;
            }
            run(a, b, c) {
                this.initCanvas();
                this.crossLine();
                this.drawTriangle(a, b, c);
            }
        }
        const canvas = new Canvas(this.id);
        canvas.run(a, b, c);
    }
    run(a, b, c) {
        this.init();
        this.drawTriangle(a, b, c);
    }
}
const triangle = new Triangle("main");
triangle.run(3, 4, 5);
