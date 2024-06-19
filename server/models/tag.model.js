const   mongoose = require("mongoose");




const tagScema=new mongoose.Schema(
    {
title:String,
blogIds:Array
    },
    {
    
            timestamps:true,
            versionKey:false
        
    }
)

const TagModel=mongoose.model("TagModel", tagScema);

module.exports = TagModel
