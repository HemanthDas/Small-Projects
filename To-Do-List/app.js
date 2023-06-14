const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Hemanth_Das_Chowdary:pEz0D72CPA7o7COE@cluster0.t51h28t.mongodb.net/todolistdb"
);
const ListSchema = mongoose.Schema({
  name: String,
});
const ListData = mongoose.model("todaylists", ListSchema);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

const items = [];
app.get("/:customList", (req, res) => {
  console.log(req.params.customList);
});
app.get("/", async (req, res) => {
  const arr = await ListData.find();
  if (items.length != arr.length) {
    items.length = 0;
    items.push(...arr);
  }
  res.render("list.ejs", {
    Title: date.toDate(),
    list: items,
  });
});

app.post("/", async (req, res) => {
  const data = new ListData({
    name: req.body.newItem,
  });
  await data.save();
  res.redirect("/");
});
app.post("/delete", async (req, res) => {
  const id = req.body.checkbox;
  await ListData.findByIdAndRemove(id).exec();
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("app running in http://localhost:3000/");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
