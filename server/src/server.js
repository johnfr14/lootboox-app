const api     = require("./api")
const http   = require('http');
const fs      = require("fs");
const io      = require('socket.io');
const sockets = require('./sockets');

const PORT = 8000;

const httpServer = http.createServer(api);

const socketServer  = io(httpServer, {
  cors: {
    origin: "https://loot-box-sample.netlify.app/"
  }
});

httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

sockets.listen(socketServer);
