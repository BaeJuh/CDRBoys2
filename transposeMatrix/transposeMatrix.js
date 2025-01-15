"use strict";
class TransposeMatrix {
    constructor(id) {
        this.id = id;
        this.data = null;
    }
    setData(matrix) {
        this.data = matrix;
    }
    init() {
        var _a;
        let html = ``;
        (_a = this.data) === null || _a === void 0 ? void 0 : _a.forEach((row) => {
            html += `
                <p>${row}</p>
            `;
        });
        const css = `
            <style>
                .matrix { display: inline-block; }
            </style>
        `;
        document.getElementById("initialMatrix").innerHTML = `${html}${css}`;
    }
    transpose() {
        const result = [];
        for (let col = 0; col < this.data[0].length; col++) {
            result.push([]);
            for (let row = 0; row < this.data.length; row++) {
                result[col].push(this.data[row][col]);
            }
        }
        return result;
    }
    displayResult() {
        let html = ``;
        this.transpose().forEach((row) => {
            html += `
                <p>${row}</p>
            `;
        });
        document.getElementById("resultMatrix").innerHTML = `${html}`;
    }
    run(matrix) {
        this.setData(matrix);
        this.init();
        this.displayResult();
    }
}
const data = [
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16]
];
const transpose = new TransposeMatrix("transpose");
transpose.run(data);
