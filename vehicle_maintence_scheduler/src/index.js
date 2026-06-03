require("dotenv").config();
const { startMaintenanceScheduler } = require("./cron_job/maintenanceJob");

startMaintenanceScheduler();
