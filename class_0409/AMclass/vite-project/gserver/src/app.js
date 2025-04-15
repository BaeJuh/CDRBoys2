import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

console.log("ENV 확인:", {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    db: process.env.DB_DATABASE
});


const app = express();

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});