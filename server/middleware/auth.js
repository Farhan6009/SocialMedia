const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
    try {
        let token = req.headers.cookie;
        token = token.split("=");
        // console.log(token[1]);
        const verifyToken = await jwt.verify(token[1], process.env.SECRET_KEY);
        console.log(verifyToken);
        const user = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!user) {
            throw new Error("User not found");
        }
        req.token = token;
        req.user = user;
        req.userId = user._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("Unauthorised :No token provided");
    }
};
module.exports = auth;