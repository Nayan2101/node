const mongoose = require("mongoose");

const userSchemas = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("users", userSchemas);
