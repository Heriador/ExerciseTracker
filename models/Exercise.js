const { Schema, model } = require('mongoose');

const ExerciseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date().toDateString(),
  },
});

module.exports = {
  Exercise: model('Exercise', ExerciseSchema),
  ExerciseSchema,
};
