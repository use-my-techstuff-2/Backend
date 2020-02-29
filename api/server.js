const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const ownersRouter = require("../owners/router");
const rentersRouter = require("../renters/router");
const gadgetsRouter = require("../gadgets/router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/owners", ownersRouter);
server.use("/renters", rentersRouter);
server.use("/gadgets", gadgetsRouter);

module.exports = server;
