const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  score: [{
    quiz: String,
    score: {
      type: Number,
      default: 0
    }
  }]
});

const User = model('User', UserSchema);
module.exports = User;
