const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const axios = require('axios');


headers = {"apikey": "kes6gUlcNf5ip1pjLhfgr2KI8CTfuaWN"};
axios.get('https://api.apilayer.com/exchangerates_data/latest', {headers: headers})
    .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log((res.data));
  })
  .catch(error => {
    console.error(error);
  });

app.get('/', (_req, res) => res.send('Currency Converter PROJ2!'))
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))