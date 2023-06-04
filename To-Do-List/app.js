const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));
const items = [];
const workItems = [];
app.get("/", function (req, res) {
  res.render("list.ejs", {
    Title: date.toDate(),
    list: items,
  });
});
app.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.button === "Work") {
    workItems.push(req.body.newItem);
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }
});
app.listen(3000, () => {
  console.log("app running in http://localhost:3000/");
});
app.get("/work", (req, res) => {
  res.render("list.ejs", { Title: "Work", list: workItems });
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
