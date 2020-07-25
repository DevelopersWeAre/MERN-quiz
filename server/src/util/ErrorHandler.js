class ErrorHandler extends Error {
  constructor(statusCode = 500, message = 'Internal Server Error') {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err;
  console.log('\x1b[31m%s\x1b[0m', `[ERROR] ${message}`);
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
