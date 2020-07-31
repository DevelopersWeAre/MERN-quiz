const { Schema, model } = require("mongoose");
const { ErrorHandler } = require("../util/ErrorHandler");
const argon2 = require("argon2");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password can not be empty"],
  },
  score: [
    {
      quiz: String,
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
});

UserSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await argon2.hash(this.password, {
      memoryCost: 64 * 1024,
      hashLength: 32,
      timeCost: 3,
      parallelism: 2,
      type: 2,
    });

    return next();
  } catch (e) {
    next(e);
  }
});

UserSchema.methods.validatePassword = async function validatePassword(
  password
) {
  try {
    return await argon2.verify(this.password, password);
  } catch (e) {
    return Promise.reject(new ErrorHandler(500, "Internal server error"));
  }
};

const User = model("User", UserSchema);
module.exports = User;
