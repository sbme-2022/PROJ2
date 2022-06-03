const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


app.get('/', (_req, res) => res.send('Currency Converter PROJ2!'))
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))