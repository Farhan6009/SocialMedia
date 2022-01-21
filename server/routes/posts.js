const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");
const User = require("../models/userModel");

//create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        return res.status(500).json(error);
    }
});
// update a post 
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json('The post has been updated');
        } else {
            return res.status(403).json("You can update only your post");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});
// delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json('The post has been deleted');
        } else {
            return res.status(403).json("You can delete only your post");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});
// like/dislike a post 
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json('The post has been liked');
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            return res.status(200).json("The post has been disliked");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});
// love/dislove a post 
router.put("/:id/love", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.love.includes(req.body.userId)) {
            await post.updateOne({ $push: { love: req.body.userId } });
            res.status(200).json('The post has been loved');
        } else {
            await post.updateOne({ $pull: { love: req.body.userId } });
            return res.status(200).json("The post has been hated");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});
// get a post 

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            return res.status(403).json("Post not found");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});
// get all timeline post 
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPost = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPost.concat(...friendPosts));
    } catch (error) {
        return res.status(500).json(error);
    }
});

// get user all post 
router.get("/profile/:username", async (req, res) => {
    try {
        const currentUser = await User.findOne({ username: req.params.username });
        const post = await Post.findOne({ userId: currentUser._id });
        console.log(post);
        res.status(200).json(post);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;