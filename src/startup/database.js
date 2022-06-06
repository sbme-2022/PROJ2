const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function () {
  const db = process.env.MONGODB_URI;
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