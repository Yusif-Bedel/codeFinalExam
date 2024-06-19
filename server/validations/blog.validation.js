const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const BlogSchemaValidation = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).max(1000).required(),
  src: Joi.string().uri(),
  author: Joi.string(),
  uploadTime:Joi.string(),
  description1: Joi.string().min(10).max(1000).required()
  // tagId: Joi.array()
});

module.exports = BlogSchemaValidation;
