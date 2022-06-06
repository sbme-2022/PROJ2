const schedule = require("node-schedule");
const fetchToDB = require("../models/rates");
const rule = new schedule.RecurrenceRule();

const job = schedule.scheduleJob(" 0 */6 * * *", async function () {
  await fetchToDB();
});
module.exports = job;
