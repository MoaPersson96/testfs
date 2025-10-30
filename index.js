const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Service B is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Service B running on port ${port}`));