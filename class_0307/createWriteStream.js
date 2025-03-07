const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt", {highWaterMark: 1});
writeStream.on("finish", () => {
    console.log("finish");
});

writeStream.write("한 번 더 씁니다.");
writeStream.end();