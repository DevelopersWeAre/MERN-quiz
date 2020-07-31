const { Error } = require("mongoose");

class ErrorHandler extends Error {
  constructor(statusCode = 500, message = "Internal Server Error") {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  // Dodato jer ValidationError nema statusCode, pa puca u default slucaju.
  if (err instanceof Error.ValidationError) {
    res.status(400).json({
      status: "error",
      statusCode: 400,
      message: err.errors,
    });
  } else {
    const { statusCode, message } = err;

    if (process.env.NODE_ENV !== "production") {
      console.log("\x1b[31m%s\x1b[0m", err.stack);
    }

    res.status(statusCode).json({
      status: "error",
      statusCode,
      message,
    });
  }
};

module.exports = {
  ErrorHandler,
  handleError,
};
