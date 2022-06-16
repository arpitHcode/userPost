// import mongoose
const mongoose = require ("mongoose");
const comment = require("../comments/commentModel");
const schema = mongoose.Schema;
const Model = mongoose.model;

const postSchema = new schema ({

    
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

    comment: {
        type : schema.Types.ObjectId,
        ref: "comment"
    }
});

module.exports = Model('post', postSchema);