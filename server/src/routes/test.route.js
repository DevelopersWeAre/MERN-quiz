const express = require('express');
const { testController } = require('../controllers');
const authorization = require('../util/authorization');
const app = express();

app.get('/', testController);
app.post('/', authorization(), testController);

module.exports = app;
