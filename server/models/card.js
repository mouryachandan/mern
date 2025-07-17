const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
        image: String,     
        title: String,
        description: String
    });
    module.exports = mongoose.model("Card", cardSchema);
