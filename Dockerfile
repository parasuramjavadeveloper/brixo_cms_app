FROM node:11.6.0-alpine AS builder
EXPOSE 3000
COPY . ./brixo-app
WORKDIR /brixo-app
RUN npm i
RUN npm run build 
ENTRYPOINT ["node","server.js"]