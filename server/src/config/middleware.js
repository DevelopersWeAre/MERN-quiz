const express = require('express');
const cors = require('cors');

module.exports = function applyMiddleware(app) {
  const middleWares = [
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
  ];

  middleWares.forEach((middleWare) => {
    app.use(middleWare);
  });
};
