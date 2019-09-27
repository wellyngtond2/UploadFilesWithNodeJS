const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mongoConfig = require("./config/mongodbConfig");
const app = express();

mongoose.connect(mongoConfig.urlDb, mongoConfig.param);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);
app.listen(3333);
