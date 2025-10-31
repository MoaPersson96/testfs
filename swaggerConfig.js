const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Dokumentation",
      version: "1.0.0",
      description: "DevOps demo API för hantering av status och data.",
    },
    servers: [
      { url: '/api'},
      { url: 'http://localhost:3000/api' },
      { url: 'https://training-moa-bpdmegguazhfh2em.swedencentral-01.azurewebsites.net/api' }
    ],
  },

   apis: [path.resolve(__dirname, './routes.js')],
};

const specs = swaggerJsdoc(options);
module.exports = specs;