const mongoose = require("mongoose");


const listSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})
const List = new mongoose.model("List", listSchema);

module.exports = List;