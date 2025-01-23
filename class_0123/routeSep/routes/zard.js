const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.send("ZARD");
    })
    .post((req, res) => {
        res.send("LOVE");
    });

module.exports = router;