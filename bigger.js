class Bigger {
    constructor(id) {
        this.id = id;
        this.data = [];
    }

    setData(data) {
        this.data = [...data];
    }

    getAvg() {
        return this.data.reduce((acc, cur) => acc + cur)/this.data.length;
    }

    getBiggerAvg() {
        const avg = this.getAvg();

        return this.data.filter(v => avg < v).sort((a, b) => a-b );
    }

    run(data) {
        this.setData(data);
        console.log(this.getBiggerAvg())
    }
}

data = [ 7, 8, 10, 100, 99, 44, 23, 40, 14, 80 ];
const bigger = new Bigger("bigger");
bigger.run(data);