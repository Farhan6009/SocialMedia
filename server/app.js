require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;

require("./db/conn");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(require("./routes/router"));

app.listen(port, () => {
    console.log("connection to port successful");
})