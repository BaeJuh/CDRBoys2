const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const key = process.env.YOUTUBE_KEY;

app.get("/", (req, res) => {
    const getYoutube = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=kpop&maxResults=10&key=${key}`);
            const list = await response.json();

            res.send(list);
        } catch(err) {
            res.status(err || 500);
        }
    }
    getYoutube();
    // res.send("")
});

app.listen(3000, () => {
    // console.log(process.env.YOUTUBE_KEY);
    console.log("http://localhost:3000");
});