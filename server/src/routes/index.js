const express = require('express');
const router = express();

router.use('/test', require('./test.route'));

module.exports = router;
