const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerConfig');

const app = express();
const PORT = 3001;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Swagger UI körs på http://localhost:${PORT}/api-docs`);
});