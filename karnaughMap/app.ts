class KarnaughMap {
    private readonly ROW = 2;
    private readonly COL = 2;

    public id: string;
    private karMap: boolean[][] | null;

    constructor(id: string,) {
        this.id = id;
        this.karMap = null;
    }

    setKarMap() {
        this.karMap = [...new Array(this.ROW)].map(() => {
            return [...new Array(this.COL)].map(() => {
                return false;
            });
        });
    }

    initBoxes() {
        const html: string = `
                ${
                    this.karMap?.reduce((acc, cur, row) => {
                        return acc + `<div id="boxLine" class="boxLine">
                            ${cur.reduce((box_acc, box_cur, col) => {
                                return box_acc + `<div id="box_${row}_${col}" class="box false" data-row="${row}" data-col="${col}"></div>`
                                }, "")
                            }
                        </div>`;
                    }, "")
                }
        `;
        const boxArea: HTMLElement | null = document.getElementById("buttonArea");
        boxArea.innerHTML = html;
    }

    eventManager() {
        addEventListener("click", (e) => {
            if (e.target?.classList[0] === "box") {
                const box: HTMLElement = e.target;
                const [row, col]: number[] = [Number(box.dataset?.row), Number(box.dataset?.col)];

                if (this.karMap[row][col]) {
                    box.classList.replace("true", "false");
                } else {
                    box.classList.replace("false", "true");
                }
                this.karMap[row][col] = !this.karMap[row][col];
            }
        });
    }

    run() {
        this.setKarMap();
        this.initBoxes();
        this.eventManager();
    }
}

const karnaughMap = new KarnaughMap("karnaughMap");
karnaughMap.run();