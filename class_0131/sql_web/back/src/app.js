class Web {
    constructor(id) {
        this.id = id;

        this.express = null;
        this.app = null;
        this.connection = null;
    }

    init() {
        this.express = require("express");
        this.app = this.express();
        const cors = require("cors");

        this.app.use(this.express.json());
        // this.app.use(this.express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    setDB() {
        const dbSetting = require("./config/db");
        const mysql = require("mysql");
        this.connection = mysql.createConnection(dbSetting);
    }

    routing() {

        this.app.get("/", (req, res) => {
            this.connection.connect();
            this.connection.query(`SELECT * FROM student`, (err, data) => {
                if (err) throw err;
                res.json(data);
            });
            this.connection.end();
        });

        this.app.post("/delete", (req, res) => {
            const {id} = req.body;
            console.log(id);
            this.connection.connect();
            this.connection.query(`DELETE FROM student WHERE id=${id}`, (err, data) => {
                if (err) throw err;
            });
            this.connection.end();
        });

        this.app.post("/update", (req, res) => {
            this.connection.connect();
            this.connection.query(`SELECT * FROM student`, (err, data) => {
                if (err) throw err;
                res.json(data);
            });
            this.connection.end();
        });

        this.app.listen(3000, () => {
            console.log(`http://localhost:3000`);
        });
    }

    run() {
        this.init();
        this.setDB();
        this.routing();
    }
}
const web = new Web("web");
web.run();