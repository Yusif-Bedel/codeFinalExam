const mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      default: "FOXic",
    },
    // stock: {
    //   type: Number,
    //   required: true,
    // },
    // size: {
    //   type: String,
    //   required: true,
    // },
    // collections: {
    //   type: String,
    //   required: true,
    // },
    images: [],
    // color: [],
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductModel= mongoose.model("ProductModel", productSchema)

module.exports = ProductModel
