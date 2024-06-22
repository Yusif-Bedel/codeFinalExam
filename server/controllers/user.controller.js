const generateAccessToken = require("../helpers/generateAccessToken");
const sendVerifyEmail = require("../helpers/sendMail");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const user_controller = {
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find();
      if (users.length > 0) {
        res.status(200).json({
          message: "success",
          data: users,
        });
      } else {
        res.status(204).json({
          message: "not found",
          data: [],
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserModel.findById(id);
      if (user) {
        res.status(200).json({
          message: "success",
          data: user,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await UserModel.findByIdAndDelete(id);
      if (response) {
        res.status(200).json({
          message: "deleted",
          data: response,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (response) {
        res.status(200).json({
          message: "updated",
          data: response,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check for duplicate username and email
      const [duplicateUserName, duplicateUserEmail] = await Promise.all([
        UserModel.findOne({ username }),
        UserModel.findOne({ email })
      ]);
  
      let message = "";
  
      if (duplicateUserName) {
        message = "username already exists";
      }
  
      if (duplicateUserEmail) {
        message = "email already exists";
      }
  
      if (message) {
        return res.status(400).json({
          message: message,
          error: true,
        });
      }
  
      // Hash the password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Construct new user object
      const newUser = {
        username,
        email,
        password: hashedPassword,
        src: req.file ? `http://localhost:8080/api/uploads/${req.file.filename}` : null
      };
  
      const user = new UserModel(newUser);
  
      // Generate JWT token
      const token = jwt.sign(
        { email: newUser.email },
        process.env.PRIVATE_KEY,
        { expiresIn: "1d" }
      );
  
      // Send verification email
      sendVerifyEmail(newUser.email, token);
  
      // Save the new user
      await user.save();
  
      res.status(201).json({
        message: "User registered successfully",
        error: false,
        data: user,
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({
        message: "An error occurred during registration",
        error: true,
      });
    }
  },
  user_login: async (req, res) => {
    const user = await UserModel.findOne({
      email: req.body.email,
      role: "client",
    });
    if (user) {
      bcrypt.compare(
        req.body.password,
        user.password,
        function (err, response) {
          if (response) {
            if (user.isVerified == true) {
              //generate token
           const token=generateAccessToken(user)
              res.send({
                message: "signed in successfully",
                auth: true,
                user: user,
                token:token
              });
            } else {
              res.send({
                message: "verify your email",
                auth: false,
              });
            }
          } else {
            res.send({
              message: "email or password incorrect",
              auth: false,
            });
          }
        }
      );
    } else {
      res.send({
        message: "no such user",
        auth: false,
      });
    }
  },
  verify: async (req, res) => {
    const { token } = req.params;
    const validToken = jwt.verify(token, process.env.PRIVATE_KEY);

    if (validToken) {
      const { email } = validToken;
      const user = await UserModel.findOne({ email: email });

      if (user) {
      await  UserModel.findByIdAndUpdate(user._id, { isVerified: true });
        res.redirect("http://localhost:5173/login");
        return;
      } else {
        return res.send({ message: "no such user" });
      }
    } else {
      return res.send({ message: "invalid token", auth: false });
    }
  },
};

module.exports = user_controller;
