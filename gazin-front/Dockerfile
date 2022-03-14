
FROM node:14.0.0-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14.0.0-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --production

COPY --from=builder /usr/src/app/public ./public

COPY --from=builder /usr/src/app/.next ./.next

EXPOSE 8080
EXPOSE 80

CMD ["npm", "start"]

