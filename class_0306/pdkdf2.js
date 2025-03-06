const crypto = require("crypto");

const pwEncode = (pw) => {
    crypto.randomBytes(64, (err, buf) => {
        const salt = buf.toString("base64");
        console.log("salt : " + salt);

        crypto.pbkdf2(pw, salt, 100000, 64, "sha512", (err, key) => {
            console.log("password : " + key.toString("base64"));
        });
    });
}

pwEncode("wnghks1234");