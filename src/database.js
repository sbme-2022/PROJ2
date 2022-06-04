const mongoose = require('mongoose');

module.exports = function () {
    const db = process.env.MONGODB_URI || 'mongodb://localhost/currency_converter';
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`Connected to ${db}`);
      })
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
  };