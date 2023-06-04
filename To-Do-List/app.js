const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));
let items = [];
let workItems = [];
const option = {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
};
app.get("/", function (req, res) {
  let today = new Date();
  res.render("list.ejs", {
    Title: today.toLocaleDateString("en-us", option),
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
