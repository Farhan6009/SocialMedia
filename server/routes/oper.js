const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// update user
router.put("/:id", async (req, res) => {
    try {
        const { userId, password, isAdmin } = req.body;
        if (userId === req.params.id || isAdmin) {
            if (password) {
                try {
                    password = await bcrypt.hash(password, 10);

                } catch (error) {
                    return res.status(500).json(error);
                }
            }
            try {
                const user = await User.findByIdAndUpdate(userId, { $set: req.body });
                res.status(200).json("Account has been updated");
            } catch (error) {
                return res.status(500).json(error);
            }
        } else {
            res.status(403).json("You can update only your account");
        }
    } catch (error) {
        console.log(error);
    }

});

// delete user
router.delete("/:id", async (req, res) => {
    try {
        const { userId, password, isAdmin } = req.body;

        if (userId === req.params.id || isAdmin) {
            try {
                const user = await User.findByIdAndDelete(req.params.id);
                res.status(200).json("Account has been deleted");
            } catch (error) {
                return res.status(500).json(error);
            }
        } else {
            res.status(403).json("You can delete only your account");
        }
    } catch (error) {
        console.log(error);
    }

});
// // get a user
// router.get("/:id", async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         const { password, updatedAt, ...other } = user._doc;
//         console.log(user._doc);
//         res.status(200).json(other);
//     } catch (error) {
//         return res.status(500).send(error);
//     }
// });

// get a user
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId ? await User.findById(userId) : await User.findOne({ username });
        const { password, updatedAt, ...other } = user._doc;
        // console.log(user._doc);
        res.status(200).json(other);
    } catch (error) {
        return res.status(500).send(error);
    }
});

// follow a user
router.put("/:id/follow", async (req, res) => {
    const { userId } = req.body;
    if (userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(userId);
            if (!user.followers.includes(userId)) {
                await user.updateOne({ $push: { followers: userId } });
                await currUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json("User has been follwed");
            } else {
                return res.status(403).json("You already follow this user");
            }
            res.status(200).json(other);
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("You cannot follow yourself");
    }

});
// unfollow a user
router.put("/:id/unfollow", async (req, res) => {
    const { userId } = req.body;
    if (userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(userId);
            if (user.followers.includes(userId)) {
                await user.updateOne({ $pull: { followers: userId } });
                await currUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json("User has been unfollwed");
            } else {
                return res.status(403).json("You dont follow this user");
            }
            res.status(200).json(other);
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("You cannot unfollow yourself");
    }

});
module.exports = router;
