FROM node:18-alpine

WORKDIR /app

COPY extra/package*.json ./

RUN npm install

COPY extra/. .

EXPOSE 4000

CMD ["npm", "index.js"]