const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.post("/", multer(multerConfig).single("file"), (req, res) => {
  return res.json({ hello: "word" });
});

module.exports = routes;
