const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Extra is running!');
});

app.listen(PORT, () => console.log(`Extra listening on port ${PORT}`));

module.exports = app;