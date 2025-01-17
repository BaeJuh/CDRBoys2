class App {
    constructor(id) {
        this.id = id;

        this.express = null;
        this.app = null;
    }

    setExpress() {
        this.express = require("express");
        this.app = this.express();

        this.app.use(this.express.static("public"));

        this.app.set("view engine", "pug");
        this.app.set("views", "./views");
    }

    routing() {
        this.app.get("/", (req, res) => {
            res.send("Root");
        });

        this.app.get("/join", (req, res) => {
            res.send("Join");
        });

        this.app.get("/image", (req, res) => {
            res.send(`Image <img src="images/shibuya.jpg" width="500px" height="300px">`);
        });

        this.app.get("/dynamic", (req, res) => {
            const list = [...new Array(5)].reduce((acc) => {
                return acc + `<li>Beautiful Coding</li>`;
            }, "");
            const time = Date();

            const html = `
                <!doctype html>
                <html lang="ko">
                    <head>
                        <meta charset="utf-8">
                        <title>Dynamic</title>
                    </head>
                    <body>
                        Hello, Dynamic
                        <ul>
                            ${list}
                        </ul>
                        ${time}
                    </body>
                </html>
            `;

            res.send(html);
        });

        this.app.get("/template", (req, res) => {
            const time = Date();
            res.render("template", { title: "Template", time: time });
        });

        this.app.get("/option", (req, res) => {
            const { select } = req.query;
            const nameList = ["Bae", "Ju", "Hwan"];

            res.send(nameList[Number(select)]);
        });
    }

    listen() {
        this.app.listen(2000, () => {
            console.log("http://localhost:2000");
        });
    }

    run() {
        this.setExpress();
        this.routing();
        this.listen();
    }
}

(() => {
    const app = new App("app");
    app.run();
})();