class Server {
    constructor(id) {
        this.id = id;

        this.express = null;
        this.app = null;
    }

    init() {
        this.express = require("express");
        this.app = this.express();


    }

    routing() {
        this.app.route("/data")
            .get((req, res) => {

            })
            .post((req, res) => {

            });
    }

    run() {

    }
}