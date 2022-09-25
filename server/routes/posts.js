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

// Put request - update post details
router.put("/:postID", async(req, res) => {
    const selectedPostID = req.params.postID;
    const postDataID = req.body.postId;
    if(selectedPostID === postDataID) {
        try {
            const updatePost = await Post.findByIdAndUpdate(selectedPostID,
                {$set: req.body},
                {new: true}
                );
            res.status(200).json(updatePost);
        }
        catch(err) {
            res.status(500).json("Oops, server error...will be fixed shortly.");
        }
    }
    else {
        res.status(401).json("Sorry, you can only update your own post.");
    }
});

// Delete request - delete post 
router.delete("/:postID", async(req, res) => {
    const selectedPostID = req.params.postID;
    const postDataID = req.body.postId;
    if(selectedPostID === postDataID) {
        try {
            const deletePost = await Post.findByIdAndDelete(selectedPostID);
            deletePost && res.status(200).json("This post has been deleted.");
        }
        catch(err) {
            res.status(500).json("Oops, server error...will be fixed shortly.");
        }
    }
    else {
        res.status(401).json("Sorry, you can only delete your own post.");
    }
});

module.exports = router;