const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
});

module.exports = {
  User: model('User', UserSchema),
  UserSchema,
};
