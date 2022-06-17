// import mongoose
const mongoose = require("mongoose");

// destructuring Schema , Model
const { Schema , Model } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }

});

module.exports = Model('user', userSchema);