const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./Apis/routes/userRoutes");
const authRoutes = require("./Apis/routes/authRoutes");

mongoose
  .connect("mongodb://localhost:27017/exam", {
    family: 4,
  })
  .then(() => {
    console.log("Database connected successfully 🟢...");
  })
  .catch(() => {
    console.log("Database connection failed 🔴...");
  });

app.use(express.json());
app.use(body_parser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/", userRoutes);
app.use("/api/", authRoutes);

app.listen(8000, () => {
  console.log(`Server running on http://localhost:8000/`);
});
