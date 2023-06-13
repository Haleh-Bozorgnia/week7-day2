const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  `<h1>Welcome to the Gitpub App!</h1>`;
})
app.listen(3000, () => {
  console.log("listening");
});
