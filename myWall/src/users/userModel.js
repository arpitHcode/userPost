// import mongoose
const mongoose = require("mongoose");

// destructuring Schema , Model
const Schema = mongoose.Schema;
const Model = mongoose.model;

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