FROM node:16.17.0

WORKDIR /app

COPY package-lock.json .
COPY package.json .
RUN npm install

COPY . . 
CMD [ "node", "server.js" ]