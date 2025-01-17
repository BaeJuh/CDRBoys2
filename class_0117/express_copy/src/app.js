class Web {
    constructor(id) {
        this.id = id;

        this.express = null;
        this.app = null;
    }

    prepareService() {
        this.express = require("express");
        this.app = this.express();
    }

    routing() {
        this.app.get("/", (req, res) => {
            res.send("Class Service.");
        });
    }

    listen() {
        this.app.listen(2000, () => {
            console.log("http://localhost:2000");
        });
    }

    run() {
        this.prepareService();
        this.routing();
        this.listen();
    }
}

// main
(() => {
    const web = new Web("web");
    web.run();
})();
