FROM docker.io/node:20-alpine

RUN apk add --no-cache git

EXPOSE 3000

COPY . /app

WORKDIR /app

RUN yarn install
