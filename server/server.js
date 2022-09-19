const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    })
    .then(console.log("Connected to mongo"))
    .catch((err) => console.log(err));

app.listen("8080", () => {
    console.log("Backend is running")
});