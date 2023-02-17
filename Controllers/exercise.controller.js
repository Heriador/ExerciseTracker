let exerciseCtllr = {};

const { Exercise } = require('../models/Exercise');
const Log = require('../models/Log');
const { User } = require('../models/User');

exerciseCtllr.create = async (req, res) => {
  try {
    const { _id } = req.params;

    const { description, duration, date } = req.body;

    const user = await User.findById(_id);

    if (!user) {
      res.json({
        error: 'User does not exist',
      });
    }

    const data = {
      userId: _id,
      description,
      duration,
      date,
    };

    if (!date) {
      delete data.date;
    }

    const newExercise = await Exercise.create(data);

    if (newExercise) {
      const log = await Log.findOne({ userId: _id });

      log.log = log.log.concat(newExercise._id);
      log.count = log.log.length;

      await log.save();
    }

    res.json({
      _id,
      username: user.username,
      description,
      duration,
      date: newExercise.date,
    });
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
};

module.exports = exerciseCtllr;
