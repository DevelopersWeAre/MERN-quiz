const express = require('express');
const { testController } = require('../controllers');
const app = express();

app.get('/', testController);

module.exports = app;
