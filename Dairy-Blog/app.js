const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
//Home
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(3000, () => {
  console.log("Server running in http://localhost:3000/");
});
app.get("/blog", (req, res) => {
  res.send("welcome to blog");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
