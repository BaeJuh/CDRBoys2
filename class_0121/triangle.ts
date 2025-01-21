class Triangle {
    public id: string;
    constructor(id: string) {
        this.id = id;
    }

    $(targetId: string): HTMLElement | null {
        return document.getElementById(targetId);
    }

    init(): void {
        const html: string = `
            <canvas id="canvas" class="canvas" width="300" height="300"></canvas>
        `;

        const css: string = `
            .canvas {
                border: 1px solid skyblue;
            }
        `;

        this.$("main").innerHTML = `${html}<style>${css}</style>`;
    }

    drawTriangle(a: number, b: number, c: number) {
        class Canvas {
            private readonly SCALE: number = 50;
            public id: string;
            private canvas: HTMLElement | null;
            private pen: CanvasRenderingContext2D | null;
            constructor(id: string) {
                this.id = id;
                this.canvas = null;
                this.pen = null;
            }

            $(targetId: string): HTMLElement | null {
                return document.getElementById(targetId);
            }

            initCanvas(): void {
                this.canvas = this.$("canvas");
                this.pen = this.canvas?.getContext("2d");
            }

            printDot(x: number, y: number): void {
                this.pen?.fillRect(10 + (x * this.SCALE), this.canvas.height - 10 - (y * this.SCALE), 1, 1);
            }

            crossLine(): void {
                for (let i = 0; i < (this.canvas.width / this.SCALE); i += (1 / this.SCALE)) {
                    this.printDot(i, 0);
                }
                for (let i = 0; i < (this.canvas.height / this.SCALE); i += (1 / this.SCALE)) {
                    this.printDot(0, i);
                }
            }

            drawTriangle(a: number, b: number, c: number) {
                this.pen.fillStyle = "green";

                const [crossX, crossY] = this.findPos(a, b, c);
                console.log(crossX, crossY);
            }

            findPos(a: number, b: number, c: number): [number, number] | null {
                const epsilon = 0.01; // 허용 오차
                for (let i = 0; i <= 90; i += 0.1) {
                    const b_x: number = Math.cos((Math.PI * i) / 180) * b;
                    const b_y: number = Math.sin((Math.PI * i) / 180) * b;

                    const c_x: number = Math.cos((Math.PI * (180 - i)) / 180) * c + a;
                    const c_y: number = Math.sin((Math.PI * (180 - i)) / 180) * c;

                    if (Math.abs(b_x - c_x) < epsilon) {
                        console.log(`Intersection found at angle: ${i}`);
                        return [b_x, b_y];
                    }
                }
                return null;
            }

            run(a: number, b: number, c: number): void {
                this.initCanvas();
                this.crossLine();
                this.drawTriangle(a, b, c);
            }
        }
        const canvas = new Canvas(this.id);
        canvas.run(a, b, c);
    }

    run(a: number, b: number, c: number) {
        this.init();
        this.drawTriangle(a, b, c);
    }
}

const triangle = new Triangle("main");
triangle.run(3, 4, 5);

export {};