const mongoose = require("mongoose");

const userSchemas = new mongoose.Schema({
  username: String,
  password: String,
  role: Object,
  image: String,
});

module.exports = mongoose.model("users", userSchemas);
