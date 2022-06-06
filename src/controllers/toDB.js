const API_request = require("../utils/API_Request");
const { CurrencyRate, validate } = require("../models/rates");
const schedule = require("node-schedule");
const fetch_schedule = schedule.scheduleJob(
  "* 6 * * *",
  (fetch = async (_req, res) => {
    try {
      const data = await API_request();

      if (!data) {
        return res.status(400).send("API request failed");
      }

      const { base, date, rates } = data;
      const currencyRate = new CurrencyRate({ base, date, rates });

      const { error } = validate(currencyRate);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      currencyRate.save();
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

exports.fetch_schedule = fetch_schedule;
