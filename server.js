var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);

console.log("Server running!");

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});
