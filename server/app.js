require("dotenv").config();
const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
const userRoute = require("./routes/users");
const operRoute = require("./routes/oper");
const postRoute = require("./routes/posts");


const port = process.env.PORT || 8000;

require("./db/conn");

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoute);
app.use("/oper", operRoute);
app.use("/posts", postRoute);
app.use(cookieParser());

app.listen(port, () => {
    console.log(`connection to port ${port} successful`);
});