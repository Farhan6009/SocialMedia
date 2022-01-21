const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
        unique: true
    },
    love: {
        type: Array,
        default: [],
        unique: true
    }
}, { timestamps: true });
/** @type {mongodb.Db} */

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;