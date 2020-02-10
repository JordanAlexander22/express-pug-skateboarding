const express = require("express");
const server = express();
const trickRouter= require("../tricks/trick-router")
const resourceRouter= require("../resources/resource-router")

server.use(express.json());

server.get("/", (req, res) => {
  res.send("test");
});

server.use("/api/tricks", trickRouter);
server.use("/api/resources", resourceRouter);


module.exports= server;