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
        res.status(200).json(user);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;