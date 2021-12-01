const mongoose = require("mongoose");
const db = process.env.DB;

mongoose.connect(db).then(() => {
    console.log("connection to mongodb successful");
}).catch((err) => {
    console.log(err);
})

