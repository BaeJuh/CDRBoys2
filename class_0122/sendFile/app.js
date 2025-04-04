const path = require("path");
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.sendFile( path.join(__dirname, "/views/index.html") );
});

app.listen(app.get("port"), () => {
    console.log("ready");
});