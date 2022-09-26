const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");

app.use(express.json());
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to mongo"))
    .catch((err) => console.log(err));

app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);
app.use("/server/posts", postsRoute);
app.use("/server/categories", categoriesRoute);

app.listen("8080", () => {
    console.log("Backend is running")
});