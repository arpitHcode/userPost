// import mongoose
const mongoose = require ("mongoose");

const Schema = mongoose.Schema;
const Model = mongoose.model;

const commentSchema = new Schema ({

    
       
    description :{
        type: String,
        required: true
    },
    
    time : {
        type : Date,
        default : Date.now
    }
});

module.exports = Model('comment', commentSchema);