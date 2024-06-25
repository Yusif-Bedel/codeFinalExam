const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const BlogSchemaValidation = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  src: Joi.string(),
  author: Joi.string(),
  category: Joi.string(),
  uploadTime:Joi.string(),
  description1: Joi.string()
});

module.exports = BlogSchemaValidation;
