const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(21110, () => {
    console.log("http://127.0.0.1:21110");
});