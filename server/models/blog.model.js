const mongoose = require("mongoose"); 


var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    tagIds: {
      type: Array,
      default: [],
    },
    likes: {
      type: Array,
      default: [],
    },
    author: {
      type: String,
      default: "Admin",
    },
    src: String,
  },
  {
    timestamps: true
  }
);

const BlogModel=mongoose.model("BlogModel", blogSchema);

module.exports = BlogModel