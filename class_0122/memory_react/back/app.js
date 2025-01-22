class Back {
    constructor(id) {
        this.id = id;
        this.fs = require("fs");
    }

    initFile() {
        const content = JSON.stringify(this.memoryData());
        this.fs.writeFile("./memory.json", content, err => {
            if (err) throw err;
        });
    }

    updateFile() {
        setInterval(() => {
            const content = JSON.stringify(this.memoryData());
            this.fs.writeFile("./memory.json", content, err => {
                if (err) throw err;
            });
        }, 2000);
    }

    memoryData() {
        const os = require("os");

        return {
            freemem: os.freemem(),
            totalmem: os.totalmem()
        }
    }

    run() {
        this.initFile();
        this.updateFile();
    }
}

const back = new Back("back");
back.run();