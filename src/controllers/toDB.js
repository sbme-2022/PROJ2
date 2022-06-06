const {fetchToDB} = require('../models/rates');

const fetch = async (_req, res) => {
    try {
        const data = await fetchToDB();
        res.send(data);
    }
    catch (err) {
        res.status(400).send(err);
    }
  }

module.exports = fetch;
