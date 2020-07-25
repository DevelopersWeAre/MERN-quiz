const { Schema, model } = require('mongoose');

const QuizSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  timesRated: {
    type: Number,
    default: 0
  },
  content: [{
    question: {
      type: String,
      required: true
    },
    answers: {
      type: [{
        text: {
          type: String,
          required: true
        },
        correct: {
          type: Boolean,
          default: false
        }
      }],
      validate: [answersLength, 'You must provide 4 answers'],
      required: true
    }
  }]
});

function answersLength(arr) {
  return arr.length === 4;
}

const Quiz = model('Quiz', QuizSchema);
module.exports = Quiz;
