const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    src: String,
    role: {
      type: String,
      enum: ["admin", "super-admin", "client"],
      default: "client",
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    banDate: { type: Date||null, default: null },
    banCount: {
      type: Number,
      default: 0,
    },
    wishlist: {type:Array,default:[]},
    basket:{type:Array,default:[]},
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
