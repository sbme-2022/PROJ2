const express = require('express')
const app = express()

require('./database')()
require('./startup/routes')(app);

app.get('/', (_req, res) => res.send('Currency Converter PROJ2!'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))