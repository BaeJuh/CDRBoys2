const fs = require("fs");

fs.watch("./target.txt", (e, filename) => {
    console.log(e, filename);
});