const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path=require('path')

const staticPath=path.join(__dirname,'./public')
app.use(express.static(staticPath))

app.get("/", (req, res) => {
  res.send("Hello from the home page");
});

app.get("/about", (req, res) => {
  res.send("Hello from the about page");
});

app.get("/weather", (req, res) => {
  res.send("Hello from the weather page");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
