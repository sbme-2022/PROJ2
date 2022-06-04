const express = require("express");
const router = express.Router();

const { convert } = require("../controllers/convert");

const validate = require('../middleware/validate');
const validateConversion = require('../middleware/validateConversion');

router.get("/convert/:fromCurrency/:toCurrency/:amount", validate(validateConversion), convert);


module.exports = router;