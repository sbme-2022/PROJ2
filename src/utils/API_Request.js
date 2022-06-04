const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const API_request = async function () {
    headers = { "apikey": process.env.apikey };
    const res = await axios.get('https://api.apilayer.com/exchangerates_data/latest', { headers: headers })
    return res.data;
}

module.exports = API_request;