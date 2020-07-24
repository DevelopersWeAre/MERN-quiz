const { ErrorHandler } = require('../util/ErrorHandler');

module.exports = async (req, res, next) => {
  try {
    if (req.query.fail) {
      throw new ErrorHandler(500, 'Testing error handler!');
    }

    res.status(200).json({
      status: 'OK',
      statusCode: 200,
      message: 'API test passed!',
    });
  } catch (error) {
    next(error);
  }
};
