const axios = require('axios');
const API_request = async function(){
    headers = {"apikey": "kes6gUlcNf5ip1pjLhfgr2KI8CTfuaWN"};
    const res = await axios.get('https://api.apilayer.com/exchangerates_data/latest', {headers: headers})
    return res.data;
}

module.exports = API_request;