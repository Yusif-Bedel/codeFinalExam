const BlogModel = require("../models/blog.model");

const blog_controller = {
  getAll: async (req, res) => {
    try {
      const blogs = await BlogModel.find();
      if (blogs.length > 0) {
        res.status(200).json({
          message: "success",
          data: blogs,
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
      const blog = await BlogModel.findById(id);
      if (blog) {
        res.status(200).json({
          message: "success",
          data: blog,
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
      const response = await BlogModel.findByIdAndDelete(id);
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
      const response = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
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
      const blog = new BlogModel(req.body);
      await blog.save();
      res.status(201).json({
        message: "posted",
        data: blog,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  }
};

module.exports = blog_controller;
