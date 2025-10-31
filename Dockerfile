# Stage 1: Builder

FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm test

EXPOSE 3000

CMD ["node", "index.js"]