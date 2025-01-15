interface ITransposeMatrix {
    id:string;
    setData: () => void;
    init: () => void;
    transpose:() => number[][];
    displayResult: () => void;
    run: (matrix:number[][]) => void;
}

class TransposeMatrix {
    public id: string;
    private data: number[][] | null;
    constructor(id: string) {
        this.id = id;
        this.data = null;
    }

    setData(matrix: number[][]) {
        this.data = matrix;
    }

    init() {
        let html:string = ``;

        this.data?.forEach((row) => {
            html += `
                <p>${row}</p>
            `;
        });

        const css:string = `
            <style>
                .matrix { display: inline-block; }
            </style>
        `;

        (document.getElementById("initialMatrix") as HTMLElement).innerHTML = `${html}${css}`;
    }

    transpose() {
        const result: number[][] = [];

        for (let col = 0; col<this.data[0].length; col++) {
            result.push([]);
            for (let row = 0; row<this.data.length; row++) {
                result[col].push( this.data[row][col] );
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

        (document.getElementById("resultMatrix") as HTMLElement).innerHTML = `${html}`;
    }

    run(matrix: number[][]) {
        this.setData(matrix);
        this.init();
        this.displayResult();
    }
}

const data: number[][] = [
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16]
];

const transpose = new TransposeMatrix("transpose");
transpose.run(data);