// import mongoose
const mongoose = require ("mongoose");
const user = require("../users/userModel");
const  Schema = mongoose.Schema;
const Model = mongoose.model;


const postSchema = new Schema ({

    
    title :{
        type: String,
        required: true
    },
    
    description :{
        type: String,
        required: true
    },
    
    time : {
        type : Date,
        default : Date.now
    },

    user :{
        type: Schema.Types.ObjectId,
        ref: "user"
    }
    
    });

module.exports = Model('post', postSchema);