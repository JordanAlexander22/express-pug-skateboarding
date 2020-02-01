const express = require("express");
const server = express();
const trickRouter= require("../tricks/trick-router")
const resourceRouter= require("../resources/resource-router")

server.set('view engine', 'pug');
server.use(express.json());

server.get("/", (req, res) => {
  res.render("index");
});

server.use("/api/tricks", trickRouter);
server.use("/api/resources", resourceRouter);


module.exports= server;