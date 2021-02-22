const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello user");
  res.end();
});

app.listen(4399, () => {
  console.log("app is running");
});
