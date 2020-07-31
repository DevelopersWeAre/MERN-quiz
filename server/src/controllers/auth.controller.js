const { ErrorHandler } = require("../util/ErrorHandler");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ErrorHandler(400, "Bad request, missing email or password");
    return res.status(200).send("Login route");
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
};
