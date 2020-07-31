const express = require("express");
const {
  testController,
  userController,
  authController,
} = require("../controllers");
const { auth } = require("../services");
const app = express();

app.get("/", testController);
app.post("/", auth.authorize(), testController);
app.post("/register", userController.register);
app.post("/login", authController.login);

module.exports = app;
