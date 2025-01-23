const express = require("express");
const fs = require("fs");

const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.render("join.pug");
    })
    .post((req, res) => {
        fs.readFile("asset/database/user.json", "utf-8", (err, data) => {
            if (err) throw err;
            const userData = JSON.parse(data);
            userData.push(req.body);

            fs.writeFile("asset/database/user.json", JSON.stringify(userData), (err) => {
                if (err) throw err;
            });
        });
    });

module.exports = router;