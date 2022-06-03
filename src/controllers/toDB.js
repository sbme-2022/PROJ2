const API_request = require('./utils/API_Request');
const {CurrencyRate, validate} = require('./models/rates');

const fetch = (req, res) => {
    try {
        API_request().then(data => {
            const {base, date, rates} = data;
            const currencyRate = new CurrencyRate({base, date, rates});
            const {error} = validate(currencyRate);
            if (error) return res.status(400).send(error.details[0].message);
            currencyRate.save().then(() => res.send(currencyRate))
                .catch(err => res.status(400).send(err));
        }).catch(err => res.status(400).send(err));
    }
    catch (err) {
        res.status(400).send(err);
    }
}

exports.fetch = fetch;
