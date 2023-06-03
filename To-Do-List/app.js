const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  var today = new Date();
  res.render("list.ejs", { Today: dayGiver(today.getDay()) });
});

app.listen(3000, () => {
  console.log("app running in http://localhost:3000/");
});

const dayGiver = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};
