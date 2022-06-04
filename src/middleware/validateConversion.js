
export default function (req, res, next) {
    if (!req.params.fromCurrency || !req.params.toCurrency || !req.params.amount)
        return res.status(400).send("Missing parameters");
    next();
};
