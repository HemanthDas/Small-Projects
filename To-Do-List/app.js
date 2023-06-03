const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
let items = ["good morning"];
const option = {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
};
app.get("/", function (req, res) {
  var today = new Date();
  res.render("list.ejs", {
    Today: today.toLocaleDateString("en-us", option),
    list: items,
  });
});
app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("app running in http://localhost:3000/");
});
