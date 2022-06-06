const express = require("express");
const job = require("../startup/scheduler");
const app = express();

require("./startup/database")();
require("./startup/routes")(app);

app.get("/", (_req, res) => res.send("Currency Converter PROJ2!"));
job();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
