// Importera Express-biblioteket
const express = require('express');
const app = express();
const port = 3000; // Välj en port för din server

app.use(express.json());

// Skapa en enkel GET-endpoint på roten (/)
app.get('/', (req, res) => {
  // Skickar ett JSON-svar med ett meddelande
  res.json({ message: 'Hello world!' });
});

// Starta servern och lyssna på den angivna porten
app.listen(port, () => {
  console.log(`Servern är igång på http://localhost:${port}`);
});