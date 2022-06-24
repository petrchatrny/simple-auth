const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const User = mongoose.model("User", user);
module.exports = User;