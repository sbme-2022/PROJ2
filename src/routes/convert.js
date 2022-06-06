const express = require("express");
const router = express.Router();
const { convert } = require("../controllers/convert");
const validateConversion = require('../middleware/validateConversion');


router.get("/conversion/:fromCurrency/:toCurrency/:amount", validateConversion, convert);


module.exports = router;