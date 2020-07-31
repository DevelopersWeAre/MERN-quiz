const { ErrorHandler } = require("../util/ErrorHandler");
const User = require("../models/user.model");
const { createToken } = require("../services/auth.service");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ErrorHandler(400, "Bad request, missing email or password");

    const user = await User.findOne({ email });

    if (user === null) throw new ErrorHandler(400, "User does not exist");

    let verified = await user.validatePassword(password);

    if (!verified) throw new ErrorHandler(401, "Unauthorized");

    let accessToken = createToken({ _id: user.id, email: user.email });

    return res.status(200).json({
      accessToken,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
};
