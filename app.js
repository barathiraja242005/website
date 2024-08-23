const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash")

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var posts=[];
app.use(express.static("public"));




app.get("/", function (req, res) {
    res.render("home");
})
app.get("/about", function (req, res) {
    res.render("about");
})


app.get("/map", function (req, res) {
    res.render("map");
})
app.get("/datas", function (req, res) {
    res.render("datas");
})

app.listen(3000, (e) => {
    console.log("Good to go da boi!!")
})
