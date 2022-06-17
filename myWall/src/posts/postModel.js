// import mongoose
const mongoose = require ("mongoose");
const user = require("../users/userModel");
const { Schema , Model} = mongoose;


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
        type: schema.Types.ObjectId,
        ref: "user"
    }
    
    });

module.exports = Model('post', postSchema);