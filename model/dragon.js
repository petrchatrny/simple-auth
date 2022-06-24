const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dragon = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "https://www.kindpng.com/picc/m/13-138062_dragon-icon-png-dragon-clip-art-transparent-png.png"
    },
    damage: {
        type: Number,
        required: true
    },
    health: {
        type: Number,
        required: true
    }
});

const Dragon = mongoose.model("Dragon", dragon);
module.exports = Dragon;