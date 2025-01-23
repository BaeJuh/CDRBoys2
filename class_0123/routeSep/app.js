const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const zardRouter = require("./routes/zard");

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/zard", zardRouter);

app.use((req, res, next) => {
    res.status(404).send("Not found");
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});