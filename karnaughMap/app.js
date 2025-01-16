"use strict";
class KarnaughMap {
    constructor(id) {
        this.ROW = 2;
        this.COL = 2;
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
        var _a;
        const html = `
                ${(_a = this.karMap) === null || _a === void 0 ? void 0 : _a.reduce((acc, cur, row) => {
            return acc + `<div id="boxLine" class="boxLine">
                            ${cur.reduce((box_acc, box_cur, col) => {
                return box_acc + `<div id="box_${row}_${col}" class="box false" data-row="${row}" data-col="${col}"></div>`;
            }, "")}
                        </div>`;
        }, "")}
        `;
        const boxArea = document.getElementById("buttonArea");
        boxArea.innerHTML = html;
    }
    eventManager() {
        addEventListener("click", (e) => {
            var _a, _b, _c;
            if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.classList[0]) === "box") {
                const box = e.target;
                const [row, col] = [Number((_b = box.dataset) === null || _b === void 0 ? void 0 : _b.row), Number((_c = box.dataset) === null || _c === void 0 ? void 0 : _c.col)];
                if (this.karMap[row][col]) {
                    box.classList.replace("true", "false");
                }
                else {
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
