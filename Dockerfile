# Stage 1: Builder

FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm test -- --passWithNoTests

# Stage 2: Production

FROM node:18-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["node", "index.js"]