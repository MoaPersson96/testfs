const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running on Azure!");
});

app.get("/api/test-error", (req, res) => {
  console.error("🔥 TEST ERROR: Detta är ett medvetet fel för Log Stream!");
  res.status(500).send("Ett medvetet fel uppstod!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));