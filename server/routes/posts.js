const router = require("express").Router();
const Post = require("../models/Post");

// Get request - get single post
router.get("/:postID", async(req, res) => {
    try {
        const singlePostID = req.params.postID;
        const singlePost = await Post.findById(singlePostID);
        singlePost && res.status(200).json(singlePost);
    }
    catch(err) {
        res.status(500).json("Oops, server error...will be fixed shortly");
    }
});

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