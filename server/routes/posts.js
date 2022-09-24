const router = require("express").Router();
const Post = require("../models/Post");

// Post request - create new post
router.post("/", async(req, res) => {
    const creatingNewPost = new Post(req.body);
    try {
        const savedPost = await creatingNewPost.save();
        res.status(201).json(savedPost);
    }
    catch(err) {
        res.status(500).json("Oops, server error...will be fixed shortly.");
    }
});

module.exports = router;