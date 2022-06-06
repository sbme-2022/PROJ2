const mongoose = require('mongoose');
const Joi = require('joi');
const API_request = require('../utils/API_Request');

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

const CurrencyRate = mongoose.model('currencyRate', currencyRateSchema);

function validateCurrencyRate(currencyRate) {
    const schema = Joi.object({
        base: Joi.string().min(3).max(3).required(),
        date: Joi.date().required(),
        rates: Joi.object().required()
    });

    return schema.validate(currencyRate);

}

async function getLatestRates() {
    const result = await CurrencyRate.find().sort({ _id: 1 }).limit(1);
    const rates = result[0].rates;
    return rates
}

const fetchToDB = function async(){
    const data = await API_request();

    if(!data){
        throw new Error('API request failed');
    }

    const {base, date, rates} = data;
    const currencyRate = new CurrencyRate({base, date, rates});

    const {error} = validateCurrencyRate(currencyRate);
    if (error) {
        throw new Error(error.details[0].message);
    }
    currencyRate.save();
    return currencyRate;
}

exports.CurrencyRate = CurrencyRate;
exports.validate = validateCurrencyRate;
module.exports = {fetchToDB, getLatestRates};
