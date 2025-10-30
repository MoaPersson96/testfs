const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running on Azure!");
});

app.get("/api/test-500", (req, res) => {
  console.error("🔥 TEST 500: Medvetet fel!");
  res.status(500).send("Intentional Internal Server Error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));