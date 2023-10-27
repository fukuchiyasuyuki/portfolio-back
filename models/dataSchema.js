const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    image:{
        type:Object,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model("article", dataSchema);