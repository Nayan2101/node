const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { Port, Host, LocalUrl } = require("./config");
const path = require('path')
const ejs = require("ejs");

mongoose
  .connect(LocalUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("Database Connected successfully 🟢");
  })
  .catch(() => {
    console.log("Connection Failed 🔴");
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static("./"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const userRoutes = require("./src/routes/userRoutes");
const roleRoutes = require("./src/routes/roleRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use("/api", roleRoutes, userRoutes, authRoutes);

app.listen(Port, Host, () => {
  console.log(`Server running at http://${Host}:${Port}/`);
});
