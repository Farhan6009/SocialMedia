const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
router.post("/register", async (req, res) => {
    try {
        const { username, email, password, cpassword } = req.body;
        if (!username || !email || !password || !cpassword) {
            res.status(422).send("Fields cannot be empty");
        }
        const emailExist = await User.findOne({ email });
        if (emailExist) {
            res.status(422).send("Email already exist");
        } else {
            if (password === cpassword) {
                const newUser = await new User({ username, email, password });
                await newUser.save();
                res.status(200).send("User added");
            }
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404).send("Fill the fields properly");
        }
        const user = await User.findOne({ email });
        console.log(user);
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            console.log(isMatch);
            if (isMatch) {
                const token = await user.genereteAutoToken();
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25890000000),
                    httpOnly: true
                });
                res.status(200).send(user);
            } else {
                res.status(404).send("Invalid credentials");
            }
        } else {
            res.status(404).send("Plz signup first");
        }
    } catch (error) {
        console.log(error);
    }
});
router.get("/logout", (req, res) => {
    res.clearCookie("jwtoken", { path: "/login" });
    res.status(201).send("Logout successful");
});


module.exports = router;