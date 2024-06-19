const TagsModel = require("../models/tag.model");

const tag_controller = {
  getAll: async (req, res) => {
    try {
      const { title } = req.query;
      let tags;

      if (title) {
        tags = await TagsModel.find({ title: title });
      } else {
        tags = await TagsModel.find();
      }

      if (tags.length > 0) {
        res.status(200).json({
          message: "success",
          data: tags,
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
      const tag = await TagsModel.findById(id);
      if (tag) {
        res.status(200).json({
          message: "success",
          data: tag,
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
      const response = await TagsModel.findByIdAndDelete(id);
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
      const response = await TagsModel.findByIdAndUpdate(id, req.body, { new: true });
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
      const tag = new TagsModel(req.body);
      await tag.save();
      res.status(201).json({
        message: "posted",
        data: tag,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
};

module.exports = tag_controller;
