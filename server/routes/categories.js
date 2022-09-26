const router = require("express").Router();
const Category = require("../models/Category");

// Get request - get all categories
router.get("/", async(req, res) => {
    try {
        const categoryList = await Category.find();
        res.status(200).json(categoryList);
    }
    catch(err) {
        res.status(500).json("Oops, server error...will be fixed shortly.");
    }
});

// Post request - create new category
router.post("/", async(req, res) => {
    const creatingNewCategory = new Category(req.body);
    try {
        const savedCategory = await creatingNewCategory.save();
        res.status(201).json(savedCategory);
    }
    catch(err) {
        res.status(500).json("Oops, server error...will be fixed shortly.")
    }
});

module.exports = router;