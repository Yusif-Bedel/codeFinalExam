const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    src: String,
    role: {
        type:String,
        enum:[
            "admin","super-admin","client"
        ],
        default:"client"
    },
    isBanned: Boolean,
    banDate: Date || null,
    banCount: Number,
    wishlist: Array,
    basket: Array,

  },
  {
    timestamps: true,
  }
);

const UserModel=mongoose.model("UserModel", userSchema);
module.exports = UserModel
