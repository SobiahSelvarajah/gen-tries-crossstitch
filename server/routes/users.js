const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// Get request - get user details
router.get("/:userID", async(req, res) => {
    try {
        const registeredUserID = req.params.userID;
        const registeredUser = await User.findById(registeredUserID);
        const {password, ...others} = registeredUser._doc;
        res.status(200).json(others);
    }
    catch(err) {
        res.status(404).json("Sorry, this user cannot be found")
    }
})

// Put request - update user details
router.put("/:userID", async(req, res) => {
    const registeredUserID = req.params.userID;
    const userDataID = req.body.userId;
    if (userDataID === registeredUserID) {
        if(req.body.password) {
            const saltRounds = 10;    
            const salt = await bcrypt.genSalt(saltRounds);  
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(registeredUserID, 
                {$set: req.body}, 
                {new: true}
            );
            res.status(200).json(updatedUser);
        }
        catch(err) {
            res.status(500).json("Oops, server error...will be fixed shortly.");
        }
    } 
    else {
        res.status(401).json("Sorry, you can only update your own account.");
    }
});

// Delete request - delete user details
router.delete("/:userID", async(req, res) => {
    const registeredUserID = req.params.userID;
    const userDataID = req.body.userId;
    if (registeredUserID === userDataID) {
        try {
            const registeredUser = await User.findById(registeredUserID);
            try {
                const deleteUserPosts = await Post.deleteMany({username: registeredUser.username});
                const deleteUser = await User.findByIdAndDelete(registeredUserID);
                deleteUserPosts && deleteUser && res.status(200).json("This user has been deleted.");
            }
            catch(err) {
                res.status(500).json("Oops, server error...will be fixed shortly.");
            }
        }
        catch(err) {
            res.status(404).json("Sorry, this user cannot be found.");
        }
    }
    else {
        res.status(401).json("Sorry, you can only delete your own account.");
    }
});

module.exports = router;