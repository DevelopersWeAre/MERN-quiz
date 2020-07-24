const express = require('express');
const applyMiddleware = require('./config/middleware');
const connectWithMongoDB = require('./config/db');
const dotEnv = require('dotenv');
const { handleError } = require('./util/ErrorHandler');

dotEnv.config();
const app = express();
const port = process.env.PORT;
const baseURL = process.env.BASE_URL;
const apiRoot = process.env.API_ROOT;

connectWithMongoDB();
applyMiddleware(app);

app.use(apiRoot, require('./routes'));

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, () => {
  console.log(
    '\x1b[35m%s\x1b[0m',
    `[INIT] APPLICATION RUNNING ON ${baseURL}:${port}${apiRoot}`
  );
});
