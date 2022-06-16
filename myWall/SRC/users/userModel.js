// import mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Model = mongoose.model;

const post = require('../posts/postModel');

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    post: [{
        type: Schema.Types.ObjectId,
        ref: "post"
    },],

});

module.exports = Model('user', userSchema);