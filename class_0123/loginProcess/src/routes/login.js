const express = require("express");
const fs = require("fs");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.render("login.pug");
    })
    .post((req, res) => {
        const { id, pw } = req.body;
        fs.readFile("asset/database/user.json", "utf-8", (err, data) => {
            if (err) throw err;
            const userData = JSON.parse(data);

            const user = userData.find(user => user.id === id && user.pw === pw);

            if (user) {
                console.log("화면")
                res.send(`<h1>${id}님 환영합니다.</h1>`);
            } else {
                return res.render("login.pug");
            }
        });
    });

module.exports = router;