const { Schema, model } = require('mongoose');

const LogSchema = new Schema({
  count: {
    type: Number,
    default: 0,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  log: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
      require: true,
    },
  ],
});

module.exports = model('Log', LogSchema);
