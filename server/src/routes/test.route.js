const express = require("express");
const { testController } = require("../controllers");
const { auth } = require("../services");
const app = express();

app.get("/", auth.authorize(), testController);

module.exports = app;
