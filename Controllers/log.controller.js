const LogCtllr = {};

const Log = require('../models/Log');

LogCtllr.get = async (req, res) => {
  try {
    const { _id } = req.params;

    let log = await Log.findOne({ userId: _id }, ['count', 'log'])
      .populate({
        path: 'userId log',
        select: 'UserId._id username description duration date',
        exclude: 'exercise._id exercise.__v',
      })
      .lean();

    log._id = _id;
    log.username = log.userId.username;
    delete log.userId;

    log.log.forEach((item) => {
      delete item._id;
    });

    res.json(log);
  } catch (e) {
    res.json({
      error: e.mesage,
    });
  }
};

module.exports = LogCtllr;
