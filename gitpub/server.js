const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Gitpub App!</h1`);
});

const drinks = require("./models/drinks");
app.get("/drinks", (req, res) => {
  res.render("index.ejs");
});

app.listen(port,() => {
  console.log("server is listening");
});
