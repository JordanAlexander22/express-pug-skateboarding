const express = require("express");
const server = express();
const trickRouter= require("../tricks/trick-router")
const resourceRouter= require("../resources/resource-router")

server.use(express.json());

server.use("/api/tricks", trickRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (req, res) => {
  res.send("<h1>test </h1>");
});

module.exports= server;