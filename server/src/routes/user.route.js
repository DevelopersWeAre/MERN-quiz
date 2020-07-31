const express = require("express");
const { testController } = require("../controllers");
const { auth } = require("../services");
const { userController } = require("../controllers");
const app = express();

app.get("/", testController);
app.post("/", auth.authorize(), testController);
app.post("/register", userController.register);

module.exports = app;
