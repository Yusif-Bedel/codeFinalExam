const mongoose = require("mongoose");
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5050;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected Successfully"))
  .catch(() => console.log("Database error"));

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});

module.exports = app;
