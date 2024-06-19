const ProductsModel = require("../models/product.model");

const product_controller = {
  getAll: async (req, res) => {
    try {
      const products = await ProductsModel.find();
      if (products.length > 0) {
        res.status(200).json({
          message: "success",
          data: products,
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
      const product = await ProductsModel.findById(id);
      if (product) {
        res.status(200).json({
          message: "success",
          data: product,
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
      const response = await ProductsModel.findByIdAndDelete(id);
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
      const response = await ProductsModel.findByIdAndUpdate(id, req.body, { new: true });
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
      const product = new ProductsModel(req.body);
      await product.save();
      res.status(201).json({
        message: "posted",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  }
};

module.exports = product_controller;
