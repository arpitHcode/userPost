// import mongoose
const mongoose = require ("mongoose");

const { Schema , Model } = mongoose.Schema;

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
        type: schema.Types.ObjectId,
        ref : "user"
    },

    post : {
        type: schema.Types.ObjectId,
        ref : "post"
    }
});

module.exports = Model('comment', commentSchema);