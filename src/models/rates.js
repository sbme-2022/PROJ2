const mongoose = require('mongoose');
const Joi = require('joi');

const currencyRateSchema = new mongoose.Schema({
    base: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    rates: {
        type: Object,
        required: true
    }
});

const currencyRate = mongoose.model('currencyRate', currencyRateSchema);

function validateCurrencyRate(currencyRate) {
    const schema = {
        base: Joi.string().min(3).max(3).required(),
        date: Joi.date().required(),
        rates: Joi.object().required()
    };

    return Joi.validate(currencyRate, schema);
}
exports.CurrencyRate = currencyRate;
exports.validate = validateCurrencyRate;