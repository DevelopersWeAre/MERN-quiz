const User = require("../models/user.model");
const _ = require("lodash");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = new User({
      email: email,
      password: password,
    });

    const response = await user.save();

    return res.status(201).json(_.pick(response, ["email", "score"]));
  } catch (e) {
    next(e);
  }
};

module.exports = {
  register,
};
