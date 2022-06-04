
module.exports = function (req, res, next) {

    if (typeof req.params.fromCurrency == 'undefined' || req.params.fromCurrency == null || req.params.fromCurrency == '' || typeof req.params.toCurrency == 'undefined' || req.params.toCurrency == null || req.params.toCurrency == '' || typeof req.params.amount == 'undefined' || req.params.amount == null || req.params.amount == 0)
        return res.status(400).send("Missing or invalid parameters");
    next();
};
