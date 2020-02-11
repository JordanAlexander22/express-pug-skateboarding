const express = require("express");
const server = express();
const cors= require('cors');
const helmet= require('helmet');
const trickRouter= require("../tricks/trick-router");
const resourceRouter= require("../resources/resource-router");
const authRouter= require("../auth/authRouter");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("test");
});

server.use(cors());
server.use(helmet());

server.use("/api/tricks", trickRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/auth", authRouter);


module.exports= server;