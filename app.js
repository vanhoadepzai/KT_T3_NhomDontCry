const express = require("express");
const path = require("path");

const app = express();

// set ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/blog", (req, res) => {
    res.render("blog");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(3000, () => {
    console.log("Server running...");
});