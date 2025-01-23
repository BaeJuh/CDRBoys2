class Web {
    constructor(id) {
        this.id = id;

        this.express = null;
        this.app = null;
    }

    init() {
        this.express = require("express");
        this.app = this.express();

        this.app.use(this.express.static("asset"));
        this.app.use(this.express.json());
        this.app.use(this.express.urlencoded({ extends: true }));

        this.app.set("view engine", "pug");
        this.app.set("views", "./src/views");
    }

    routes() {
        const joinRouter = require("./routes/join");
        const loginRouter = require("./routes/login");

        this.app.use("/join", joinRouter);
        this.app.use("/login", loginRouter);
    }

    listen() {
        this.app.listen(3000, () => {
            console.log("http://localhost:3000/join");
        });
    }

    run() {
        this.init();
        this.routes();
        this.listen();
    }
}

const web = new Web("main");
web.run();