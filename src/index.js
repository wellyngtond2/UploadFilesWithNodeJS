require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mongoConfig = require("./config/mongodbConfig");
const path = require("path");
const app = express();

mongoose.connect(mongoConfig.urlDb, mongoConfig.param);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(path.resolve(__dirname, "..", "tmp", "uploads")))
);

app.use(routes);
app.listen(3333);
