const mongoose = require("mongoose"); 


var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    description1: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
    src:{
      type:String,
      required:true
    },
    uploadTime:{
      type:String,
      required:true
    }
  },
  {
    timestamps: true
  }
);

const BlogModel=mongoose.model("BlogModel", blogSchema);

module.exports = BlogModel

