let userCtllr = {};

const Log = require('../models/Log');
const { User } = require('../models/User');

userCtllr.create = async (req, res) => {
  const { username } = req.body;

  const newUser = await User.create({ username });

  await Log.create({ userId: newUser._id });

  res.send(newUser);
};

userCtllr.getAll = async (req, res) => {
  const users = await User.find({});

  console.log(users);

  res.send(users);
};

module.exports = userCtllr;
