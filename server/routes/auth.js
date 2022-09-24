const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Post request for registration route
router.post("/register", async(req, res) => {
    try {
        const saltRounds = 10;
        const plainTextPass = req.body.password;

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPass = await bcrypt.hash(plainTextPass, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(201).json(user);
    }
    catch(err) {
        res.status(500).json("Oops, server error...will be fixed shortly.");
    }
});

// Post request for login to send user info
router.post("/login", async(req, res) => {
    try {
        const loginUser = await User.findOne({ username: req.body.username });
        !loginUser && res.status(401).json("Incorrect login details, please try again.");

        const authorised = await bcrypt.compare(req.body.password, loginUser.password);
        !authorised && res.status(401).json("Incorrect login details, please try again.");

        const {password, ...others} = loginUser._doc;
        res.status(200).json(others);
    }
    catch(err) {
        res.status(500).json("Oops, server error...will be fixed shortly.");
    }
});

module.exports = router;