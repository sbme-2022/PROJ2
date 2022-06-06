const express = require('express');
const convert = require('../routes/convert');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/convert', convert);
}