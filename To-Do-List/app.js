const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const uri = require("./config");
const mongoose = require("mongoose");
mongoose.connect(uri);
const ListSchema = mongoose.Schema({
  name: String,
});
const ListData = mongoose.model("todaylists", ListSchema);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

const items = [];
const iListSchema = mongoose.Schema({
  name: String,
  item: [ListSchema],
});
const List = mongoose.model("List", iListSchema);

app.get("/:customList", async (req, res) => {
  if (req.params.customList === "favicon.ico") {
    return;
  }

  const CustomName = req.params.customList;
  const search = await List.findOne({
    name: CustomName.toLocaleLowerCase(),
  }).exec();

  if (search === null) {
    const list = new List({
      name: CustomName.toLocaleLowerCase(),
      item: items,
    });
    await list.save();
    res.redirect("/" + CustomName);
  } else {
    res.render("list.ejs", { Title: search.name, list: search.item });
  }
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
  if (req.body.button == date.toDate()) {
    await data.save();
    res.redirect("/");
  } else {
    const obj = await List.findOne({ name: req.body.button });
    obj.item.push(data);
    obj.save();
    res.redirect("/" + req.body.button);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.checkbox;
  const IName = req.body.itemName;
  if (IName == date.toDate()) {
    await ListData.findByIdAndRemove(id).exec();
    res.redirect("/");
  } else {
    try {
      await List.findOneAndUpdate(
        { name: IName },
        { $pull: { item: { _id: id } } }
      );
    } catch (e) {
      console.log(e);
      res.send(404);
    }
    res.redirect("/" + IName);
  }
});
app.listen(3000, () => {
  console.log("app running in http://localhost:3000/");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
