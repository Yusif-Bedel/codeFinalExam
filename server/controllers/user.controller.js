const UsersModel = require("../models/user.model");

const user_controller = {
  getAll: async (req, res) => {
    try {
      const users = await UsersModel.find();
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
      const user = await UsersModel.findById(id);
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
      const response = await UsersModel.findByIdAndDelete(id);
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
      const response = await UsersModel.findByIdAndUpdate(id, req.body, {
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

  post: async (req, res) => {
    try {
      const { username, email } = req.body;

      const dublicateUserName = await UsersModel.find({ username: username });
      const dublicateUserEmail = await UsersModel.find({ email: email });

      let message = "";

      if (dublicateUserName.length > 0) {
        message = "username already exists";
      }

      if (dublicateUserEmail.length > 0) {
        message = "email already exists";
      }
      if (message.length > 0) {
        res.send({
          message: message,
          error: true,
        });
      } else {
        const newUser = new UsersModel(req.body);
        const user = await newUser.save();
        res.status(201).json({
          message: "posted",
          error: false,
          data: user,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error,
        error: true,
      });
    }
  },
};

module.exports = user_controller;
