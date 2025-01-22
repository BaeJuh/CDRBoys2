// const fs = require("fs");

// fs.readFile("./readme.txt", (err, data) => {
//     if (!err) {
//         console.log(data);
//         console.log(data.toString());
//     }
// });

const fs = require("fs").promises;

const fileName = "newText.txt";
const content = "new Text";

fs.writeFile("./" + fileName, content)
    .then(() => {
        fs.readFile("./" + fileName)
            .then(data => {
                console.log(data.toString());
            })
            .catch(err => {
                console.log(err);
            });
    })
    .catch(err => { console.log(err) });

