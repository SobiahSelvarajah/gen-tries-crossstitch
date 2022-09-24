const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

app.use(express.json());
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to mongo"))
    .catch((err) => console.log(err));

app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);

app.listen("8080", () => {
    console.log("Backend is running")
});