const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

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
                res.status(500).json(err);
            }
        } 
        else {
            res.status(401).json("Sorry, you can only update your own account.");
        }
});

module.exports = router;