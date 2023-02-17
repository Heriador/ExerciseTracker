const mongoose = require('mongoose');
const { mongoUri } = require('../config.js');

mongoose.set('strictQuery', false);
mongoose
  .connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log('Database Connected'))
  .catch((e) => {
    console.log('Error Ocurred', e.message);
  });
