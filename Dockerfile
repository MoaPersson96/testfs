# Multi stage builder and tests

FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

# Runtime stage
FROM node:18-alpine AS runtime

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["node", "index.js"]