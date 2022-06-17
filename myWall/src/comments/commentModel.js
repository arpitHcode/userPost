// import mongoose
const mongoose = require ("mongoose");

const  Schema = mongoose.Schema;
const Model = mongoose.model;

const post = require("../posts/postModel");
const user = require("../users/userModel");

const commentSchema = new Schema ({

         
    description :{
        type: String,
        required: true
    },
    
    time : {
        type : Date,
        default : Date.now
    },

    user : {
        type: Schema.Types.ObjectId,
        ref : "user"
    },

    post : {
        type: Schema.Types.ObjectId,
        ref : "post"
    }
});

module.exports = Model('comment', commentSchema);