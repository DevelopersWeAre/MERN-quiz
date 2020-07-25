const express = require('express');
const { testController } = require('../controllers');
const { auth } = require('../services');
const app = express();

app.get('/', testController);
app.post('/', auth.authorize(), testController);

module.exports = app;
