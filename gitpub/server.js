require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const drinks = require("./models/drinks");
const app = express();
app.use(morgan("dev"));
const port = 3000;

// app.get("/", (req, res) => {
//   res.send(`<h1>Welcome to the Gitpub App!</h1`);
// });

app.get("/drinks", (req, res) => {
  res.render("index.ejs", { drinks });
});
// Setting up your show route

// app.get("/drinks/:id",(req,res)=>{
//   res.send(req.params.id)
// })

app.get("/drink/:id", (req, res) => {
  const id = req.params.id;
  const drink = drinks[id];
  drink.image = `${drink.image}.png`; // Add .png extension to the image URL

  res.render("show.ejs", { drink });
});
app.listen(port, () => {
  console.log("server is listening");
});
