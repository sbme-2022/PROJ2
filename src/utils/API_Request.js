const axios = require('axios');
const API_request = ()=>{
    headers = {"apikey": "kes6gUlcNf5ip1pjLhfgr2KI8CTfuaWN"};
    axios.get('https://api.apilayer.com/exchangerates_data/latest', {headers: headers})
        .then(res => {
        console.log(`statusCode: ${res.status}`);
        return(res.data);
    })
    .catch(error => {
        console.error(error);
    });
}

exports.API_request = API_request;