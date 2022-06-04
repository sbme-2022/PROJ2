const express = require("express");
const router = express.Router();
const { CurrencyRate } = require("../models/rates");

router.get("/convert/:from/:to/:amount", async (req, res) => {

});


function logServerErrorAndRespond(err, friendlyMessage, res, statusCode = 500) {
    console.log(friendlyMessage, err);
    res.status(statusCode).send(`${friendlyMessage}: ${err.message}`);
}

module.exports = router;