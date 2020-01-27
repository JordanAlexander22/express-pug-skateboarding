const express = require("express");
const server = express();
const trickRouter= require("../tricks/trick-router")

server.use(express.json());

server.use("/api/tricks", trickRouter);

server.get("/", (req, res) => {
  res.send("<h1>test </h1>");
});

module.exports= server;